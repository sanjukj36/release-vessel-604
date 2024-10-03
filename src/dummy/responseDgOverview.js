export const RESPONSE_DG_OVERVIEW = {
  tableValueData: [
    {
      title: "ECR REMOTE EM.STOP",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "AFT BRIDGE REMOTE EM.STOP",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "FWD BRIDGE REMOTE EM.STOP",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "LUBE OIL PRESSURE TOO LOW SHD",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "COOLANT TEMP TOO HIGH SHD",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "LOCAL EMERGENCY STOP",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "REMOTE EMERGENCY STOP",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "OVERSPEED SHD",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "COMMON SHD",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "RPU EMERGENCY STOP",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    // finished
    {
      title: "SPEED SENSOR CLOSE",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "DCU UNIT BATTERY VOLT LOW",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: " THREE  START CLOSE",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "RPU UNIT MAIN BATTERY A VOLTLOW",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "RPU UNIT BKUP BATTERY B VOLTLOW",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "COMMON ALARM",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "COMMON WARNING",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "COMMON SHD",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "COMMON COOLDOWN",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    },
    {
      title: "COMMON FLS SENSOR CLOSE",
      no_1: { status: false, text: "CLOSE" },
      no_2: { status: true, text: "OPEN" },
      no_3: { status: true, text: "OPEN" },
      no_4: { status: false, text: "CLOSE" }
    }
  ],
  tableBooleanData: [
    {
      title: "SET ASYMMETRIC LOAD LEVEL",
      unit: "[%]",
      no_1: 10,
      no_2: 20,
      no_3: 30,
      no_4: 40,
      limit: 100
    },
    {
      title: "LOAD DEPENDANT START SETPOINT",
      unit: "[%]",
      no_1: 10,
      no_2: 20,
      no_3: 30,
      no_4: 40,
      limit: 100
    },
    {
      title: "DELAY FOR LOAD DEPENDANT START",
      unit: "[s]",
      no_1: 10,
      no_2: 20,
      no_3: 30,
      no_4: 40,
      limit: 100
    },
    {
      title: "LOAD DEPENDANT STOP SETPOINT",
      unit: "[%]",
      no_1: 10,
      no_2: 20,
      no_3: 30,
      no_4: 40,
      limit: 100
    },
    {
      title: "DELAY FOR LOAD DEPENDANT STOP",
      unit: "[s]",
      no_1: 10,
      no_2: 20,
      no_3: 30,
      no_4: 40,
      limit: 100
    },
    {
      title: "VOLTAGE",
      unit: "[V]",
      no_1: 48,
      no_2: 48,
      no_3: 52,
      no_4: 56,
      limit: 100
    },

    {
      title: "FREQUENCY",
      unit: "[Hz]",
      no_1: 61,
      no_2: 31,
      no_3: 71,
      no_4: 73,
      limit: 100
    },
    {
      title: "CURRENT",
      unit: "[A]",
      no_1: 22,
      no_2: 12,
      no_3: 13,
      no_4: 38,
      limit: 100
    },
    {
      title: "COS PHI (PF)",
      unit: "[PF]",
      no_1: 32,
      no_2: 32,
      no_3: 20,
      no_4: 48,
      limit: 100
    },
    {
      title: "ACTIVE PWR",
      unit: "[KW]",
      no_1: 32,
      no_2: 32,
      no_3: 70,
      no_4: 48,
      limit: 100
    },
    {
      title: "REACTIVE PWR",
      unit: "[KW]",
      no_1: 32,
      no_2: 35,
      no_3: 35,
      no_4: 35,
      limit: 100
    }
  ],
  dg1: {
    status: false,
    row1Data: {
      col1: [{ title: "EXH. GAS MEAN", value: 63, limit: 100, unit: "°C" }],
      col2: [
        { title: "ENGINE SPEED", value: 63, limit: 100, unit: "RPM" },
        { title: "T/C SPEED", value: 63, limit: 100, unit: "r/min" }
      ],
      col3: {
        title: "WINDING TEMP [°C]",
        data: [
          { title: "(V)", value: 63, limit: 100 },
          { title: "(U)", value: 63, limit: 100 },
          { title: "(W)", value: 63, limit: 100 }
        ]
      }
    },
    row2Data: {
      title: "TRIP CONDITION",
      data: [
        { title: "OVER SPEED", status: true },
        { title: "OIL MIST TOO HIGH", status: true },
        { title: "EXH. GAS MEAN", value: 63, limit: 100, unit: "°C" }
      ]
    },
    row3Data: [
      {
        title: "EXH. GAS TEMP [°C]",
        no_1: { value: 30, limit: 100 },
        no_2: { value: 40, limit: 100 },
        no_3: { value: 50, limit: 100 },
        no_4: { value: 60, limit: 100 },
        no_5: { value: 70, limit: 100 },
        no_6: { value: 80, limit: 100 },
        no_7: { value: 90, limit: 100 },
        no_8: { value: 99, limit: 100 }
      },
      {
        title: "EXH. GAS DEVIATION",
        no_1: { value: 30, limit: 100 },
        no_2: { value: 40, limit: 100 },
        no_3: { value: 50, limit: 100 },
        no_4: { value: 60, limit: 100 },
        no_5: { value: 70, limit: 100 },
        no_6: { value: 80, limit: 100 },
        no_7: { value: 90, limit: 100 },
        no_8: { value: 99, limit: 100 }
      }
    ]
  }
};
