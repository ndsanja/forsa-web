import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className="bg-blue-800 text-white w-full h-24 md:h-36 lg:h-48 xl:h-64 flex flex-col justify-end p-2 md:p-4 lg:p-5 xl:p-6 font-nocturno-semibold leading-3">
          <h1 className="text-label-small leading-4 xl:leading-8 md:text-title-smallxl:text-title-small xl:text-title-large">
            We Are
          </h1>
          <h1 className="text-title-medium leading-4 xl:leading-8 md:text-title-large lg:text-headline-small xl:text-headline-medium">
            Forsa
          </h1>
          <h1 className="text-label-small leading-4 xl:leading-8 md:text-title-small lg:text-title-small xl:text-title-large">
            SMAN 1 Srengat
          </h1>
        </a>
      </Link>
    </>
  );
};

export default Logo;
