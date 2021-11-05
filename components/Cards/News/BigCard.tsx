import Image from "next/image";
import Link from "next/link";
import { News as NewsProps } from "../../../utils/PropsType";

type props = {
  News: NewsProps[];
};

const NewsBigCard = ({ News }: props) => {
  return (
    <>
      {News.map((item) => (
        <div
          key={item.id}
          className="col-span-2 space-y-6 mx-[-8%] md:ml-0 md:mr-[-12.5%]"
        >
          <div className="h-full w-full aspect-w-16 aspect-h-9">
            <Image
              layout="fill"
              src={item.image}
              alt={item.image_alt}
              className="object-cover object-center"
            />
          </div>
          <div className="grid xl:grid-cols-2  space-y-4 md:space-y-0">
            <div className="space-y-2 mx-[7%] md:ml-0 md:mr-[12%]">
              <div className="flex space-x-2 items-center">
                <h6 className="font-dinamit-medium text-[0.6rem] sm:text-label-small tracking-widest uppercase">
                  {item.category}
                </h6>
                <div className="h-[2px] w-[16px] lg:w-[18px] bg-red-800"></div>
              </div>
              <Link href={`/berita/${item.id}`}>
                <a>
                  <h1 className="font-nocturno-regular text-headline-small sm:text-headline-medium">
                    {item.title}
                  </h1>
                </a>
              </Link>
            </div>
            <div className="font-dinamit-light text-body-medium sm:text-body-large md:pt-8 mx-[7%] md:ml-0 md:mr-[12%]">
              <p>{item.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsBigCard;
