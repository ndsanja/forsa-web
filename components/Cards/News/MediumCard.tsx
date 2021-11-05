const NewsMediumCard = () => {
  return (
    <div className=" space-y-2  ">
      <div className="flex flex-row-reverse space-y-4  items-center ">
        <div className="h-full   w-[15%] ">
          <div className="aspect-w-1 aspect-h-1  ">
            <img
              className="object-cover object-center"
              src="https://news.harvard.edu/wp-content/uploads/2021/10/20211028_cop26_wfire-1350x759.jpg"
              alt="gambar"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 flex-3 w-[85%] mr-2 ">
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <h6 className="font-dinamit-medium text-[0.5rem] sm:text-label-small tracking-widest uppercase">
                Health
              </h6>
              <div className="h-[2px] w-[16px] lg:w-[18px] bg-red-800"></div>
            </div>
            <h1 className="font-nocturno-regular text-title-medium sm:text-title-large">
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

export default NewsMediumCard;
