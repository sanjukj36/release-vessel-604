export const dtoToTelemetryBandwidth = data => {
  if (!data) {
    return {
      unit: "Mbps",
      speed: 0,
      range: 100
    };
  }
  return {
    unit: data.unit ?? "Mbps",
    speed: +data.download_speed ?? 0,
    range: +data.range ?? 10
  };
};
