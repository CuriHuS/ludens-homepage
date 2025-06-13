import { MDXRemote } from "next-mdx-remote/rsc";

type ProjectContentProps = {
    content: string;
};

export default function ProjectContent({ content }: ProjectContentProps) {
    return (
        <>
            <p className="text-base md:text-lg text-white/50 font-semibold mb-4">프로젝트 설명</p>
            <section className="prose prose-invert lg:prose-lg max-w-none">
                <MDXRemote source={content} />
            </section>
        </>
    )
}