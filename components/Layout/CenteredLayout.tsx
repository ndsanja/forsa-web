import React, { Children, ReactNode } from "react";
import CenteredNav from "../Navbar/CenteredNav";

type LayoutProps = {
  children: ReactNode;
};

const CenteredLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <CenteredNav />
      {children}
    </>
  );
};

export default CenteredLayout;
