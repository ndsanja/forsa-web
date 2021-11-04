import { MdOutlineManageSearch } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const CenteredNav = () => {
  const [toogle, setToogle] = useState(true);

  const navToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="mx-[7%] md:mx-0 fixed left-0 top-0 right-0 z-30">
      {toogle ? (
        <div className="w-full flex flex-row-reverse md:flex-row items-center py-4 cursor-pointer md:px-[2%] bg-white">
          <MdOutlineManageSearch
            onClick={navToogle}
            className="w-7 h-7 lg:h-9 lg:w-9 "
          />
          <div className="flex-1 flex justify-center  pl-7 md:pr-7 lg:pr-9">
            <Link href="/">
              <a className="font-nocturno-semibold text-yellow-700 text-title-medium lg:text-title-large">
                We Are Forsa
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="fixed left-0 right-0 top-0 bottom-0 w-screen h-screen bg-[#A51C30] lg:mx-0 z-30">
          <div
            onClick={navToogle}
            className="max-w-[7%] lg:max-w-[3%] flex justify-center fixed top-[4%] left-[3%] lg:left-[95%] right-0 text-gray-300 transition-all duration-300  hover:text-white cursor-pointer"
          >
            <MdClear className="w-7 h-7 lg:h-7 lg:w-7" />
          </div>
          <div className="flex w-screen">
            <div className="lg:w-1/2 h-screen px-[8%] lg:px-[3.5%] pt-[15%] lg:pt-[4%]">
              <div className="mb-[8%] border-b border-white flex items-center">
                <input
                  className="w-full py-[2%] bg-transparent focus:outline-none active:outline-none flex-1 font-dinamit-light text-headline-medium text-white placeholder-white placeholder-opacity-40"
                  placeholder="Search ..."
                />
                <div className="text-white">
                  <MdSearch className="h-10 w-10" />
                </div>
              </div>

              <div className="space-y-[5%]">
                <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                  <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                  <Link href="/">
                    <a className="group-hover:text-yellow-200">Home</a>
                  </Link>
                </div>
                <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                  <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                  <Link href="/berita">
                    <a className="group-hover:text-yellow-200">Berita</a>
                  </Link>
                </div>
                <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                  <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                  <Link href="/events">
                    <a className="group-hover:text-yellow-200">Events</a>
                  </Link>
                </div>
                <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                  <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                  <Link href="/donasi">
                    <a className="group-hover:text-yellow-200">Donasi</a>
                  </Link>
                </div>
                <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                  <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                  <Link href="/alumni-mengajar">
                    <a className="group-hover:text-yellow-200">
                      Alumni Mengajar
                    </a>
                  </Link>
                </div>
                <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                  <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                  <Link href="/expo-campuss">
                    <a className="group-hover:text-yellow-200">Expo Campuss</a>
                  </Link>
                </div>
                <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                  <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                  <Link href="/guyub-rukun">
                    <a className="group-hover:text-yellow-200">Guyub Rukun</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CenteredNav;
