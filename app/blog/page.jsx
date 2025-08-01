import Link from "next/link";
import Heading from "@/components/Heading";

export default function BlogPage () {
    return (
        <>
        <Heading>Blog Page</Heading>
        <p>List of post</p>

        <ul>
            <li><Link href="/blog/judul-berita" prefetch={false}>Belajar Next.js</Link></li>
            <li><Link href="/blog/latihan-route-next" prefetch={false}>Latihan Route Next.js</Link></li>
        </ul>
        </>
    );
}