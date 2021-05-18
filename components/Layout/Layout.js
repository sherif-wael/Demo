import Head from "next/head";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

function Layout({children}){
    return (
        <div>
            <Head>
                {/* <SEO /> */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,900;1,700&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
            </Head>

            <Navbar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout;