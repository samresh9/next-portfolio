import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Blog(blogData: any) {
  const { attributes: blog } = blogData;
  const { url, alternativeText, formats } = blog?.imgUrl.data.attributes ?? {};
  const { width, height } = formats?.medium ?? formats.small;
  return (
    <>
      <Link href={`/blog/${blog?.slug || ""}`}>
        <Card className="gap-5 bg-transparent shadow-none h-full">
          <CardHeader
            className="overflow-visible 
          p-0 flex-1"
          >
            <Image
              alt={alternativeText || "blog image"}
              className="object-cover rounded-xl w-full m-auto flex"
              //   style={{
              //     aspectRatio: "1.75/1",
              //   }}
              src={ url}
              width={width}
              height={height}
            />
          </CardHeader>
          <CardBody className="pb-0 pt-2 flex-col items-start p-0 gap-1">
            <Chip color="secondary" className="mb-3">
              Javascript
            </Chip>
            <h4 className="font-bold text-xl mb-5 min-h-14">{blog?.title}</h4>
            <small className="text-default-500 text-medium mb-5 min-h-20 block">
              {blog?.description}
            </small>
            <div className="mt-auto flex justify-between w-full pb-2">
              <time dateTime={blog?.date}>{blog?.date}</time>
              <span>{blog?.readTime} min read</span>
            </div>
          </CardBody>
        </Card>
      </Link>
    </>
  );
}
