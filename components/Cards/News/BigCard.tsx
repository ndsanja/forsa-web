import Image from "next/image";

const NewsBigCard = () => {
  return (
    <div className="col-span-2 space-y-6 mx-[-8%] md:ml-0 md:mr-[-12.5%]">
      <div className="h-full w-full aspect-w-16 aspect-h-9">
        <Image
          layout="fill"
          src="https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29yb25hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="gambar"
        />
      </div>
      <div className="grid xl:grid-cols-2  space-y-4 md:space-y-0">
        <div className="space-y-2 mx-[7%] md:ml-0 md:mr-[12%]">
          <div className="flex space-x-2 items-center">
            <h6 className="font-dinamit-medium text-[0.6rem] sm:text-label-small tracking-widest uppercase">
              WORLD
            </h6>
            <div className="h-[2px] w-[16px] lg:w-[18px] bg-red-800"></div>
          </div>

          <h1 className="font-nocturno-regular text-headline-small sm:text-headline-medium">
            Heat rising, along with urgency and hope, as climate summit nears
          </h1>
        </div>
        <div className="font-dinamit-light text-body-medium sm:text-body-large md:pt-8 mx-[7%] md:ml-0 md:mr-[12%]">
          <p>
            Amid dire warnings, Harvard environmental experts outline what’s
            possible, likely at global gathering
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsBigCard;
