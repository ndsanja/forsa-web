import type { NextPage } from "next";
import Link from "next/link";
import NewsRegularCard from "../components/Cards/News/RegularCard";
import EventsRegularCard from "../components/Cards/Events/RegularCard";
import NewsBigCard from "../components/Cards/News/BigCard";
import SectionTitle from "../components/SectionTitle";
import Logo from "../components/Logo";
import SekolahTerbuka from "../components/SekolahTerbuka";
import Layout from "../components/Layout";
import CampusCategory from "../components/Category/CampusCategory";
import { events } from "../utils/data/events";
import { news } from "../utils/data/news";

const Home: NextPage = () => {
  return (
    <div className="container max-w-screen-3xl w-screen bg-white relative ">
      <Layout>
        <div className="pb-32">
          <div className="absolute top-0 z-10 md:hidden mx-[7%] md:mx-[12%] ">
            <Logo />
          </div>
          <div className="space-y-20 md:space-y-12 lg:space-y-20">
            <div className="mx-[7%]">
              <div className="flex flex-col md:flex-row-reverse space-y-16 md:space-y-0">
                <div className="md:w-[65%] grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-14 ">
                  <div className="col-span-2 ">
                    <NewsBigCard News={news.slice(0, 1)} />
                  </div>
                  <NewsRegularCard
                    News={news.slice(1, 3)}
                    className="col-span-2 md:col-span-1"
                  />
                  <div className="col-span-2 -mx-5 md:mx-0">
                    <SekolahTerbuka />
                  </div>
                </div>
                <div className=" md:w-[35%] md:pr-[10%] lg:pr-[13%]  md:space-y-4 -mr-5 md:mr-0">
                  <div className="pb-32 hidden md:block">
                    <Logo />
                  </div>
                  <h3 className="font-dinamit-medium uppercase tracking-widest text-label-medium mb-4 md:mb-0">
                    forsa Events
                  </h3>
                  <div className="flex pb-8 md:pb-0 md:flex-col space-x-10 md:space-x-0  md:space-y-10 overflow-x-scroll md:overflow-x-hidden w-full">
                    <EventsRegularCard Events={events} />
                  </div>
                  <div className="font-dinamit-light label text-label-large underline mt-2">
                    <Link href="/events">
                      <a>Events Lainya</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12 lg:space-y-16">
              <SectionTitle sectionTitle="Expo Campus" />
              <div className="flex flex-col justify-center items-center w-full font-dinamit-light text-label-small space-y-4 px-[7%]">
                <div className="flex flex-col w-full space-y-1">
                  <div className="font-dinamit-light text-label-small">
                    Akses cepat informasi
                  </div>
                  <div className="z-20">
                    <CampusCategory />
                  </div>
                </div>
              </div>
              <div className=" mx-[7%]">
                <div className="font-dinamit-medium uppercase tracking-widest text-label-small mb-4">
                  Populer di Expo Campus
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 lg:gap-14">
                  <NewsRegularCard
                    News={news.slice(0, 1)}
                    className="md:col-span-2 lg:col-span-1"
                  />

                  <NewsRegularCard News={news.slice(1, 3)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
