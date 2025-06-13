import { notFound } from "next/navigation";
import { getProjectContent } from "@/utils/mdx";
import { generateMetadata } from "@/features/Project/utils/projectMetadata";
import ImageCarousel from "@/features/Project/components/imageCarousel";

import { SummaryCard } from "@/features/Project/components/summaryCard";
import ProjectContent from "@/features/Project/components/projectContent";
import ProjectInfo from "@/features/Project/components/projectInfo";

export { generateMetadata };


export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mdxContent = await getProjectContent(id);

  if (!mdxContent) return notFound();

  const { content, frontmatter } = mdxContent;
  const thumbnail = `/images/project/${id}/thumbnail.${frontmatter.thumbnailFormat || "webp"}`;
  const images = [thumbnail, ...(frontmatter.extraImages || [])];
  const Links = frontmatter.links || [];

  return (
    <div className="flex w-full items-center scrollbar-hide">
      <div className="flex flex-col w-full mt-[100px]">
        <ProjectInfo title={frontmatter.title} subtitle={frontmatter.subTitle} link={Links} />

        <SummaryCard teamMembers={frontmatter.teamMembers} period={frontmatter.period} techStack={frontmatter.techStack} />

        <section className="mb-16 flex justify-center items-center">
          <ImageCarousel images={images} projectTitle={frontmatter.title} />
        </section>

        <ProjectContent content={content} />
      </div>
    </div>
  );
}
