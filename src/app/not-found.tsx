"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="text-black bg-black">
            <div className="flex flex-col justify-center mx-auto mt-64 text-center max-w-2xl">
                <p className="text-9xl font-bold mb-2 tracking-tight text-white md:text-9xl">404</p>
                <p className="text-2xl font-bold mb-6 tracking-tight text-gray-200 md:text-2xl">원하시는 페이지를 찾을 수 없습니다</p>
                <button 
                    onClick={() => router.push("/")}
                    className="px-8 py-4 text-2xl font-bold bg-white rounded-full inline-block mx-auto"
                >
                    홈으로 가기
                </button>
            </div>
            <div className="mt-52"></div>
        </div>
    )
}