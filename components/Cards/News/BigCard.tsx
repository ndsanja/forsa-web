import Image from "next/image";
import Link from "next/link";
import { Posts, PostsEdge } from "../../../utils/PropsType-api";

type props = {
  News: PostsEdge[] | undefined;
};

const NewsBigCard = ({ News }: props) => {
  console.log("🚀 ~ file: BigCard.tsx ~ line 10 ~ NewsBigCard ~ News", News?.[0].node?.featuredImage)
  return (
    <>
      {News?.map(({ node: item }) => (
        <div
          key={item?.id}
          className="col-span-2 space-y-6 mx-[-8%] md:ml-0 md:mr-[-12.5%]"
        >
          <div className="w-full h-full aspect-w-16 aspect-h-9">
            <Image
              layout="fill"
              src={item?.featuredImage?.node?.sourceUrl as string}
              alt={item?.featuredImage?.node?.altText as string}
              className="object-cover object-center"
            />
          </div>
          <div className="grid space-y-4 xl:grid-cols-2 md:space-y-0">
            <div className="space-y-2 mx-[7%] md:ml-0 md:mr-[12%]">
              <div className="flex items-center space-x-2">
                <h6 className="font-dinamit-medium text-[0.6rem] sm:text-label-small tracking-widest uppercase divide-x-2 divide-red-800">
                  {item?.categories?.edges?.map(({ node: category }) => (
                    <Link
                      key={category?.id}
                      href={`/category/${category?.id}`}
                    >
                      <a className="px-1 hover:font-extrabold hover:text-red-800" >
                        {category?.name}
                      </a>
                    </Link>
                  ))
                  }
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
              <p >{item.excerpt}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsBigCard;
