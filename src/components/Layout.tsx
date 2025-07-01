import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CTABanner from "./CTABanner";
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-700 flex">
      <div className="w-full flex flex-col grow ">
        <Header />
        <main className="max-w-116 m-auto grow-1 px-1.5">{children}</main>
        <CTABanner />
        <Footer />
      </div>
    </div>
  );
}
