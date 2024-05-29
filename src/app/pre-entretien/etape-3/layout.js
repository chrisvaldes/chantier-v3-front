 
export const metadata = {
    title: "Join as a Client | Toptal",
    description: "Join as a Client | Toptal",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
            <head>
                <meta charSet="utf-8" />
                <title>Join as a Client | Toptal</title>
            </head>
            <body >{children}</body>
        </html>
    );
}
