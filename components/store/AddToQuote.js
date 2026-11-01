'use client';
import { useQuote } from './QuoteProvider';
export default function AddToQuote({ id, quantity = 1, className = 'theme-btn btn-small' }) {
 const { addItem, ready } = useQuote();
 return <button type="button" className={className} disabled={!ready} onClick={() => addItem(id, quantity)}><i className="far fa-plus" aria-hidden="true" /> Add to Quote</button>;
}
