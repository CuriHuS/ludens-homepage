const APPLY_FORM_URL = 'https://forms.gle/bUJqCGZ1914Yy35p6';

export default function ApplyButton() {
    return (
        <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-1.5 text-lg font-extrabold text-white rounded-3xl bg-gradient-to-r from-kyunghee-red-950 via-kyunghee-red-500 via-50% to-kyunghee-red-300 to-80% bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 w-fit"
        >
            지원하기
        </a>
    );
}