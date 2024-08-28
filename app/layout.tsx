// import type { Metadata } from "next";
// import { Inter, Roboto } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar/Navbar";
// import { Toaster } from "@/components/ui/toaster";
// import { ThemeProvider } from "@/components/ui/theme-provider";
// import Footer from "./components/Footer/Footer";
// import { FloatingNavbar } from "./components/Navbar/CustomNav";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Creator Engine",
//   description: "Creator engine",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/public/fav.png" type="image/png" />
//       </head>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {/* <Navbar /> */}
//           <FloatingNavbar />
//           {children}
//           <Footer />
//           <Toaster />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./components/Footer/Footer";
import { FloatingNavbar } from "./components/Navbar/CustomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creator Engine",
  description: "Creator engine",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
