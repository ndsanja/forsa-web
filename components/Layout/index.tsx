import React, { Children, ReactNode } from "react";
import Navbar from "../Navbar";

type LayoutProps = {
  children: ReactNode;
};

const index = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default index;
