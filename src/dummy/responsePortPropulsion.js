export const RESPONSE_PORT_PROPULSION = {
  col1: [
    {
      title: "VFD1",
      data: [
        {
          title: "NO.1 C.W. PUMP RUNNING",
          value: false
        },
        {
          title: "NO.2 C.W. PUMP RUNNING",
          value: false
        },
        {
          title: "VFD IS RUNNING",
          value: false
        },
        {
          title: "NO.1 C.W. PUMP FAULT",
          value: false
        },
        {
          title: "NO.2 C.W. PUMP FAULT",
          value: false
        },
        {
          title: "VFD IS WARNING",
          value: false
        },
        {
          title: "VFD SYSTEM ALARM ACTIVE",
          value: false
        },
        {
          title: "SLOWDOWN WARNING",
          value: false
        },
        {
          title: "MOTOR MODULE WARNING",
          value: false
        }
      ]
    },
    {
      title: "PROPUL. TRANS. 1",
      data: [
        {
          title: "WATER LEAKAGE ALARM",
          value: false
        },
        {
          title: "TEMERATURE H. ALARM",
          value: false
        },
        {
          title: "TEMPERATURE HH. ALARM",
          value: false
        }
      ]
    }
  ],
  col2: [
    {
      title: "PORT AZI. THRUSTER",
      data: [
        {
          title: "LUBE OIL LEVEL LOW",
          value: true
        },
        {
          title: "GRAVITY TK LEVEL LOW",
          value: true
        },
        {
          title: "NO1. STEERING VFD FAULT",
          value: true
        },
        {
          title: "NO2. STEERING VFD FAULT",
          value: true
        },
        {
          title: "LUBE OIL FILTER CLOGGED",
          value: true
        }
        // TODO: add more.
      ]
    }
  ],
  col3: [
    {
      title: "",
      data: [
        {
          title: "PORT THRUSTER L.O. TEMP.",
          unit: "°C",
          value: 0
        },
        {
          title: "MOTOR POWER",
          unit: "Kw",
          value: 0
        },
        {
          title: "MOTOR CURRENT",
          unit: "A",
          value: 0
        },
        {
          title: "MOTOR SPEED",
          unit: "rpm",
          value: 0
        },
        {
          title: "MOTOR TORQUE",
          unit: "Nm",
          value: 0
        }
      ]
    },
    {
      title: "MOTOR WINDING TEMP",
      data: [
        {
          title: "U",
          unit: "°C",
          value: 0
        },
        {
          title: "V",
          unit: "°C",
          value: 0
        },
        {
          title: "W",
          unit: "°C",
          value: 0
        }
      ]
    },
    {
      title: "MOTOR BEARING TEMP",
      data: [
        {
          title: "DE",
          unit: "°C",
          value: 0
        },
        {
          title: "NDE",
          unit: "°C",
          value: 0
        }
      ]
    },
    {
      title: "MOTOR AIR TEMP",
      data: [
        {
          title: "COLD",
          unit: "°C",
          value: 0
        },
        {
          title: "HOT",
          unit: "°C",
          value: 0
        }
      ]
    }
  ]
};
