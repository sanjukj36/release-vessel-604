export const dtoToTelemetryBandwidth = data => {
  if (!data) {
    return {
      unit: "Mbps",
      speed: 0,
      range: 100
    };
  }
  if (!data?.success) {
    return {
      unit: "Mbps",
      speed: 0,
      range: 100
    };
  }
  return {
    unit: data.unit ?? "",
    speed: +data.download_speed ?? 0,
    range: +data.range ?? 10
  };
};
