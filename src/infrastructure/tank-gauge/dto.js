export const dtoToTankCard = data => {
  if (!data) return [];
  if (data.length === 0) return [];

  return data.map(item => {
    delete item.register_no;
    return item;
  });
};

export const dtoToProgressBar = data => {
  if (!data) {
    return { view: false };
  }
  if (data.length === 0) {
    return { view: false };
  }
  const progressItem = data.find(item => item.unit === "m");
  if (!progressItem) {
    return { view: false };
  }

  return {
    view: true,
    value: progressItem.value,
    min: progressItem.min,
    max: progressItem.max
  };
};
