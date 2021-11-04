import MediumCard from "../../components/Cards/MediumCard";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
      <div className="pt-[18%] md:pt-[27%] lg:pt-20 pb-20 px-[7%]">
        <div className="absolute top-0 z-10">
          <Logo />
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-[30%] xl:w-[35%] pt-[15%] lg:pt-[30%]">
            <div className="lg:pr-[15%]">
              <h1 className="uppercase text-blue-800 font-dinamit-regular tracking-widest text-label-medium mb-[5%]">
                Kategori
              </h1>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-[2px] bg-blue-800 w-6" />
                  <div>
                    <Link href="#">
                      <a className="font-dinamit-light text-body-large">
                        Alumni
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-[2px] bg-blue-800 w-6" />
                  <div>
                    <Link href="#">
                      <a className="font-dinamit-light text-body-large">
                        Forsa
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-[2px] bg-blue-800 w-6" />
                  <div>
                    <Link href="#">
                      <a className="font-dinamit-light text-body-large">
                        SMANGAT
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-[2px] bg-blue-800 w-6" />
                  <div>
                    <Link href="#">
                      <a className="font-dinamit-light text-body-large">
                        Inspiratif
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-[2px] bg-blue-800 w-6" />
                  <div>
                    <Link href="#">
                      <a className="font-dinamit-light text-body-large">
                        Acara
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[70%] xl:w-[65%]">
            <div className="flex flex-col ">
              <div className="flex flex-col  max-w-screen-lg mb-[10%] lg:mb-[20%]">
                <h3 className="font-dinamit-medium text-label-small md:text-label-large uppercase tracking-wider text-blue-800 mb-[1%]">
                  Arsip Event
                </h3>
                <h1 className="font-nocturno-light text-headline-medium md:text-display-small ">
                  Daftar Semua Event
                </h1>
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
              <MediumCard />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
