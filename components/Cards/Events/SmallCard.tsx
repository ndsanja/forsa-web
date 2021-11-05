import Image from "next/image";

const EventsSmallCard = () => {
  return (
    <div className="flex space-x-2 items-center">
      <h1 className="font-nocturno-regular text-title-medium flex-1">
        Do we need to draw you a picture? Yes, or maybe a satiric cartoon
      </h1>
      <div className="h-full w-[15%]">
        <div className="aspect-w-1 aspect-h-1  ">
          <Image
            layout="fill"
            className="object-cover object-center"
            src="https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29yb25hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsSmallCard;
