import { RESPONSE_DATA_TYPE } from "@/lib/constants";

export const dtoToMultipleElement = data => {
  if (!data || data?.length === 0) {
    return {};
  }
  const result = {};

  data.forEach((item, index) => {
    /* const keyName = item?.title
      ? item?.title
          .trim()
          .toLowerCase()
          .replace(/[\s\-\.]/g, "_")
      : `item${index + 1}`;
    */
    const keyName = `item${index + 1}`;
    item.title = item.title?.trim(); // Trimming extra whitespace.

    item.subTitle =
      item.title?.toLowerCase()?.includes("available") &&
      item.unit?.toLowerCase() === "kw"
        ? "AVAIL"
        : "";

    result[keyName] = item;
  });

  return result;
};

export const dtoToDG = data => {
  if (!data || data?.length === 0) {
    return {};
  }
  const bool = {};
  const char = {};

  const boolData = data.filter(x => x.data_type === RESPONSE_DATA_TYPE.bool);
  const charData = data.filter(x => x.data_type === RESPONSE_DATA_TYPE.char);

  boolData.forEach((item, index) => {
    const keyName = `item${index + 1}`;
    item.title = item.title?.trim(); // Trimming extra whitespace.

    item.subTitle =
      item.title?.toLowerCase()?.includes("available") &&
      item.unit?.toLowerCase() === "kw"
        ? "AVAIL"
        : "";
    bool[keyName] = item;
  });

  charData.forEach((item, index) => {
    const keyName = `item${index + 1}`;
    item.title = item.title?.trim(); // Trimming extra whitespace.

    item.subTitle =
      item.title?.toLowerCase()?.includes("available") &&
      item.unit?.toLowerCase() === "kw"
        ? "AVAIL"
        : "";
    char[keyName] = item;
  });

  return {
    bool,
    char
  };
};

export const dtoToListItems = data => {
  if (!data || data?.length === 0) {
    return [];
  }
  return data;
};

export const dtoToAcronym = data => {
  if (!data || data?.length === 0) {
    return {};
  }

  const result = {};

  data.forEach((item, index) => {
    const keyName = `item${index + 1}`;
    const isAvailable = item.title?.toLowerCase()?.includes("available"); // Trimming extra whitespace.
    const isRequest = item.title?.toLowerCase()?.includes("request"); // Trimming extra whitespace.
    const isRunning = item.title?.toLowerCase()?.includes("running"); // Trimming extra whitespace.

    item.title = isAvailable
      ? "AVAIL"
      : isRequest
        ? "REQ"
        : isRunning
          ? "RUN"
          : item?.title;
    result[keyName] = item;
  });

  return result;
};
