import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/proxima-nova"></link>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
