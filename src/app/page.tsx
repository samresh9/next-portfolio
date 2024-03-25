import { Container } from "@/components/container/Container";
import { Showcase } from "@/components/showcase/Showcase";
import { getBlogs, getProjects } from "@/strapi/project";
import Projects from "@/components/projects/Projects";
import { ProjectDataProps } from "@/types/projectType";
import Blog from "@/components/blog/Blog";

export default async function Home() {
  const projects: { data: ProjectDataProps[] } = await getProjects();
  const blogs: any = await getBlogs();
  return (
    <>
      <Container>
        <Showcase />
        <h2 className="text-3xl mb-12 font-mono tracking-wide">
          Personal Projects
        </h2>
        <Projects projects={projects} />

        <h2 className="text-3xl mb-12 font-mono tracking-wide mt-20">
          Latest Articles
        </h2>

        <section>
          <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.data.map((b: any) => (
              <Blog {...b} key={b.id} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
