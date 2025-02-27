/*
unused for now
*/

import { Metadata } from 'next'

interface GenerateMetadataProps {
    title?: string
    description?: string
    image?: string
    width?: string
    height?: string
}

const DEFAULT_TITLE = '루덴스'
const DEFAULT_DESCRIPTION = '루덴스는 경희대학교 소프트웨어융합학과 게임콘텐츠트랙 학생들이 모여 시작한 동아리입니다. 기획, 디자인, 개발 등 게임의 전반적인 과정을 경험할 수 있으며, 부원들이 열정을 가지고 성장할 수 있도록 지원합니다.'
const DEFAULT_IMAGE = '/ludens.png'
const DEFAULT_WIDTH = '2000'
const DEFAULT_HEIGHT = '1390'

export function generateMetadata({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    image = DEFAULT_IMAGE,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
}: GenerateMetadataProps): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{
                url: image,
                width: parseInt(width),
                height: parseInt(height),
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
    }
}