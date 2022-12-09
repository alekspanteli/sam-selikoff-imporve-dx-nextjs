import "./globals.css";

import NavLink from "./nav-link";

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="bg-gray-900 text-gray-100 antialiased">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="border-b">
          <nav className="mx-auto max-w-7xl px-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
          </nav>
        </header>
        <main className="mx-auto max-w-7xl px-4">{children}</main>
      </body>
    </html>
  );
}
