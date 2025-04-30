import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { domMax, LazyMotion } from 'framer-motion';
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khuludens.com'), // 루덴스 홈페이지 주소 --> 실제 배포 시 변경
  title: {
    default: 'LUDENS : 경희대학교 게임 제작 동아리',
    template: '%s | LUDENS'
  },
  description: '루덴스는 경희대학교 소프트웨어융합학과 게임콘텐츠트랙 학생들이 모여 시작한 동아리입니다. 기획, 디자인, 개발 등 게임의 전반적인 과정을 경험할 수 있으며, 부원들이 열정을 가지고 성장할 수 있도록 지원합니다.',
  openGraph: {
    title: '루덴스',
    description: '루덴스는 경희대학교 소프트웨어융합학과 게임콘텐츠트랙 학생들이 모여 시작한 동아리입니다. 기획, 디자인, 개발 등 게임의 전반적인 과정을 경험할 수 있으며, 부원들이 열정을 가지고 성장할 수 있도록 지원합니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://khuludens.com', // 루덴스 홈페이지 주소 --> 실제 배포 시 변경
    siteName: '루덴스',
  },
  twitter: {
    card: 'summary_large_image',
    title: '루덴스',
    description: '루덴스는 경희대학교 소프트웨어융합학과 게임콘텐츠트랙 학생들이 모여 시작한 동아리입니다. 기획, 디자인, 개발 등 게임의 전반적인 과정을 경험할 수 있으며, 부원들이 열정을 가지고 성장할 수 있도록 지원합니다.',
  },
  verification: {
    google: 'SUGzZJoqyO5tn6rdMJz7AG2mtrt7srdLPgPpVdlJuls',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <LazyMotion features={domMax}>
          <Header />
          <main className="flex-1 w-full max-w-7xl px-8 pb-48 mx-auto">
            {children}
          </main>
          <Footer />
        </LazyMotion>
        <Analytics />
      </body>
    </html>
  );
}
