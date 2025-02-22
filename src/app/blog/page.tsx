import Blog from "@/components/blog/Blog";
import { Container } from "@/components/container/Container";
import { getBlogs } from "@/strapi/serverCall";

export default async function BlogsPage() {
  const blogs: any = await getBlogs();
  if(blogs.error){
    throw new Error("The blog is currently on a break. We'll be back soon with fresh content and insightful discussions.")
  }
  
  return (
    <>
      <Container>
        <section>
          <h2 className="text-3xl font-semibold mb-8"> Articles</h2>
          <div className="grid gap-16 grid-cols-1 sm:grid-cols2 lg:grid-cols-3">
            {blogs.data.map((b: any) => (
              <Blog {...b} key={b.id} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
