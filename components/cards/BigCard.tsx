import React from "react";

const BigCard = () => {
  return (
    <div className="col-span-2 space-y-6 -mx-5 md:ml-0 md:-mr-12 lg:-mr-20">
      <div className="h-full w-full aspect-w-16 aspect-h-9">
        <img
          src="https://news.harvard.edu/wp-content/uploads/2021/10/20211028_cop26_wfire-1350x759.jpg"
          alt="gambar"
        />
      </div>
      <div className="grid xl:grid-cols-2  space-y-4 md:space-y-0">
        <div className="space-y-2 mx-5 md:ml-0 md:mr-12 lg:mr-20">
          <h6 className="font-dinamit-medium text-label-small tracking-widest uppercase">
            WORLD
          </h6>
          <h1 className="font-nocturno-regular text-headline-medium">
            Heat rising, along with urgency and hope, as climate summit nears
          </h1>
        </div>
        <div className="font-dinamit-light text-body-large md:pt-8 mx-5 md:ml-0 md:mr-12 lg:mr-20">
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