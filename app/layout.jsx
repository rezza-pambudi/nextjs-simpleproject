import './globals.css';
import './fonts.css';
import NavBar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import { roboto } from "@/app/fonts";

export default function Layout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <title>Next.js Simple Project</title>
      </head>
      <body className="bg-gray-100 flex flex-col min-h-screen px-4 py-8">
          <header>
            <NavBar />
          </header>
          <main className="py-3 grow">{children}</main>
          <footer className="border-t pt-3 mt-3 text-center text-xs">
            <Footer />
          </footer>
      </body>
    </html>
  );
}
