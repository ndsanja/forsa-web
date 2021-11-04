import React from "react";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import RightPost from "../../components/SinglePost/RightPost";

const SingleNews = () => {
  return (
    <Layout>
      <div className="pt-[18%] md:pt-20 pb-40 px-[7%]">
        <div className="absolute top-0 z-10">
          <Logo />
        </div>
        <RightPost />
      </div>
    </Layout>
  );
};

export default SingleNews;
