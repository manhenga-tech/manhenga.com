import { business } from '@/data/business';
export function pageMetadata(title, description, path, image = 'network') {
 const name = `${title} | Manhenga Tech`;
 const images = [{ url: `/assets/images/manhenga/${image}.webp`, alt: `${title} — Manhenga Tech` }];
 return { title: name, description, alternates: { canonical: path }, openGraph: { type: 'website', locale: 'en_ZW', siteName: business.name, url: path, title: name, description, images }, twitter: { card: 'summary_large_image', title: name, description, images: images.map(item => item.url) } };
}
