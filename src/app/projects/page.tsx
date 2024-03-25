import { Container } from "@/components/container/Container";
import Project from "@/components/projects/Project";
import { getProjects } from "@/strapi/project";
import { ProjectDataProps } from "@/types/projectType";

export default async function ProjectsPage() {
  const projects: { data: ProjectDataProps[] } = await getProjects();
  return (
    <>
      <Container>
        <section className=" max-w-screen-md m-auto mt-9">
          <h1 className="text-4xl font-bold tracking-tight mb-12">
            Personal Projects
          </h1>
          {projects.data.map((p, i, arr) => (
            <Project {...p} divider={!!arr[i + 1]} key={p.id} />
          ))}
        </section>
      </Container>
    </>
  );
}
