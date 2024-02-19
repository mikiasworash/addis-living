import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="py-32">
      {/* <CardContainer className="inter-var">
        <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#2A303C] border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-xl font-bold text-white">
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-sm max-w-sm mt-2 text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer> */}

      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            price={item.price}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
export default Home;

const Skeleton = () => (
  <div className="w-full h-full min-h-[6rem] rounded-xl">
    <img
      src="https://source.unsplash.com/brown-and-black-wooden-house-TiVPTYCG_3E"
      className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
      alt="thumbnail"
    />
  </div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src="https://source.unsplash.com/3d-render-house-balcony-terrace-at-night-zzZJkvrzfP4"
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
    price: "$10/night",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src="https://source.unsplash.com/white-concrete-building-g39p1kDjvSY"
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
    price: "$10/night",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src="https://source.unsplash.com/trees-beside-white-house-IYfp2Ixe9nM"
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
    price: "$10/night",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src="https://source.unsplash.com/brown-and-white-concrete-house-under-blue-sky-during-daytime-XGvwt544g8k"
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
    price: "$10/night",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src="https://source.unsplash.com/brown-and-black-wooden-house-TiVPTYCG_3E"
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
    price: "$10/night",
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src="https://source.unsplash.com/white-and-brown-house-near-swimming-pool-ylyn5r4vxcA"
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
    price: "$10/night",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src="https://source.unsplash.com/3d-render-house-balcony-terrace-at-night-zzZJkvrzfP4"
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
    price: "$10/night",
  },
];
