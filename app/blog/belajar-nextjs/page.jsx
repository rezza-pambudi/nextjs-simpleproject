import Heading from "@/components/Heading";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function PostPage () {
    const text = await readFile('./content/blog/belajar-nextjs.md', 'utf-8');
    const html = marked(text);
    return (
        <>
        <Heading>Belajar Next.js</Heading>
        <img src="/images/thumbnail-1.jpeg" alt="" width={500} className="mb-2 rounded" />
        <article dangerouslySetInnerHTML={{ __html: html }} className="max-w-screen-sm prose prose-slate dark:prose-invert" />
        </>
    );
}