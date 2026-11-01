import Link from 'next/link';
import { formatDate } from '@/data/blog';
export default function BlogCards({ posts }) {
 return <div className="row">{posts.map(post => <div className="col-lg-4 col-md-6" key={post.slug}><article className="blog-item manhenga-blog-card"><Link className="image" href={`/blog/${post.slug}/`} aria-label={`Read ${post.title}`}><img src={`/assets/images/manhenga/${post.image}.webp`} alt={post.alt} width="1000" height="667" loading="lazy" /></Link><div className="content"><ul className="blog-meta"><li>{post.category}</li><li><time dateTime={post.date}>{formatDate(post.date)}</time></li></ul><h3 className="title"><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="read-more" href={`/blog/${post.slug}/`}>Read the guide <i className="far fa-arrow-right" aria-hidden="true" /></Link></div></article></div>)}</div>;
}
