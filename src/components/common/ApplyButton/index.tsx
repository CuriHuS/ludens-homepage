import { LUDENS_RECRUIT_FORM } from "@/constants/ludens";
import React from "react";
import * as gtag from '@/components/ga/gtag';

type ApplyButtonProps =
    React.ComponentPropsWithoutRef<"a"> & {
        className?: string;
        color?: string;
        speed?: React.CSSProperties['animationDuration'];
        thickness?: number;
    }

const ApplyButton = ({
    className = "",
    color = "white",
    speed = "6s",
    thickness = 1,
}: ApplyButtonProps) => {

    return (
        <a
            href={LUDENS_RECRUIT_FORM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
                gtag.event("sign_up", {
                    event_category: 'apply_button',
                    event_label: 'apply_button_click',
                    value: 1,
                });
                return true;
            }}
            className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
            style={{
                padding: `${thickness}px 0`
            }}
        >
            <div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></div>
            <div className="relative z-1 px-6 py-1.5 text-lg font-extrabold text-white rounded-3xl bg-gradient-to-r from-kyunghee-red-950 via-kyunghee-red-500 via-50% to-kyunghee-red-300 to-80% bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-1000 w-fit">
                지원하기
            </div>
        </a>
    );
};

export default ApplyButton;