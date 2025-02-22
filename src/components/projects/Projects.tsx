import Project from "@/components/projects/Project";

export default function Projects({ projects }: { projects: any }) {
  return (
    <section>
      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 mb-10">
        {projects.data.map((project: any) => (
          <Project {...project} key={project.id} setSize={true} />
        ))}
      </div>
    </section>
  );
}
