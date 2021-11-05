const DonationsSmallCard = () => {
  return (
    <div className="flex space-x-2 items-center">
      <h1 className="font-nocturno-regular text-title-medium flex-1">
        Do we need to draw you a picture? Yes, or maybe a satiric cartoon
      </h1>
      <div className="h-full w-[15%]">
        <div className="aspect-w-1 aspect-h-1  ">
          <img
            className="object-cover object-center"
            src="https://news.harvard.edu/wp-content/uploads/2021/10/20211028_cop26_wfire-1350x759.jpg"
            alt="gambar"
          />
        </div>
      </div>
    </div>
  );
};

export default DonationsSmallCard;
