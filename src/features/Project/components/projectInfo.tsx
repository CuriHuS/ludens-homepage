import { ProjectLink } from "@/types/projectLink"
import Link from "next/link"
import Image from "next/image"
import youtubeLogo from "@/assets/icons/youtube.svg";
import githubLogo from "@/assets/icons/github.svg";
import steamLogo from "@/assets/icons/steam.svg";

type ProjectInfoProps = {
    title: string,
    subtitle: string,
    link: ProjectLink[],
}

const logoMap = {
    youtube: youtubeLogo,
    github: githubLogo,
    steam: steamLogo,
};

export default function ProjectInfo({ title, subtitle, link }: ProjectInfoProps) {
    return (
        <>
            <p className="font-extrabold text-4xl mb-2 text-white">
                {title}
            </p>
            <div className="flex flex-row gap-2 items-center mb-8">
                <p className="text-white text-xl font-medium">{subtitle} &nbsp; · </p>
                {link && (
                    <div className="flex items-center gap-1">
                        {link.map((link: ProjectLink) => (
                            <span key={link.type} className="flex items-end">
                                <Link href={link.href} target="_blank" rel="noreferrer">
                                    <Image
                                        className="cursor-pointer hover:scale-110 transition-all duration-300"
                                        src={logoMap[link.type as keyof typeof logoMap]}
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
        </>
    )
}