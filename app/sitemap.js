import { business, services } from '@/data/business';
import { posts } from '@/data/blog';
import { products } from '@/data/store';
export default function sitemap() {
 const paths = ['/', '/about/', '/services/', '/blog/', '/store/', '/team/', '/contact/', ...services.map(service => `/services/${service.id}/`), ...posts.map(post => `/blog/${post.slug}/`), ...products.map(product => `/store/${product.id}/`)];
 return paths.map(path => ({ url: `${business.url}${path}` }));
}
