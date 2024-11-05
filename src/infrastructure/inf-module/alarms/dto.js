export const dtoToAlarms = data => {
  if (!data || data?.length === 0) {
    return [];
  }

  return data.map(alarms => {
    const { id, label, time } = alarms;
    return {
      id,
      label,
      time
    };
  });
};
