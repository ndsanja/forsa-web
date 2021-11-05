const BigCard = () => {
  return (
    <div className="col-span-2 space-y-6 mx-[-8%] md:ml-0 md:mr-[-12.5%]">
      <div className="h-full w-full aspect-w-16 aspect-h-9">
        <img
          src="https://news.harvard.edu/wp-content/uploads/2021/10/101321_ESPP_028-1600x900.jpg"
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

export default BigCard;
