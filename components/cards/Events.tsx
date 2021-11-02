const Events = () => {
  return (
    <div className="flex flex-col space-y-2 min-w-[70vw] md:min-w-full md:w-full py-8 md:py-0">
      <div className="h-full w-full aspect-w-16 aspect-h-9">
        <img
          src="https://news.harvard.edu/wp-content/uploads/2021/10/Stefanie-Stantcheva_headshot_signed-3_thumbnail_2500-500x500.jpg"
          alt="gambar"
        />
      </div>
      <h1 className="mb-2 md:mb-0 font-dinamit-extralight text-title-medium text-yellow-500 hover:text-yellow-600 hover:underline">
        Kompetisi Futsal Antar Angkatan FORSA 2021
      </h1>
      <h6 className="font-dinamit-medium text-label-medium">20.00 WIB</h6>
      <p className="font-dinamit-light text-label-small">
        SMA Negeri 1 Srengat
      </p>
    </div>
  );
};

export default Events;
