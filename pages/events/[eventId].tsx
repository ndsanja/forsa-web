import Layout from "../../components/Layout";
import EventSingle from "../../components/SinglePost/Event";
import Logo from "../../components/Logo";

const SingleEvent = () => {
  return (
    <Layout>
      <div className="pt-[18%] md:pt-[27%] lg:pt-20 pb-40 px-[7%]">
        <div className="absolute top-0 z-10">
          <Logo />
        </div>
        <EventSingle />
      </div>
    </Layout>
  );
};

export default SingleEvent;
