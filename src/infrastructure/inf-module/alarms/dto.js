export const dtoToAlarms = data => {
  if (!data || data?.length === 0) {
    return [];
  }

  return data.map(alarms => {
    const { id, message, timestamp } = alarms;
    return {
      id,
      label: message,
      time: timestamp
    };
  });
};
