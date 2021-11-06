import React from "react";

const AlumniMengajar = () => {
  return (
    <div className="bg-banner-alumni-mengajar bg-cover bg-center flex flex-col items-center justify-center py-48 border-t border-b w-full space-y-12">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="font-dinamit-extralight text-title-large">
          Segera Hadir
        </h2>
        <h1 className="font-nocturno-light text-headline-large text-center">
          Sekolah Terbuka
        </h1>
        <h2 className="font-dinamit-extralight text-title-large underline">
          by FORSA
        </h2>
      </div>
      <div className="font-dinamit-extralight text-label-large space-x-4 md:space-x-8">
        <button className="px-4 py-2 border border-black">Gabung</button>
        <button className="px-4 py-2 border border-black">Selengkapnya</button>
      </div>
    </div>
  );
};

export default AlumniMengajar;
