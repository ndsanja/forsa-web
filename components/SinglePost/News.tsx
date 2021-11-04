import React from "react";
import MediumCard from "../Cards/MediumCard";

const SinglePost = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center max-w-screen-lg justify-center mb-[3%]">
        <h3 className="font-dinamit-medium text-label-small md:text-label-large uppercase tracking-wider text-gray-500 mb-[1%]">
          SCIENCE
        </h3>
        <h1 className="font-nocturno-light text-headline-medium md:text-display-small text-center">
          Coming to grips with planetary existential threat
        </h1>
      </div>
      <div>
        <div className="h-full w-full aspect-w-16 aspect-h-9 mb-[0.5%]">
          <img
            className="object-cover object-center"
            src="https://news.harvard.edu/wp-content/uploads/2021/10/20211028_cop26_wfire-1350x759.jpg"
            alt="Gambar"
          />
        </div>
        <div>
          <p className="md:font-dinamit-regular text-[0.6rem] md:text-body-small mb-[1%]">
            Pariroo Rattan, a teaching fellow in Harvards Environmental Science
            and Public Policy program, speaks in Sheila Jasanoffs “Technology,
            Environment, and Society” course.
          </p>
        </div>
        <div className="font-dinamit-regular text-[0.6rem] md:text-body-small text-gray-500">
          <p>Kris Snibbe/Harvard Staff Photographer</p>
        </div>
      </div>
      <div className="flex flex-col max-w-2xl mt-[5%]">
        <h1 className="font-dinamit-light text-title-medium md:text-title-large leading-normal text-center mb-[10%]">
          Environmental Science and Public Policy concentration takes
          multidisciplinary approach to untangling issues, solutions
        </h1>
        <div className="flex justify-between items-center md:items-start">
          <div className="">
            <div className="flex flex-col items-start space-y-1 py-[5%] border-t border-b">
              <div className="uppercase font-dinamit-semibold tracking-widest text-[8px]">
                by
              </div>
              <div className="flex flex-col space-y-[0.3%] ">
                <p className="font-dinamit-medium text-label-small md:text-label-medium">
                  Nila Dwi Sanja
                </p>
                <p className="font-dinamit-light text-label-small">
                  Forsa SMANGAT
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1 py-[5%] border-b">
              <div className="uppercase font-dinamit-semibold tracking-widest text-[8px]">
                date
              </div>
              <div className="flex flex-col space-y-[0.3%]">
                <p className="font-dinamit-light text-label-small">
                  November, 1 2021
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex space-x-4 items-center">
            <p className="hidden md:block uppercase font-dinamit-semibold tracking-widest text-[8px]">
              share
            </p>
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
          </div> */}
        </div>
      </div>
      <div className="max-w-2xl text-body-medium sm:text-body-large font-nocturno-regular tracking-wide leading-relaxed mt-[8%]">
        <p>
          For Emilly Fan, concentrating in Environmental Science and Public
          Policy feels urgent and consequential. It brought her all the way from
          her home in New Zealand. “[It] was the main drawing card in flying to
          study here,” said the Quincy House senior. “Even having a nocturnal
          class schedule last year when I was back home in Auckland during COVID
          didn’t detract from the incredible caliber of classes and the
          importance of the content.” Fan’s deep commitment to the environment,
          which will find her in Glasgow this week as part of Harvard’s
          contingent at the U.N.’s COP26 climate summit, has been fostered by
          her concentration, which was created 25 years ago to provide the
          foundation for thinking about the complex tangle of issues involved in
          safeguarding life on the planet. “It marries the science with the
          policy and, given how intertwined the two are, I knew this is what I
          want to be studying. There’s a lot of passion behind the youth
          movement, which is such an important force to harness, but I’ve been
          conscious of building upon that energy while ensuring that I also have
          the knowledge and practical skills to call myself a pragmatic and
          holistic environmentalist,” Fan said.
        </p>
      </div>
      <div className="max-w-2xl font-dinamit-regular text-label-small sm:text-label-large  mt-[8%]">
        <p className="uppercase text-blue-800">Berita Lainya </p>
        <div className="mt:1 md:mt-2 space-y-2">
          <MediumCard />
          <MediumCard />
          <MediumCard />
          <MediumCard />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
