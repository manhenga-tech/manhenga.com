/* Manhenga Tech — plain JavaScript navigation, filters and quotation basket. */
(() => {
  'use strict';
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const root = document.body.dataset.siteRoot || './';
  const products = JSON.parse($('#quote-products')?.textContent || '[]');
  const productById = id => products.find(product => product.id === id);
  const quantity = value => Math.min(99, Math.max(1, Math.trunc(Number(value)) || 1));
  const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const storageKey = 'manhenga-tech-quote-v1';
  const productUrl = id => root + 'store/' + encodeURIComponent(id) + '/index.html';

  // Desktop disclosure and mobile navigation use the same links.
  const nav = $('#main-navigation');
  const toggle = $('.navbar-toggle');
  const more = $('.nav-more-toggle');
  const moreGroup = $('.nav-more');
  const submenu = $('#more-navigation');
  const menuIsOpen = () => more?.getAttribute('aria-expanded') === 'true';
  const setMore = open => {
    if (!more || !submenu) return;
    more.setAttribute('aria-expanded', String(open));
    submenu.hidden = !open;
  };
  const setMobile = open => {
    if (!nav || !toggle) return;
    nav.classList.toggle('show', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    setMore(false);
  };
  toggle?.addEventListener('click', () => setMobile(toggle.getAttribute('aria-expanded') !== 'true'));
  more?.addEventListener('click', () => setMore(!menuIsOpen()));
  more?.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    setMore(true);
    const links = $$('a', submenu);
    links[event.key === 'ArrowUp' ? links.length - 1 : 0]?.focus();
  });
  submenu?.addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    const links = $$('a', submenu);
    const index = links.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    links[(index + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length]?.focus();
  });
  moreGroup?.addEventListener('focusout', event => {
    if (!moreGroup.contains(event.relatedTarget)) setMore(false);
  });
  document.addEventListener('pointerdown', event => {
    if (moreGroup && !moreGroup.contains(event.target)) setMore(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (menuIsOpen()) { setMore(false); more.focus(); }
    else if (toggle?.getAttribute('aria-expanded') === 'true') { setMobile(false); toggle.focus(); }
  });
  $$('a', nav || document.createElement('div')).forEach(link => link.addEventListener('click', () => setMobile(false)));
  window.addEventListener('resize', () => {
    setMore(false);
    if (window.innerWidth >= 992) setMobile(false);
  });
  const sticky = () => $('.main-header')?.classList.toggle('fixed-header', window.scrollY >= 100);
  window.addEventListener('scroll', sticky, { passive: true });
  sticky();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.AOS) window.AOS.init({ duration: 1500, offset: 50, once: true, disable: reducedMotion });
  else $$('[data-aos]').forEach(element => element.classList.add('aos-animate'));
  window.setTimeout(() => { $('[data-preloader]')?.remove(); }, reducedMotion ? 0 : 1500);

  // Keep existing baskets when moving from the earlier version of the site.
  function readItems() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (!Array.isArray(parsed)) return [];
      const clean = new Map();
      parsed.forEach(item => {
        if (item && productById(item.id)) clean.set(item.id, { id: item.id, quantity: quantity(item.quantity) });
      });
      return Array.from(clean.values());
    } catch { return []; }
  }
  let items = readItems();
  const itemCount = () => items.reduce((total, item) => total + item.quantity, 0);
  function updateCounts() {
    const count = itemCount();
    $$('[data-basket-link]').forEach(link => {
      if (link.classList.contains('quote-nav')) {
        $('span', link).textContent = count;
        link.setAttribute('aria-label', 'Quote basket, ' + count + ' items');
      } else {
        link.innerHTML = escape(link.dataset.basketCountLabel) + ' (' + count + ') <i class="far fa-arrow-right" aria-hidden="true"></i>';
      }
    });
  }
  function announce(message) {
    $$('.quote-status').forEach(element => { element.textContent = message; });
  }
  function saveItems(message = '') {
    try { localStorage.setItem(storageKey, JSON.stringify(items)); } catch { /* The current page still works if storage is blocked. */ }
    updateCounts();
    if ($('#quote-basket')) renderBasket();
    if (message) announce(message);
  }
  $$('[data-add-quote]').forEach(button => {
    button.disabled = false;
    button.addEventListener('click', () => {
      const id = button.dataset.addQuote;
      const product = productById(id);
      if (!product) return;
      const amount = quantity($('#product-quantity', button.closest('.product-actions') || document.createElement('div'))?.value || 1);
      const found = items.find(item => item.id === id);
      if (found) found.quantity = quantity(found.quantity + amount);
      else items.push({ id, quantity: amount });
      saveItems(product.name + ' added to your quote basket.');
    });
  });
  $('#product-quantity')?.addEventListener('change', event => { event.target.value = quantity(event.target.value); });

  function basketRow(item) {
    const product = productById(item.id);
    return `<article class="basket-item" data-item-id="${escape(item.id)}">
      <div><span class="product-category">${escape(product.category)}</span><h3><a href="${productUrl(item.id)}">${escape(product.name)}</a></h3><p>Price and model confirmed in your quotation.</p></div>
      <div class="basket-item-controls"><label for="quantity-${escape(item.id)}">Quantity</label><div class="quantity-controls">
        <button type="button" data-quantity-step="-1" aria-label="Decrease ${escape(product.name)} quantity" ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
        <input id="quantity-${escape(item.id)}" type="number" min="1" max="99" value="${item.quantity}">
        <button type="button" data-quantity-step="1" aria-label="Increase ${escape(product.name)} quantity" ${item.quantity >= 99 ? 'disabled' : ''}>+</button>
      </div><button type="button" class="remove-item" data-remove-item aria-label="Remove ${escape(product.name)}">Remove</button></div>
    </article>`;
  }
  function renderBasket() {
    const basket = $('#quote-basket');
    if (!basket) return;
    if (!items.length) {
      basket.innerHTML = `<div class="empty-state"><i class="far fa-shopping-bag" aria-hidden="true"></i><h2>Your quote basket is empty.</h2><p>Browse equipment and solutions, then add the items you want us to quote.</p><a href="${root}store/index.html" class="theme-btn">Explore the Store</a></div>`;
      return;
    }
    const count = itemCount();
    const message = 'Hello Manhenga Tech, please send me a quotation for:\n\n' + items.map(item => item.quantity + ' × ' + productById(item.id).name).join('\n') + '\n\nPlease confirm the exact models, current availability, installation options and total cost.';
    basket.innerHTML = `<div class="basket-heading"><h2>Your quotation request</h2><span>${count} ${count === 1 ? 'item' : 'items'}</span></div>
      <div class="row"><div class="col-lg-8"><div class="basket-items">${items.map(basketRow).join('')}</div><div class="basket-bottom"><a class="read-more" href="${root}store/index.html">Continue browsing <i class="far fa-arrow-right" aria-hidden="true"></i></a><button type="button" class="remove-item" data-clear-basket>Clear basket</button></div></div>
      <div class="col-lg-4"><aside class="quote-summary"><h2>Request your quote</h2><p>Ask our team to confirm equipment, installation and pricing for your selection.</p>
        <a class="theme-btn" data-quote-whatsapp href="https://wa.me/263779313243?text=${encodeURIComponent(message)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp" aria-hidden="true"></i> Continue on WhatsApp</a>
        <p class="small-note">Opens a WhatsApp draft. Send the message there to reach our team. No payment is taken on this website.</p>
        <a class="read-more" href="mailto:info@manhenga.com?subject=Equipment%20quotation%20request&amp;body=${encodeURIComponent(message)}">Request by email <i class="far fa-arrow-right" aria-hidden="true"></i></a>
      </aside></div></div>`;
  }
  $('#quote-basket')?.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    const id = button.closest('[data-item-id]')?.dataset.itemId;
    if (button.hasAttribute('data-clear-basket')) {
      items = []; saveItems('Your quote basket is empty.');
    } else if (button.hasAttribute('data-remove-item')) {
      items = items.filter(item => item.id !== id);
      saveItems('Item removed from your quote basket.');
      $('#quote-basket h2, #quote-basket h3 a')?.focus();
    } else if (button.hasAttribute('data-quantity-step')) {
      const step = button.dataset.quantityStep;
      const item = items.find(item => item.id === id);
      if (item) item.quantity = quantity(item.quantity + Number(step));
      saveItems();
      const row = $$('[data-item-id]').find(row => row.dataset.itemId === id);
      const next = row && $(`[data-quantity-step="${step}"]`, row);
      if (next && !next.disabled) next.focus();
      else row?.querySelector('input')?.focus();
    }
  });
  $('#quote-basket')?.addEventListener('change', event => {
    if (!event.target.matches('input[type="number"]')) return;
    const id = event.target.closest('[data-item-id]').dataset.itemId;
    const item = items.find(item => item.id === id);
    if (item) item.quantity = quantity(event.target.value);
    saveItems();
    document.getElementById('quantity-' + id)?.focus();
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    items = readItems(); updateCounts(); renderBasket();
  });
  updateCounts(); renderBasket();

  const storeSearch = $('#store-search');
  if (storeSearch) {
    const grid = $('#catalogue-grid');
    const cards = $$('[data-catalogue-item]', grid);
    const categories = $$('[data-store-category]');
    const sort = $('select[aria-label="Sort store products"]');
    let category = 'All';
    function filterStore() {
      const query = storeSearch.value.trim().toLowerCase();
      let count = 0;
      cards.forEach(card => {
        card.hidden = !((category === 'All' || card.dataset.category === category) && card.dataset.search.includes(query));
        if (!card.hidden) count++;
      });
      const ordered = sort.value === 'name' ? [...cards].sort((a, b) => $('h2', a).textContent.localeCompare($('h2', b).textContent)) : cards;
      ordered.forEach(card => grid.append(card));
      $('.catalog-toolbar [role="status"]').textContent = count + (count === 1 ? ' solution' : ' solutions');
      $('#catalogue-empty').hidden = count !== 0;
      categories.forEach(button => {
        const selected = category === button.dataset.storeCategory;
        button.setAttribute('aria-pressed', String(selected));
        button.classList.toggle('selected-category', selected);
      });
    }
    categories.forEach(button => button.addEventListener('click', () => { category = button.dataset.storeCategory; filterStore(); }));
    storeSearch.addEventListener('input', filterStore);
    sort.addEventListener('change', filterStore);
    $('[data-reset-store]').addEventListener('click', () => { storeSearch.value = ''; category = 'All'; filterStore(); storeSearch.focus(); });
    filterStore();
  }
  const blogSearch = $('#blog-search');
  if (blogSearch) {
    const cards = $$('[data-blog-item]');
    const category = $('#blog-category');
    function filterBlog() {
      const query = blogSearch.value.trim().toLowerCase();
      let count = 0;
      cards.forEach(card => {
        card.hidden = !((category.value === 'All' || card.dataset.category === category.value) && card.dataset.search.includes(query));
        if (!card.hidden) count++;
      });
      $('.results-count').textContent = count + (count === 1 ? ' guide' : ' guides');
      $('#blog-empty').hidden = count !== 0;
    }
    blogSearch.addEventListener('input', filterBlog);
    category.addEventListener('change', filterBlog);
    $('[data-reset-blog]').addEventListener('click', () => { blogSearch.value = ''; category.value = 'All'; filterBlog(); blogSearch.focus(); });
    filterBlog();
  }
})();
