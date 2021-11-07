import CenteredLayout from "../../components/Layout/CenteredLayout";
import ExpoCampus from "../../components/SinglePost/ExpoCampus";

const SingleNews = () => {
  return (
    <CenteredLayout>
      <div className="pt-[20%] md:pt-[12%] pb-40 px-[7%]">
        <ExpoCampus />
      </div>
    </CenteredLayout>
  );
};

export default SingleNews;
