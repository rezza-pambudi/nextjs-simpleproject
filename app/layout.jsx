export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Simple Project</title>
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}