import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/data/blog-posts";
import { pageMetadata } from "@/lib/seo";
import BlogPostView from "@/views/blog-post";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} | HVAC Digitals Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getPost(slug)) notFound();
  return <BlogPostView />;
}
