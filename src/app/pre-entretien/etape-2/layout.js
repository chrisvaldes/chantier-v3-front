 
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
                 
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link> */}
            </head>
            <body >{children}</body>
        </html>
    );
}
