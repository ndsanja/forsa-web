import React from "react";

const AlumniMengajar = () => {
  return (
    <div className="bg-banner-alumni-mengajar flex flex-col items-center justify-center py-48 border-t border-b w-full space-y-12">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="font-dinamit-extralight text-title-large">
          Segera Hadir
        </h2>
        <h1 className="font-dinamit-extralight text-headline-large text-center">
          FORSA Alumni Mengajar
        </h1>
        <h2 className="font-dinamit-extralight text-title-large underline">
          Lets Join With Us
        </h2>
      </div>
      <div className="font-dinamit-extralight text-label-large space-x-4 md:space-x-8">
        <button className="px-4 py-2 border border-black">More Info</button>
        <button className="px-4 py-2 border border-black">E - Learning</button>
      </div>
    </div>
  );
};

export default AlumniMengajar;
