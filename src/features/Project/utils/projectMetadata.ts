import { Metadata } from "next";
import { getProjectContent } from "@/utils/mdx";

type tParams = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { id } = await params;

  if (!id) {
    return {
      title: "프로젝트를 찾을 수 없습니다.",
      description: "존재하지 않는 프로젝트입니다.",
    };
  }

  const mdxContent = await getProjectContent(id);

  if (!mdxContent) {
    return {
      title: "프로젝트를 찾을 수 없습니다.",
      description: "존재하지 않는 프로젝트입니다.",
    };
  }

  const { frontmatter } = mdxContent;

  return {
    title: frontmatter.title,
    description: frontmatter.subTitle,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.subTitle,
      url: `/project/${id}`,
      type: "website",
      images: [
        {
          url: `/images/project/${id}/thumbnail.${frontmatter.thumbnailFormat || "webp"}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.subTitle,
      images: [`/images/project/${id}/thumbnail.${frontmatter.thumbnailFormat || "webp"}`],
    },
  };
}
