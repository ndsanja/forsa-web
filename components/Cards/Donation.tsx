import React from "react";

const Donation = () => {
  return (
    <div className="flex flex-col space-y-4 border">
      <div className="h-full w-full aspect-w-16 aspect-h-9 object-cover object-center">
        <img
          className="object-cover object-center"
          src="https://media.istockphoto.com/photos/diverse-group-of-elementary-school-kids-go-back-to-school-wearing-picture-id1270794789?b=1&k=20&m=1270794789&s=170667a&w=0&h=bWb7fDf8b3OuTBEctKb4mHqI3oVuWfbAFY4By_3GLvc="
          alt="gambar"
        />
      </div>
      <div className="flex flex-col space-y-2 px-4">
        <div>
          <h6 className="text-label-small uppercase tracking-widest">
            Donasi Umum
          </h6>
          <div className="flex space-x-2 text-body-small">
            <h6>Oleh :</h6>
            <p className="font-semibold">FORSA SMANGAT</p>
          </div>
        </div>
        <div className="pb-2 space-y-3">
          <h1 className="font-nocturno-light text-title-medium sm:text-title-large">
            Donasi Untuk Almamater: Bantu FORSA untuk selalu menebar manfaat
            untuk almamater
          </h1>
          <p className="font-dinamit-light text-body-small sm:text-body-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima
            adipisci, recusandae animi aut magni earum incidunt praesentium
            veniam neque deleniti dignissimos ullam cum labore repellat harum
            dolores pariatur repudiandae.
          </p>
        </div>
        <div className="space-y-2 font-dinamit-light text-body-small border-t border-b py-4">
          <div className="flex justify-between">
            <p>Rp 24,700,111.00</p>
            <p>18.30%</p>
          </div>
          <div className="h-2 w-full bg-gray-300">
            <div className="h-full w-[18.30%] bg-green-500" />
          </div>
          <div className="flex justify-between">
            <div>
              <p>Rp 135,000,000.00</p>
              <p>Goal</p>
            </div>
            <p>58 Days to Go</p>
          </div>
        </div>
        <div className="py-4 w-full flex justify-center">
          <button className="px-4 py-2 bg-green-500 text-label-large text-white font-dinamit-light">
            Donasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
