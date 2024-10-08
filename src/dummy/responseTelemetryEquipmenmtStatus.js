export const RESPONSE_TES = {
  bandwidthStatus: {
    unit: "Mbps",
    speed: 90
  },
  pingStatus: [
    {
      host_name: "MDC",
      host: "172.168.0.80",
      status: false
    },
    {
      host_name: "AMS",
      host: "172.168.0.2",
      status: true
    },
    {
      host_name: "Transbox",
      host: "172.168.0.81",
      status: true
    }
  ],
  mdcDiskUsage: {
    free_storage: 213.2,
    total_storage: 237.86,
    used_storage: 24.66
  },
  transboxDiskUsage: {
    free_storage: 23.2,
    total_storage: 237.86,
    used_storage: 154.66
  }
};
