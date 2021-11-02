import type { NextPage } from "next";
import RegularCard from "../components/cards/RegularCard";
import Events from "../components/cards/Events";
import BigCard from "../components/cards/BigCard";
import SectionTitle from "../components/SectionTitle";
import Donation from "../components/cards/Donation";
import AlumniMengajar from "../components/AlumniMengajar";

const Home: NextPage = () => {
  return (
    <div className="container max-w-screen-3xl border w-screen bg-white pb-40 space-y-14 md:space-y-16 lg:space-y-24">
      <div className="mx-5 md:mx-12 lg:mx-20 ">
        <div className="flex flex-col md:flex-row-reverse space-y-16 md:space-y-0">
          <div className="md:w-[70%] grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-14 ">
            <div className="col-span-2 ">
              <BigCard />
            </div>
            <div className="col-span-2 md:col-span-1">
              <RegularCard />
            </div>
            <div className="col-span-2 md:col-span-1">
              <RegularCard />
            </div>
            <div
              className="col-span-2
            "
            >
              <AlumniMengajar />
            </div>
          </div>
          <div className=" md:w-[30%] md:pr-[10%]  md:pt-[30%] md:space-y-4 -mr-5 md:mr-0">
            <h3 className="font-dinamit-medium uppercase tracking-widest text-label-medium">
              forsa Events
            </h3>
            <div className="flex md:flex-col space-x-10 md:space-x-0  md:space-y-10 overflow-x-scroll md:overflow-x-hidden w-full">
              <Events />
              <Events />
              <Events />
            </div>
          </div>
        </div>
      </div>
      <SectionTitle sectionTitle="Donations" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-12 lg:mx-20 gap-8 lg:gap-14">
        <div className="md:col-span-2 lg:col-span-1">
          <Donation />
        </div>
        <Donation />
        <Donation />
      </div>
      <SectionTitle sectionTitle="Expo Campuss" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-12 lg:mx-20 gap-8 lg:gap-14">
        <div className="md:col-span-2 lg:col-span-1">
          <RegularCard />
        </div>
        <RegularCard />
        <RegularCard />
      </div>
      <SectionTitle sectionTitle="Guyub Rukun" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-12 lg:mx-20 gap-8 lg:gap-14">
        <div className="md:col-span-2 lg:col-span-1">
          <RegularCard />
        </div>
        <RegularCard />
        <RegularCard />
        <div className="md:col-span-2 lg:col-span-1">
          <RegularCard />
        </div>
        <RegularCard />
        <RegularCard />
      </div>
    </div>
  );
};

export default Home;
