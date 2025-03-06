import { Metadata } from "next";
import { PROJECT_LIST } from "@/constants/project";

export async function generateMetadata({
  params,
}: {
  params: { id?: string };
}): Promise<Metadata> {

  const {id} = await params;
  if (!id) {
    return {
      title: "프로젝트를 찾을 수 없습니다.",
      description: "존재하지 않는 프로젝트입니다.",
    };
  }
  const project = PROJECT_LIST.find((p) => p.id === id);

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다.",
      description: "존재하지 않는 프로젝트입니다.",
    };
  }

  return {
    title: project.title,
    description: project.subTitle,
    openGraph: {
      title: project.title,
      description: project.subTitle,
      url: `/project/${project.id}`,
      type: "website",
      images: project.id
        ? [
            {
              url: `/images/project/${project.id}/thumbnail.webp`,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.subTitle,
      images: project.id
        ? [`/images/project/${project.id}/thumbnail.webp`]
        : [],
    },
  };
}
