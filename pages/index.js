import Head from "next/Head";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Result from "./Fetch/Result";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
};

export default function Home({ posts }) {
    // consol.log(posts.id);
    return (
        <div>
            <Head>
                <title>Hulu 2.0</title>
            </Head>

            {/* Navbar Start */}
            <Header></Header>
            {/* Navbar End */}

            {/* Result Start */}
            <Result posts={posts}></Result>

            {/* Result End */}
        </div>
    );
}
