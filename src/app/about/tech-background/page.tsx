import Skills from "@/components/skills/skills";
import { getAllStacks } from "@/strapi/serverCall";
import { Divider } from "@nextui-org/react";

export default  async function TechBackground() {
  const skills: any = await getAllStacks();
  return (
    <article>
      <code className="text-medium inline-block mb-5">Skills</code>
      <Skills {...skills} />
{/* comment */}
      <Divider className="my-12 max-w-screen-md" />
    </article>
  );
}
