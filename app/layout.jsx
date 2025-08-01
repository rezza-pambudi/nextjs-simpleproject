import Link from "next/link";
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Simple Project</title>
      </head>
      <body className="flex flex-col min-h-screen px-4 py-8">
          <header>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog" prefetch={false}>Blog</Link></li>
            </ul>
          </header>
          <main className="py-3 grow">{children}</main>
          <footer className="border-t pt-3 mt-3 text-center text-xs">
            <p>Footer</p>
          </footer>
      </body>
    </html>
  );
}
