import { getBlogs } from "@/strapi/project";

export default async function Blog() {
  const blogs = await getBlogs();
  return <div>Hello from my blogs</div>;
}
