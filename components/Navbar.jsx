import Link from "next/link";

export default function NavBar () {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginRight: '20px' }}><Link className="text-gray-600 hover:text-gray-800" href="/" prefetch={false}>Home</Link></li>
                <li style={{ marginRight: '20px' }}><Link className="text-gray-600 hover:text-gray-800" href="/about" prefetch={false}>About</Link></li>
                <li style={{ marginRight: '20px' }}><Link className="text-gray-600 hover:text-gray-800" href="/contact" prefetch={false}>Contact</Link></li>
                <li><Link className="text-gray-600 hover:text-gray-800" href="/blog" prefetch={false}>Blog</Link></li>
            </ul>
        </nav>
    );
}