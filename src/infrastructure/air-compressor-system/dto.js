export const dtoToTwoElement = data => {
  if (!data || data.length === 0) {
    return {};
  }
  const [item1, item2] = data;
  return {
    item1,
    item2
  };
};

export const dtoToSingleElement = data => {
  if (!data || data.length === 0) {
    return {};
  }
  const [firstElement] = data;
  return firstElement;
};
