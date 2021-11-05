import Image from "next/image";
import Link from "next/link";
import { News as NewsProps } from "../../../utils/PropsType";

type propsNews = {
  News: NewsProps[];
  className?: string;
};

const NewsMediumCard = (props: propsNews) => {
  const { News } = props;
  return (
    <>
      {News.map((item) => (
        <div
          key={item.id}
          className={`space-y-2 ${props.className && props.className}`}
        >
          <div className="flex flex-row-reverse space-y-4  items-center ">
            <div className="h-full   w-[15%] ">
              <div className="aspect-w-1 aspect-h-1  ">
                <Image
                  layout="fill"
                  className="object-cover object-center"
                  src={item.image}
                  alt={item.image_alt}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4 flex-3 w-[85%] mr-2 ">
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <h6 className="font-dinamit-medium text-[0.5rem] sm:text-label-small tracking-widest uppercase">
                    {item.category}
                  </h6>
                  <div className="h-[2px] w-[16px] lg:w-[18px] bg-red-800"></div>
                </div>

                <Link href={`/berita/${item.id}`}>
                  <a>
                    <h1 className="font-nocturno-regular text-title-medium sm:text-title-large">
                      {item.title}
                    </h1>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="font-dinamit-light text-body-small">
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsMediumCard;
