import { notFound } from "next/navigation";
import { ACTIVITY_LIST } from "@/constants/activity";
import { generateMetadata } from "@/features/Activity/utils/activityMetadata";
import Image from "next/image";
export { generateMetadata };

export default async function ActivityDetailPage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await params;
  if (!id) return notFound();
  const activity = ACTIVITY_LIST.find((a) => a.id === id);

  if (!activity) return notFound();

  const yearForPath = Array.isArray(activity.year)
    ? activity.year[0] // <-- changed
    : activity.year;

  const thumbnail = `/images/activity/${yearForPath}/${encodeURIComponent(
    activity.title
  )}/thumbnail.webp`;
  //const extraImages = activity.extraImages ?? [];
  //const images = [thumbnail, ...extraImages];

  return (
    <div className="flex items-center justify-center bg-black/50 min-h-screen">
      <div className="relative w-full max-w-6xl mt-10 overflow-y-auto bg-neutral-900 text-white rounded-xl p-4 md:p-8 scrollbar-hide">
        <div className="flex flex-col gap-2 mt-8">
          <div className="bg-gray-700/70 rounded-[10px] p-6">
            <p className="font-bold text-2xl mb-1 md:text-4xl">
              {activity.title}
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-8 justify-center items-center">
            <div className="w-full lg:w-[700px] ">
              <div className="relative aspect-[16/9]">
                <Image
                  src={thumbnail}
                  alt={`${activity.title}`}
                  fill
                  className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* 활동 설명 */}
          <section className="bg-[#2f3038] rounded-[10px] p-6 mt-8">
            <h2 className="text-lg font-bold mb-4">활동 설명</h2>
            <div className=" overflow-auto whitespace-pre-wrap ">
              {activity.description}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
