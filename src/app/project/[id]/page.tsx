import { notFound } from "next/navigation";
import { PROJECT_LIST } from "@/constants/project";
import { generateMetadata } from "@/features/Project/utils/projectMetadata";
import ImageSlider from "@/features/Project/components/ImageSlider";
import youtubeLogo from "@/assets/icons/youtube.svg";
import githubLogo from "@/assets/icons/github.svg";
import steamLogo from "@/assets/icons/steam.svg";
import Link from "next/link";
import Image from "next/image";
export { generateMetadata };

export type Link = {
  type: "youtube" | "github" | "steam";
  href: string;
};

const logoMap = {
  youtube: youtubeLogo,
  github: githubLogo,
  steam: steamLogo,
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await params;
  if (!id) return notFound();
  const project = PROJECT_LIST.find((p) => p.id === id);

  if (!project) return notFound();

  const thumbnail = `/images/project/${project.id}/thumbnail.${
    project.thumbnailFormat || "webp"
  }`;
  const extraImages = project.extraImages ?? [];
  const images = [thumbnail, ...extraImages];
  const Links = project.links ?? [];

  return (
    <div className="flex items-center justify-center bg-black/50 min-h-screen">
      <div className="relative w-full max-w-6xl mt-10 overflow-y-auto bg-neutral-900 text-white rounded-xl p-4 md:p-8 scrollbar-hide">
        <div className="flex flex-col gap-6 mt-8">
          <div className="bg-gray-700/70 rounded-[10px] p-6">
            <p className="font-bold text-2xl md:text-4xl mb-1">
              {project.title}
            </p>
            <p className="mt-2">{project.subTitle}</p>
            {Links && (
              <div className="mt-auto flex items-center gap-1 justify-end">
                {Links.map((link) => (
                  <span key={link.type} className="flex items-end">
                    <Link href={link.href} target="_blank" rel="noreferrer">
                      <Image
                        className="cursor-pointer hover:scale-110 transition-all duration-300"
                        src={logoMap[link.type]}
                        width={40}
                        height={40}
                        id={link.type}
                        alt={`${link.type} link`}
                      />
                    </Link>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-8">
            <ImageSlider images={images} projectTitle={project.title} />

            {/* 프로젝트 요약 */}
            <div className="flex-1 space-y-6">
              <section className="border-[1px] rounded-[10px] p-6">
                <div className="space-y-4 text-base leading-6">
                  <div>
                    <p className="font-semibold mb-1 text-l text-gray-400">
                      팀 구성
                    </p>
                    <p className="whitespace-pre-wrap">
                      {project.teamMembers || "미등록"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-l text-gray-400">
                      프로젝트 기간
                    </p>
                    <p>{project.period || "미등록"}</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-l text-gray-400">
                      사용 기술 스택
                    </p>
                    {project.techStack && project.techStack.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-[#3d3e47] px-2 py-1 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p>미등록</p>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* 프로젝트 설명 */}
          <section className="bg-[#2f3038] rounded-[10px] p-6">
            <h2 className="text-lg font-bold mb-4">프로젝트 설명</h2>
            <div className=" overflow-auto whitespace-pre-wrap ">
              {project.description}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
