// src/app/activity/[id]/page.tsx
'use client'; // (클라이언트 컴포넌트인 경우)

interface ActivityPageProps {
  params: { id: string };
}

export default function ActivityPage({ params }: ActivityPageProps) {
  return (
    <div>
      <h1>Activity Detail: {params.id}</h1>
      {/* 추가 콘텐츠 */}
    </div>
  );
}
