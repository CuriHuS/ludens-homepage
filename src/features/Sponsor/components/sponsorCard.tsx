import Image, { StaticImageData } from "next/image";

type SponsorCardProps = {
    title: string;
    image: StaticImageData;
    link: string;
}

export default function SponsorCard({ title, image, link }: SponsorCardProps) {
    return (
        <a href={link} className="flex items-center justify-center h-[120px]">
            <Image
                src={image}
                alt={title}
                width={240}
                height={120}
                className="w-[240px] h-[120px] object-contain object-center"
            />
        </a>
    );
}