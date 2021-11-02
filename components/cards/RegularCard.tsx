const RegularCard = () => {
  return (
    <div className=" space-y-2 md:space-y-4 ">
      <div className="flex flex-row-reverse space-y-4 md:space-y-4 md:flex-col items-center md:items-start md:space-x-0">
        <div className="h-full md:w-full aspect-w-16 w-[30%] aspect-h-9 object-cover object-center">
          <img
            className="h-full w-full"
            src="https://news.harvard.edu/wp-content/uploads/2021/10/20211028_cop26_wfire-1350x759.jpg"
            alt="gambar"
          />
        </div>
        <div className="flex flex-col space-y-4 flex-3 w-[70%] md:w-full mr-2 md:mr-0">
          <div className="space-y-2">
            <h6 className="font-dinamit-medium text-label-small tracking-widest uppercase leading-3">
              HEALTH
            </h6>
            <h1 className="font-nocturno-regular text-title-large">
              Do we need to draw you a picture? Yes, or maybe a satiric cartoon
            </h1>
          </div>
        </div>
      </div>
      <div className="font-dinamit-light text-body-small">
        <p>
          MGH scholars say pandemic showed need for new ways to make public
          health messaging more persuasive
        </p>
      </div>
    </div>
  );
};

export default RegularCard;
