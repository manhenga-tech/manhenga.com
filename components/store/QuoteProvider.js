'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { productById } from '@/data/store';
const QuoteContext = createContext(null);
const storageKey = 'manhenga-tech-quote-v1';
export const cleanQuantity = value => Math.min(99, Math.max(1, Math.trunc(Number(value)) || 1));
export default function QuoteProvider({ children }) {
 const [items, setItems] = useState([]);
 const [ready, setReady] = useState(false);
 const [status, setStatus] = useState('');
 useEffect(() => {
  try {
   const parsed = JSON.parse(localStorage.getItem(storageKey) || '[]');
   if (Array.isArray(parsed)) {
    const clean = new Map();
    for (const item of parsed) if (item && productById(item.id)) clean.set(item.id, { id: item.id, quantity: cleanQuantity(item.quantity) });
    setItems([...clean.values()]);
   }
  } catch { /* A blocked or invalid browser store does not prevent enquiries. */ }
  setReady(true);
 }, []);
 useEffect(() => { if (ready) { try { localStorage.setItem(storageKey, JSON.stringify(items)); } catch {} } }, [items, ready]);
 const addItem = useCallback((id, quantity = 1) => {
  const product = productById(id); if (!product) return;
  setItems(current => { const found = current.find(item => item.id === id); return found ? current.map(item => item.id === id ? { ...item, quantity: cleanQuantity(item.quantity + cleanQuantity(quantity)) } : item) : [...current, { id, quantity: cleanQuantity(quantity) }]; });
  setStatus(`${product.name} added to your quote basket.`);
 }, []);
 const setQuantity = useCallback((id, quantity) => setItems(current => current.map(item => item.id === id ? { ...item, quantity: cleanQuantity(quantity) } : item)), []);
 const removeItem = useCallback(id => { setItems(current => current.filter(item => item.id !== id)); setStatus('Item removed from your quote basket.'); }, []);
 const clear = useCallback(() => { setItems([]); setStatus('Your quote basket is empty.'); }, []);
 const count = items.reduce((sum, item) => sum + item.quantity, 0);
 const value = useMemo(() => ({ items, ready, status, count, addItem, setQuantity, removeItem, clear }), [items, ready, status, count, addItem, setQuantity, removeItem, clear]);
 return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}
export function useQuote() { const value = useContext(QuoteContext); if (!value) throw new Error('QuoteProvider is required'); return value; }
