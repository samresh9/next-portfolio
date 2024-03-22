import { Container } from "@/components/container/Container";
import { Showcase } from "@/components/showcase/Showcase";
import { getProjects } from "@/strapi/project";

export default async function Home() {
    const projects :{} = await getProjects();
    console.log(projects)
  return (
    <>
      <Container>
        <Showcase/>
        <h2 className="text-3xl mb-12 font-mono tracking-wide">
          Personal Projects
        </h2>
      </Container>
    </>
  );
}
