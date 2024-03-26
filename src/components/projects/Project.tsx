import { ProjectDataProps } from "@/types/projectType";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Link,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
type ExtendedProjectProps = ProjectDataProps & { setSizes?: boolean };
export default function Project(projectData: ExtendedProjectProps) {
  const { attributes, divider } = projectData;
  const { name, description, liveUrl, sourceCodeUrl } = attributes;
  const { url, alternativeText, formats } =
    attributes.projectImage.data?.attributes;
  const { height, width } = formats?.medium;
  return (
    <>
      <Card
        isBlurred
        className={`bg-background/60  dark:bg-default-100/50 shadow-md relative`}
        shadow="none"
      >
        <CardHeader className="flex-2">
          <Image
            alt="cover"
            src={`http://localhost:1337${url}`}
            width={width}
            height={height}
            sizes={
              projectData.setSizes
                ? "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                : "(min-width: 1024px) 50vw, 100vw"
            }
          />
        </CardHeader>
        <CardBody className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{name}</h1>
          <p className="mb-8">{description}</p>
          <div className="flex mt-auto flex-wrap gap-2 mb-6">
            {attributes.stacks.data.map((s: any) => (
              <Chip
                className="bg-blue-600 text-white dark:bg-teal-400/10 dark:text-teal-300"
                key={s}
              >
                {s.attributes.name}
              </Chip>
            ))}
          </div>
          <div className="flex gap-1">
            <Link
              href={liveUrl}
              className="w-28 py-3 rounded-md text-tiny text-white bg-zinc-900 dark:bg-black/10 border border-transparent dark:border-teal-400/5 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </Link>
            <Link
              href={sourceCodeUrl}
              className="w-28 py-3 rounded-md text-tiny text-white bg-zinc-900 dark:bg-black/10 border border-transparent dark:border-teal-400/5 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Link>
          </div>
        </CardBody>
      </Card>
      {divider && (
        <Divider className="my-20 bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400" />
      )}
    </>
  );
}
