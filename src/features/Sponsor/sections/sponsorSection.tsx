import { LUDENS_EMAIL } from '@/constants/ludens';
import { SPONSOR_LIST } from '@/constants/sponsor';
import SponsorCard from '../components/sponsorCard';

export default function SponsorSection() {
    return (
        <section className="w-full flex flex-col items-center">
            <div className="w-fit grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
                {SPONSOR_LIST.map((sponsor) => (
                    <SponsorCard key={sponsor.title} {...sponsor}/>
                ))}
            </div>
            <a href={LUDENS_EMAIL} className="mt-28 py-2.5 px-6 text-base font-semibold rounded-full bg-white text-black">후원 문의</a>
        </section>
    )
}