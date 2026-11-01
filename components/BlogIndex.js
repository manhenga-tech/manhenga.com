'use client';
import { useState } from 'react';
import { posts } from '@/data/blog';
import BlogCards from './BlogCards';
export default function BlogIndex() {
 const [query, setQuery] = useState(''); const [category, setCategory] = useState('All');
 const categories = ['All', ...new Set(posts.map(post => post.category))];
 const filtered = posts.filter(post => (category === 'All' || category === post.category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase().trim()));
 return <section className="py-100 rpy-70"><div className="container"><div className="blog-filters"><div><label htmlFor="blog-search">Search the blog</label><input id="blog-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search practical technology guides" /></div><div><label htmlFor="blog-category">Topic</label><select id="blog-category" value={category} onChange={event => setCategory(event.target.value)}>{categories.map(name => <option key={name}>{name}</option>)}</select></div></div><p className="results-count" role="status">{filtered.length} {filtered.length === 1 ? 'guide' : 'guides'}</p><BlogCards posts={filtered} />{!filtered.length && <div className="empty-state"><h2>No guides found</h2><p>Try another topic or search term.</p><button type="button" className="theme-btn btn-small" onClick={() => { setQuery(''); setCategory('All'); }}>Show all guides</button></div>}</div></section>;
}
