import Layout from "../../components/Layout";
import DonationSingle from "../../components/SinglePost/Donation";
import Logo from "../../components/Logo";

const SingleDonation = () => {
  return (
    <Layout>
      <div className="pt-[18%] md:pt-[27%] lg:pt-20 pb-40 px-[7%]">
        <div className="absolute top-0 z-10">
          <Logo />
        </div>
        <DonationSingle />
      </div>
    </Layout>
  );
};

export default SingleDonation;
