import Link from "next/link";

export default function NavBar () {
    return (
        <nav className="font-primary">
            <ul className="flex list-none p-0">
                <li className="mr-4"><Link className="text-gray-600 hover:text-gray-800" href="/" prefetch={false}>Home</Link></li>
                <li className="ml-auto mr-4"><Link className="text-gray-600 hover:text-gray-800" href="/about" prefetch={false}>About</Link></li>
                <li className="mr-4"><Link className="text-gray-600 hover:text-gray-800" href="/contact" prefetch={false}>Contact</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800" href="/blog" prefetch={false}>Blog</Link></li>
            </ul>
        </nav>
    );
}