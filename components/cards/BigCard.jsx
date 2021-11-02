import React from "react";

const BigCard = () => {
  return (
    <div className="col-span-2 space-y-6 -mx-5 md:ml-0 md:-mr-16 lg:-mr-20">
      <div className="h-full w-full aspect-w-16 aspect-h-9">
        <img
          src="https://news.harvard.edu/wp-content/uploads/2021/10/20211028_cop26_wfire-1350x759.jpg"
          alt="gambar"
        />
      </div>
      <div className="grid xl:grid-cols-2  space-y-4">
        <div className="space-y-2 mx-5 md:ml-0 md:mr-16 lg:mr-20">
          <h6 className="font-dinamit-medium text-label-small tracking-widest uppercase">
            world
          </h6>
          <h1 className="font-nocturno-regular text-headline-medium">
            Ini Adalah Title
          </h1>
        </div>
        <div className="font-dinamit-light text-body-large mx-5 md:ml-0 md:mr-16 lg:mr-20">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            quasi incidunt voluptas deleniti, fuga
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
