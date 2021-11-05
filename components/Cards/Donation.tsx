import { Donation as DonationProps } from "../../utils/PropsType";
import Link from "next/link";
import { donations } from "../../utils/data/donations";

type props = {
  Donations: DonationProps[];
};
const Donation = ({ Donations }: props) => {
  return (
    <>
      {Donations.map((donation) => (
        <div key={donation.id} className="flex flex-col space-y-4 border ">
          <div className="h-full w-full aspect-w-16 aspect-h-9 object-cover object-center">
            <img
              className="object-cover object-center"
              src={donation.image}
              alt={donation.image_alt}
            />
          </div>
          <div className="flex flex-col space-y-2 px-4">
            <div>
              <h6 className="text-label-small uppercase tracking-widest">
                {donation.category}
              </h6>
              <div className="flex space-x-2 text-body-small">
                <h6>Oleh :</h6>
                <p className="font-semibold">{donation.from}</p>
              </div>
            </div>
            <div className="pb-2 space-y-3">
              <Link href={`/donasi/${donation.id}`}>
                <a>
                  <h1 className="font-nocturno-light text-title-medium sm:text-title-large">
                    {donation.title}: {donation.subtitle}
                  </h1>
                </a>
              </Link>
              <p className="font-dinamit-light text-body-small sm:text-body-medium">
                {donation.contents}
              </p>
            </div>
            <div className="space-y-2 font-dinamit-light text-body-small border-t border-b py-4">
              <div className="flex justify-between">
                <p>Rp {donation.current_goal}</p>
                <p>{donation.percent_goal}%</p>
              </div>
              <div className="h-2 w-full bg-gray-300">
                <div className="h-full w-[18.30%] bg-green-500" />
              </div>
              <div className="flex justify-between">
                <div>
                  <p>Rp {donation.goals}</p>
                  <p>Goal</p>
                </div>
                <p>{donation.remaining} Days to Go</p>
              </div>
            </div>
            <div className="py-4 w-full flex justify-center">
              <button className="px-4 py-2 bg-green-500 text-label-large text-white font-dinamit-light">
                Donasi Sekarang
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Donation;
