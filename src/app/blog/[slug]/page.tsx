import { getBlogArticle } from "@/strapi/project";
import { notFound } from "next/navigation";
import { Container } from "@/components/container/Container";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);
  const article: any = await getBlogArticle(params.slug);

  if (article.error) {
    notFound();
  }
  const { title, description, date, readTime, imgUrl } =
    article?.data[0].attributes;
  const { url, alternativeText, width, height } = imgUrl.data.attributes;
  return (
    <>
      <Container>
        <header className="max-w-screen-md m-auto mb-16">
          <h1 className="font-bold text-4xl mb-6">{title}</h1>
          <div className="flex justify-between">
            <div className="text-default-500 text-large font-semibold inline-block mb-10">
              {date}
            </div>
            <Chip color="secondary">Javascript</Chip>
            <div className="text-default-500 text-large font-semibold inline-block mb-10">
              {readTime}min read
            </div>
          </div>
          <Image
            src={`http://localhost:1337${url}`}
            alt={alternativeText || "blog image"}
            width={width}
            height={height}
            className="object-cover"
            // style={{ maxHeight: "34rem" }}
          />
        </header>
        <article className="max-w-screen-md m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro
          similique labore ea laboriosam? Eligendi nat us pariatur
          necessitatibus cumque porro optio, sunt iure alias laboriosam harum,
          amet autem totam hic.
        </article>
      </Container>
    </>
  );
}
