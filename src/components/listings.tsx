import listingsData from "../../_data/listings.json";

interface ListingItem {
  id: string;
  title: string;
  description: string;
  type: string;
  price: string;
  image_source: string;
}

interface Listing {
  id: string;
  title: string;
  description: string;
  type: string;
  price: string;
  header?: JSX.Element;
}

const listings: Listing[] = listingsData.listings.map(
  (listing: ListingItem) => ({
    id: listing.id,
    title: listing.title,
    description: listing.description,
    type: listing.type,
    price: listing.price,
    header: (
      <div className="w-full h-full min-h-[6rem] rounded-xl">
        <img
          src={listing.image_source}
          className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </div>
    ),
  })
);

export default listings;
