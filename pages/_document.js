import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Inspir Performance</title>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="Inspir Performance"
                        content="GETTING OVER YOU IS WHAT INSPIRES US"
                    />
                    <meta name="description" content="We are an elite performance experts, we help top athletes
                    and executives in competitive fields unlocking the power of the mind and create the mental toughness
                     to be performant." />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Inspir Performance' />
                    <meta property='og:description' content='We are an elite performance experts, we help top athletes
                    and executives in competitive fields unlocking the power of the mind and create the mental toughness
                     to be performant.'
                    />
                    <meta property='og:site_name' content='Inspir Performance' />
                    <meta property="og:image" content="https://www.inspirperformance.com/assets/images/img_header.jpg"/>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-99W2X71H6M`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-99W2X71H6M', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
