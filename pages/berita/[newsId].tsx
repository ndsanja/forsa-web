import React from "react";
import CenteredLayout from "../../components/Layout/CenteredLayout";
import NewsSingle from "../../components/SinglePost/News";

const SingleNews = () => {
  return (
    <CenteredLayout>
      <div className="pt-[20%] md:pt-[12%] pb-40 px-[7%]">
        <NewsSingle />
      </div>
    </CenteredLayout>
  );
};

export default SingleNews;
