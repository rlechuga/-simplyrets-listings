export const combineBaths = (currentListing) => {
  const fullBaths = currentListing.property.bathsFull;
  const halfBaths = currentListing.property.bathsHalf;
  const combinedBaths = fullBaths + halfBaths / 2;
  return combinedBaths;
};

export const formatPrice = (price) => {
  return `$${price.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'numeric', day: 'numeric', year: '2-digit' };
  return date.toLocaleDateString(undefined, options);
};
