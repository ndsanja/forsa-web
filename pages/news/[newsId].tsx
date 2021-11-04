import React from "react";
import SinglePost from "../../components/SinglePost";
import Layout from "../../components/Layout";

const SinleNews = () => {
  return (
    <Layout>
      <div className="md:pt-20 pb-40 px-[7%]">
        <SinglePost />
      </div>
    </Layout>
  );
};

export default SinleNews;
