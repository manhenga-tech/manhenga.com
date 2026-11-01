'use client';
import Link from 'next/link';
import { useState } from 'react';
import AddToQuote from './AddToQuote';
import { useQuote, cleanQuantity } from './QuoteProvider';
export default function ProductActions({ id }) {
 const [quantity, setQuantity] = useState(1); const { status, count } = useQuote();
 return <div className="product-actions"><label htmlFor="product-quantity">Quantity</label><input id="product-quantity" type="number" min="1" max="99" value={quantity} onChange={event => setQuantity(cleanQuantity(event.target.value))} /><AddToQuote id={id} quantity={quantity} className="theme-btn" /><p className="quote-status" aria-live="polite">{status}</p><Link className="read-more" href="/store/basket/">View Quote Basket ({count}) <i className="far fa-arrow-right" aria-hidden="true" /></Link></div>;
}
