import NewsSmallCard from "../Cards/News/SmallCard";

const General = () => {
  return (
    <div>
      <div>
        <div className="flex justify-end">
          <div className="md:w-[65%]">
            <div className="flex flex-col mb-[6%]">
              <h3 className="font-dinamit-medium text-label-small md:text-label-large uppercase tracking-wider text-blue-800 mb-[2%]">
                SCIENCE
              </h3>
              <h1 className="font-nocturno-light text-headline-medium md:text-display-small">
                Coming to grips with planetary existential threat
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse mt-[5%]">
          <div className="md:w-[65%]">
            <div className="h-full w-full aspect-w-16 aspect-h-9 mb-[0.5%]">
              <img
                className="object-cover object-center"
                src="https://news.harvard.edu/wp-content/uploads/2021/10/101321_ESPP_028-1350x900.jpg"
                alt="Gambar"
              />
            </div>
          </div>
          <div className="md:w-[35%] md:pr-[5%] ">
            <div className="md:h-[2px] md:w-8 md:bg-blue-800 md:mb-[4%]" />
            <div>
              <p className="md:font-dinamit-regular text-[0.6rem] md:text-body-small mb-[1%]">
                Pariroo Rattan, a teaching fellow in Harvards Environmental
                Science and Public Policy program, speaks in Sheila Jasanoffs
                “Technology, Environment, and Society” course.
              </p>
            </div>
            <div className="font-dinamit-regular text-[0.6rem] md:text-body-small text-gray-500">
              <p>Kris Snibbe/Harvard Staff Photographer</p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end  mt-[5%] md:mt-[8%]">
          <div className="md:w-[65%]">
            <h1 className="font-dinamit-light text-title-medium md:text-title-large leading-normal mb-[10%]">
              Environmental Science and Public Policy concentration takes
              multidisciplinary approach to untangling issues, solutions
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[35%]">
            <div className="flex md:flex-col justify-between md:justify-start items-center md:items-start">
              <div className="md:w-44 flex-1 md:flex-none">
                <div className="flex items-start space-x-[2%] justify-between md:py-[5%] md:border-t md:border-b">
                  <div className="hidden md:block uppercase font-dinamit-semibold tracking-widest text-[8px]">
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
                <div className="flex items-start space-x-[2%] justify-between md:py-[5%] md:border-b">
                  <div className="hidden md:block uppercase font-dinamit-semibold tracking-widest text-[8px]">
                    date
                  </div>
                  <div className="flex flex-col space-y-[0.3%]">
                    <p className="font-dinamit-light text-label-small">
                      November, 1 2021
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 items-center md:py-4">
                <p className="hidden md:block uppercase font-dinamit-semibold tracking-widest text-[8px]">
                  share
                </p>
                <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div>
              </div>
            </div>
            <div className="hidden xl:block pr-[15%] pt-[30%]">
              <h1 className="uppercase text-blue-800 font-dinamit-regular tracking-widest text-label-medium mb-[5%]">
                Trending
              </h1>
              <div className="block divide-y divide-gray-200  ">
                <div className="py-[3%] ">
                  <NewsSmallCard />
                </div>
                <div className="py-[3%] ">
                  <NewsSmallCard />
                </div>
                <div className="py-[3%] ">
                  <NewsSmallCard />
                </div>
                <div className="py-[3%] ">
                  <NewsSmallCard />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[65%] mt-[8%] md:mt-0">
            <div className="text-body-medium sm:text-body-large font-nocturno-regular tracking-wide leading-relaxed">
              <p>
                For Emilly Fan, concentrating in Environmental Science and
                Public Policy feels urgent and consequential. It brought her all
                the way from her home in New Zealand. “[It] was the main drawing
                card in flying to study here,” said the Quincy House senior.
                “Even having a nocturnal class schedule last year when I was
                back home in Auckland during COVID didn’t detract from the
                incredible caliber of classes and the importance of the
                content.” Fan’s deep commitment to the environment, which will
                find her in Glasgow this week as part of Harvard’s contingent at
                the U.N.’s COP26 climate summit, has been fostered by her
                concentration, which was created 25 years ago to provide the
                foundation for thinking about the complex tangle of issues
                involved in safeguarding life on the planet. “It marries the
                science with the policy and, given how intertwined the two are,
                I knew this is what I want to be studying. There’s a lot of
                passion behind the youth movement, which is such an important
                force to harness, but I’ve been conscious of building upon that
                energy while ensuring that I also have the knowledge and
                practical skills to call myself a pragmatic and holistic
                environmentalist,” Fan said.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
