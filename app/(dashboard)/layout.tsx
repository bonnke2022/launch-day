import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
