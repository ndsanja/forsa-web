import type { NextPage } from "next";
import News from "../components/cards/News";
import Events from "../components/cards/Events";
import BigCard from "../components/cards/BigCard";

const Home: NextPage = () => {
  return (
    <div className="container max-w-7xl border border-red-500 w-screen">
      <div className="mx-5 md:mx-16 lg:mx-20 ">
        <div className="flex flex-col md:flex-row-reverse space-y-16 md:space-y-0">
          <div className="md:w-[65%] grid md:grid-cols-2 gap-14 ">
            <div className="col-span-2 ">
              <BigCard />
            </div>
            <div className="col-span-2 md:col-span-1">
              <News />
            </div>
            <div className="col-span-2 md:col-span-1">
              <News />
            </div>
          </div>
          <div className=" md:w-[35%] md:pr-[10%]  md:pt-40 space-y-4 -mr-5 md:mr-0">
            <h3 className="font-dinamit-medium uppercase tracking-widest text-label-medium">
              today Events
            </h3>
            <div className="flex md:flex-col space-x-10 md:space-x-0  md:space-y-10 overflow-x-scroll md:overflow-x-hidden w-full">
              <Events />
              <Events />
              <Events />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
