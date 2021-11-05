import type { NextPage } from "next";
import NewsRegularCard from "../components/Cards/News/RegularCard";
import EventsRegularCard from "../components/Cards/Events/RegularCard";
import NewsBigCard from "../components/Cards/News/BigCard";
import SectionTitle from "../components/SectionTitle";
import DonationRegularCard from "../components/Cards/Donations/RegularCard";
import Logo from "../components/Logo";
import AlumniMengajar from "../components/AlumniMengajar";
import Layout from "../components/Layout";
import { events } from "../utils/data/events";
import { donations } from "../utils/data/donations";

const Home: NextPage = () => {
  return (
    <div className="container max-w-screen-3xl w-screen bg-white relative ">
      <Layout>
        <div className="pb-32">
          <div className="absolute top-0 z-10 md:hidden mx-[7%] md:mx-[12%] ">
            <Logo />
          </div>
          <div className="space-y-14 md:space-y-16 lg:space-y-24">
            <div className="mx-[7%]">
              <div className="flex flex-col md:flex-row-reverse space-y-16 md:space-y-0">
                <div className="md:w-[65%] grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-14 ">
                  <div className="col-span-2 ">
                    <NewsBigCard />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <NewsRegularCard />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <NewsRegularCard />
                  </div>
                  <div className="col-span-2 -mx-5 md:mx-0">
                    <AlumniMengajar />
                  </div>
                </div>
                <div className=" md:w-[35%] md:pr-[10%] lg:pr-[13%]  md:space-y-4 -mr-5 md:mr-0">
                  <div className="pb-20 hidden md:block">
                    <Logo />
                  </div>
                  <h3 className="font-dinamit-medium uppercase tracking-widest text-label-medium mb-4 md:mb-0">
                    forsa Events
                  </h3>
                  <div className="flex pb-8 md:pb-0 md:flex-col space-x-10 md:space-x-0  md:space-y-10 overflow-x-scroll md:overflow-x-hidden w-full">
                    <EventsRegularCard Events={events} />
                  </div>
                </div>
              </div>
            </div>
            <SectionTitle sectionTitle="Donations" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-[7%] gap-8 lg:gap-14">
              <div className="md:col-span-2 lg:col-span-1">
                <DonationRegularCard Donations={donations.slice(0, 1)} />
              </div>
              <DonationRegularCard Donations={donations.slice(1, 3)} />
            </div>
            <SectionTitle sectionTitle="Expo Campus" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-[7%]  gap-8 lg:gap-14">
              <div className="md:col-span-2 lg:col-span-1">
                <NewsRegularCard />
              </div>
              <NewsRegularCard />
              <NewsRegularCard />
            </div>
            <SectionTitle sectionTitle="Guyub Rukun" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-[7%]  gap-8 lg:gap-14">
              <div className="md:col-span-2 lg:col-span-1">
                <NewsRegularCard />
              </div>
              <NewsRegularCard />
              <NewsRegularCard />
              <div className="md:col-span-2 lg:col-span-1">
                <NewsRegularCard />
              </div>
              <NewsRegularCard />
              <NewsRegularCard />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
