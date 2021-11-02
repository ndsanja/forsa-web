import type { NextPage } from "next";
import RegularCard from "../components/cards/RegularCard";
import Events from "../components/cards/Events";
import BigCard from "../components/cards/BigCard";
import SectionTitle from "../components/SectionTitle";
import Donation from "../components/cards/Donation";

const Home: NextPage = () => {
  return (
    <div className="container max-w-screen-3xl border border-red-500 w-screen bg-white pb-40 space-y-12">
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
      <SectionTitle />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-12 lg:mx-20 gap-8 lg:gap-14">
        <Donation />
        <Donation />
        <Donation />
      </div>
    </div>
  );
};

export default Home;
