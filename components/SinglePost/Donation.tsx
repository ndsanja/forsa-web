import SmallCard from "../Cards/SmallCard";

const Donation = () => {
  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-[35%] pt-[10%] lg:pt-[30%]">
          <div className="lg:pr-[15%] ">
            <h1 className="uppercase text-blue-800 font-dinamit-regular tracking-widest text-label-medium mb-[5%]">
              Donasi Lainya
            </h1>
            <div className="block divide-y divide-gray-200  ">
              <div className="py-[3%] ">
                <SmallCard />
              </div>
              <div className="py-[3%] ">
                <SmallCard />
              </div>
              <div className="py-[3%] ">
                <SmallCard />
              </div>
              <div className="py-[3%] ">
                <SmallCard />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[65%]">
          <div className="flex flex-col ">
            <div className="flex flex-col  max-w-screen-lg mb-[10%]">
              <h3 className="font-dinamit-medium text-label-small md:text-label-large uppercase tracking-wider text-blue-800 mb-[1%]">
                Donasi Umum
              </h3>
              <h1 className="font-nocturno-light text-headline-medium md:text-display-small ">
                Donasi Forsa Peduli SMANGAT
              </h1>
            </div>
            <div>
              <div className="h-full w-full aspect-w-16 aspect-h-9 mb-[0.5%]">
                <img
                  className="object-cover object-center"
                  src="https://media.istockphoto.com/photos/diverse-group-of-elementary-school-kids-go-back-to-school-wearing-picture-id1270794789?b=1&k=20&m=1270794789&s=170667a&w=0&h=bWb7fDf8b3OuTBEctKb4mHqI3oVuWfbAFY4By_3GLvc="
                  alt="Gambar"
                />
              </div>
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
            <div className="flex flex-col max-w-2xl mt-[5%]">
              <h1 className="font-dinamit-light text-title-medium md:text-title-large leading-normal  mb-[10%]">
                Bantu Forsa Untuk Selalu Memberikan Manfaat Bagi Almamater
              </h1>
              <div className="flex justify-between items-center md:items-start">
                <div className="">
                  <div className="flex flex-col items-start space-y-1 py-[5%] border-t border-b">
                    <div className="uppercase font-dinamit-semibold tracking-widest text-[8px]">
                      by
                    </div>
                    <div className="flex flex-col space-y-[0.3%] ">
                      <p className="font-dinamit-medium text-label-small md:text-label-medium">
                        Forsa
                      </p>
                      <p className="font-dinamit-light text-label-small">
                        Pengurus Pusat Forsa
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start space-y-1 py-[5%] border-b">
                    <div className=" uppercase font-dinamit-semibold tracking-widest text-[8px]">
                      date
                    </div>
                    <div className="flex flex-col space-y-[0.3%]">
                      <p className="font-dinamit-light text-label-small">
                        1 Januari 2022
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
            <div className="max-w-2xl text-body-medium sm:text-body-large font-nocturno-regular tracking-wide leading-relaxed mt-[6%]">
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

export default Donation;
