const attributes = "adadsds\n```\n<div>asjdad</div>\n```\njksjkkjfsd\n";
export default function BlogDetails({
  params,
}: {
  params: { blogId: string };
}) {
  return <div>Detail about the blog {params.blogId}
     <article className="max-w-screen-md m-auto">
        <div
          dangerouslySetInnerHTML={{ __html: attributes }}
          className="prose prose-lg break-words text-primary prose-headings:text-secondary prose-strong:text-primary dark:prose-blockquote:text-slate-300 bg-code dark:prose-a:text-blue-700"
        />
      </article>
  </div>;
}
