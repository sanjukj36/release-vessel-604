export const dtoToMultipleElement = data => {
  if (!data || data?.length === 0) {
    return {};
  }
  const result = {};

  data.forEach((item, index) => {
    result[`item${index + 1}`] = item;
  });

  return result;
};
