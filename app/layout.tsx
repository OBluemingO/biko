import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
import AuthModal from "@/components/modals/Auth.component";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

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
          <Navbar />
          <MenuBar />
          <AuthModal />
          <AuthProvider>
            {children}
          </AuthProvider>
          <Footer />
      </body>
    </html>
  );
}
