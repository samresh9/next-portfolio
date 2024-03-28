import { Chip } from "@nextui-org/react";

export default async function Skills(skills: any) {
  const { data } = skills;
  console.log(data);
  return (
    <div className="flex flex-wrap gap-3 max-w-md">
      {data.map((skill: any) => (
        <Chip
          size="lg"
          variant="shadow"
          key={skill.id}
          className="bg-slate-800 text-2xl text-white"
        >
          <code className="font-semibold">{skill.attributes.name}</code>
        </Chip>
      ))}
    </div>
  );
}
