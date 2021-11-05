import { Event as EventProps } from "../../../utils/PropsType";
import Link from "next/link";
import Image from "next/image";

type props = {
  Events: EventProps[];
};

const EventsRegularCard = ({ Events }: props) => {
  return (
    <>
      {Events.map((Event) => (
        <div
          key={Event.id}
          className="flex flex-col space-y-2 min-w-[70vw] md:min-w-full md:w-full"
        >
          <div className="h-full w-full aspect-w-1 aspect-h-1">
            <Image
              className="object-center object-cover"
              src={Event.image}
              alt={Event.image_alt}
              layout="fill"
            />
          </div>
          <Link href={`/events/${Event.id}`}>
            <a>
              <h1 className="mb-2 md:mb-0 font-dinamit-extralight text-title-medium text-red-800 hover:text-red-700 hover:underline">
                {Event.title}
              </h1>
            </a>
          </Link>
          <h6 className="font-dinamit-medium text-label-medium">
            {Event.date}
          </h6>
          <div className="">
            <p className="font-dinamit-light text-label-small">{Event.venue}</p>
            <p className="font-dinamit-light text-label-small">{Event.time}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventsRegularCard;
