import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Bluey-Bricks: a purple bricks inspired app.</title>
        </Head>
        <Box maxWidth="2000px" m="auto" bgColor='gray.200'>
            <header >
                <Navbar/>
            </header>
            <body>
                {children}
            </body>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>
)

export default Layout;