export const RESPONSE_PW_SYSTEM = {
  engineStatus: {
    dg1: {
      open: 1,
      close: null
    },
    dg2: {
      open: null,
      close: 1
    },
    dg3: {
      open: 1,
      close: null
    },
    dg4: {
      open: null,
      close: 1
    }
  },
  midBoxValues: {
    sg1p: {
      value: 0,
      unit: "kW"
    },
    sg1v: {
      value: 0,
      unit: "V"
    },
    sg2p: {
      value: 0,
      unit: "kW"
    },
    sg2v: {
      value: 0,
      unit: "V"
    },
    dg1p: {
      value: 0,
      unit: "kW"
    },
    dg1v: {
      value: 0,
      unit: "V"
    },
    dg2p: {
      value: 411,
      unit: "kW"
    },
    dg2v: {
      value: 0,
      unit: "V"
    },
    dg3p: {
      value: 0,
      unit: "kW"
    },
    dg3v: {
      value: 0,
      unit: "V"
    },
    dg4p: {
      value: 0,
      unit: "kW"
    },
    dg4v: {
      value: 0,
      unit: "V"
    }
  },
  alarmStatus: {
    dg1: [
      {
        title: "DG1 ACB ABNORMAL TRIP",
        status: 0
      },
      {
        title: "DG1 ACB CLOSE FAIL",
        status: 0
      },
      {
        title: "DG1 CLOSE",
        status: 0
      },
      {
        title: "DG1 OPEN",
        status: 1
      },
      {
        title: "DG1 RUNNING",
        status: 0
      }
    ],
    dg2: [
      {
        title: "DG2 ACB ABNORMAL TRIP",
        status: 0
      },
      {
        title: "DG2 ACD CLOSE FAIL",
        status: 0
      },
      {
        title: "DG2 CLOSE",
        status: 1
      },
      {
        title: "DG2 OPEN",
        status: 0
      },
      {
        title: "DG2 RUNNING",
        status: 1
      }
    ],
    dg3: [
      {
        title: "DG3 ACB ABNORMAL TRIP"
      },
      {
        title: "DG3 ACB CLOSE FAIL"
      },
      {
        title: "DG3 CLOSE",
        status: 0
      },
      {
        title: "DG3 OPEN",
        status: 1
      },
      {
        title: "DG3 RUNNING",
        status: 0
      }
    ],
    sg1: [
      {
        title: "SG1 ACB ABNORMAL TRIP",
        status: 0
      },
      {
        title: "SG1 ACB CLOSE FAIL",
        status: 0
      },
      {
        title: "SG1 OPEN",
        status: 1
      },
      {
        title: "SG1 CLOSE",
        status: 0
      },
      {
        title: "SG1 RUNNING",
        status: 0
      }
    ],
    sg2: [
      {
        title: "SG2 ACB ABNORMAL TRIP"
      },
      {
        title: "SG2 ACB CLOSE FAIL"
      },
      {
        title: "SG2 OPEN",
        status: 1
      },
      {
        title: "SG2 CLOSE",
        status: 0
      },
      {
        title: "SG2 RUNNING",
        status: 0
      }
    ]
  }
};
