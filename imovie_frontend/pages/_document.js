// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head>
                <style>{`
                   html{
                      font-size : 100px,
                      font-size : 26.67vw
                   }
                   body {
                       margin: 0
                    }`}</style>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
                <meta name="apple-mobile-web-app-capable" content="yes"/>
            </Head>
            <body className="custom_class">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}