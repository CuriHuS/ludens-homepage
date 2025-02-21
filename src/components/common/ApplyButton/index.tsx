const APPLY_FORM_URL = 'https://forms.gle/bUJqCGZ1914Yy35p6';

export default function ApplyButton() {
    return (
        <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            // className="px-6 py-1.5 text-lg font-extrabold text-white rounded-3xl bg-kyunghee-red hover:bg-gradient-to-r hover:from-kyunghee-red hover:to-white/10 hover:to-70% transition-all duration-1000 w-fit"
            className="px-6 py-1.5 text-lg font-extrabold text-white rounded-3xl bg-gradient-to-r from-kyunghee-red via-kyunghee-red-50 via-50% to-kyunghee-red-20 to-80% bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 w-fit"
        >
            지원하기
        </a>
    );
}