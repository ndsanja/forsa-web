import { MdOutlineManageSearch } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [toogle, setToogle] = useState(true);

  const navToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="mx-[7%] md:mx-0 md:fixed md:left-0 md:top-0 md:right-0 md:max-w-[7%] z-30">
      {toogle ? (
        <div className="w-full flex justify-end md:justify-center items-center py-4 cursor-pointer">
          <MdOutlineManageSearch
            onClick={navToogle}
            className="w-7 h-7 lg:h-9 lg:w-9 "
          />
        </div>
      ) : (
        <div className="fixed left-0 right-0 top-0 bottom-0 w-screen h-screen bg-[#A51C30] lg:mx-0 z-30">
          <div
            onClick={navToogle}
            className="max-w-[7%] lg:max-w-[3%] flex justify-center fixed top-[4%] left-[90%] lg:left-[0.5%] right-0 text-white transition-all duration-300  hover:text-gray-300 cursor-pointer"
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

              <div className="space-y-[7%]">
                <div>
                  <Link href="/">
                    <a>
                      <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                        <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                        <p className="group-hover:text-yellow-200">Home</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/berita">
                    <a>
                      <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                        <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                        <p className="group-hover:text-yellow-200">Berita</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/events">
                    <a>
                      <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                        <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                        <p className="group-hover:text-yellow-200">Events</p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/expo-campus">
                    <a>
                      <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                        <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                        <p className="group-hover:text-yellow-200">
                          Expo Campus
                        </p>
                      </div>
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/kelas-terbuka">
                    <a>
                      <div className="group flex items-center ml-[-7%] space-x-[2%] font-nocturno-light text-headline-medium text-white cursor-pointer transition-all ease-in-out">
                        <div className="w-[4%] h-[2px] group-hover:bg-yellow-200 duration-700" />
                        <p className="group-hover:text-yellow-200">
                          Kelas Terbuka
                        </p>
                      </div>
                    </a>
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

export default Navbar;
