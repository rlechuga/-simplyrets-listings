import { combineBaths, formatDate, formatPrice } from '@lib/format';

import FavoriteIcon from 'components/FavoriteIcon';

const Listing = ({ listing }) => {
  return (
    <article className="flex flex-col justify-between space-y-2 shadow-sm">
      <div className="relative grow-0 ">
        <img
          className="object-cover sm:w-[20rem] sm:h-[18rem] rounded"
          src={listing.photos[0]}
          alt="front of house"
        />
        <FavoriteIcon listing={listing} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          {listing.property.bedrooms} BR | {combineBaths(listing)} BA |{' '}
          {listing.property.area} Sq Ft
        </h2>
        <div>
          <p className="text-2xl font-bold">{formatPrice(listing.listPrice)}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-normal text-[#2D2D2D]">
          {listing.address.full}
        </p>
      </div>

      <div>
        <p className="text-xs mb-7 text-[#979797]">
          Updated: {formatDate(listing.listDate)}
        </p>
      </div>
    </article>
  );
};

export default Listing;
