import Link from "next/link";

export default function BlogPage () {
    return (
        <>
        <h1>Blog Page</h1>
        <p>List of post</p>

        <ul>
            <li><Link href="/blog/judul-berita" prefetch={false}>Belajar Next.js</Link></li>
            <li><Link href="/blog/latihan-route-next" prefetch={false}>Latihan Route Next.js</Link></li>
        </ul>
        </>
    );
}