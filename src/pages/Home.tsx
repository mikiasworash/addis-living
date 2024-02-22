import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import listings from "@/components/listings";

const Home = () => {
  return (
    <div className="py-32">
      <BentoGrid className="max-w-6xl mx-auto">
        {listings.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            price={item.price}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            link={`/listings/${item.id}`}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
export default Home;
