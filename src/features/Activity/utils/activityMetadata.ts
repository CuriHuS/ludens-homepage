import { Metadata } from "next";
import { ACTIVITY_LIST } from "@/constants/activity";

type tParams = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const { id } = await params;

  if (!id) {
    return {
      title: "활동을 찾을 수 없습니다.",
      description: "존재하지 않는 활동입니다.",
    };
  }

  const activity = ACTIVITY_LIST.find((a) => a.id === id);

  if (!activity) {
    return {
      title: "활동을 찾을 수 없습니다.",
      description: "존재하지 않는 활동입니다.",
    };
  }

  return {
    title: activity.title,
    description: activity.description,

    openGraph: {
      title: activity.title,
      description: activity.description,
      type: "website",

      url: `/activity/${activity.id}`,

      images: [
        {
          url: `/images/activity/${activity.id}/thumbnail.webp`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: activity.title,
      description: activity.description,
      images: [`/images/activity/${activity.id}/thumbnail.webp`],
    },

    other: {
      date: activity.date,
      year: activity.year,
      type: activity.type,
    },
  };
}
