import BlogPost from "../BlogPost";

export function generateStaticParams() {
  // Return the slugs for each blog post to generate static pages
  return [
    { slug: "future-of-web-development" },
    { slug: "mastering-react-hooks" },
    { slug: "building-scalable-backend-systems" },
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  if (!slug) {
    return <div>Slug not found</div>;
  }

  return <BlogPost slug={slug} />;
}
