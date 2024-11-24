import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import { clientsPartners } from "@/data/clientsPartnersData";

const firstRow = clientsPartners.slice(0, clientsPartners.length / 2);
const secondRow = clientsPartners.slice(clientsPartners.length / 2);

const ClientPartnersCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 flex flex-col items-center",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        className="rounded-full mb-4 w-40"
        width={1000}
        height={1000}
        alt={name}
        src={`/images/clients-partners/${img}`}
      />
      <figcaption className="text-md font-medium dark:text-white text-center">
        {name}
      </figcaption>
    </figure>
  );
};

export function OurClientsPartners() {
  return (
    <div className="relative flex mb-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-thRed tracking-wider my-5">
        Our Clients and Partners
      </h2>{" "}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((clientsPartners) => (
          <ClientPartnersCard key={clientsPartners.name} {...clientsPartners} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((clientsPartners) => (
          <ClientPartnersCard key={clientsPartners.name} {...clientsPartners} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
