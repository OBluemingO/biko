import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
import AuthModal from "@/components/modals/Auth.component";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "biko",
  description: "biko by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
            <Navbar />
            <MenuBar />
            <AuthModal />
              {children}
            <Footer />
          </AuthProvider>
      </body>
    </html>
  );
}
