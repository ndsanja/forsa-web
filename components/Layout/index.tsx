import React, { Children, ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutProps = {
  children: ReactNode;
};

const index = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default index;
