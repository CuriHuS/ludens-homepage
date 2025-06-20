'use client'

import Script from 'next/script';
import * as gtag from './gtag';

export default function GoogleAnalytics() {
    gtag.useGtag();
    return (
        <>
            {process.env.NODE_ENV !== 'development' && (
                <>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                    />
                    <Script
                        id="gtag-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                        });
                        `,
                        }}
                    />
                </>
            )}
        </>
    )
}