import React, { Children, ReactNode } from "react";
import CenteredNav from "../Navbar/CenteredNav";
import Footer from "../Footer";

type LayoutProps = {
  children: ReactNode;
};

const CenteredLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <CenteredNav />
      {children}
      <Footer />
    </>
  );
};

export default CenteredLayout;
