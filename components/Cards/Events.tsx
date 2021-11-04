const Events = () => {
  return (
    <div className="flex flex-col space-y-2 min-w-[70vw] md:min-w-full md:w-full py-8 md:py-0">
      <div className="h-full w-full aspect-w-1 aspect-h-1">
        <img
          className="object-center object-cover"
          src="https://news.harvard.edu/wp-content/uploads/2021/10/Stefanie-Stantcheva_headshot_signed-3_thumbnail_2500-500x500.jpg"
          alt="gambar"
        />
      </div>
      <h1 className="mb-2 md:mb-0 font-dinamit-extralight text-title-medium text-red-800 hover:text-red-700 hover:underline">
        Kompetisi Futsal Antar Angkatan FORSA 2021
      </h1>
      <h6 className="font-dinamit-medium text-label-medium">1 Januari 2022</h6>
      <div className="">
        <p className="font-dinamit-light text-label-small">
          SMA Negeri 1 Srengat
        </p>
        <p className="font-dinamit-light text-label-small">20.00 WIB</p>
      </div>
    </div>
  );
};

export default Events;
