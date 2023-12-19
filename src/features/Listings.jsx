import Listing from './Listing';
import Spinner from 'components/Spinner';
import useFetchListings from 'hooks/useFetchListings';

const Listings = () => {

  const { listings, error, loading } = useFetchListings();

  const renderListings = () => {
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return (
        <div role="alert" aria-live="assertive">
          Error: {error.message}
        </div>
      );
    }

    return (
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listings?.map((listing) => (
          <li key={listing.mlsId}>
            <Listing listing={listing} />
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderListings()}</div>;
};

export default Listings;
