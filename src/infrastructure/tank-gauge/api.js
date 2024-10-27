import { getMQTTDataSecAPI } from "../mqtt/api";
import { dtoToProgressBar, dtoToTankCard } from "./dto";

const TOP_BLOCK = [
  "tank-SW_BALLAST_TK_3_P",
  "tank-SW_BALLAST_TK_2_P",
  "tank-F_O_SERV_TK_1",
  "tank-F_O_SERV_TK_2",
  "tank-F_O_STOR_TK_P",
  "tank-F_W_TK_P",
  "tank-STERN_DRAFT_P",
  "tank-DIRTY_OIL_TANK",
  "tank-BIL_WATER_TANK",
  "tank-BOW_DRAFT_P",
  "tank-G_W_T_K_P",
  "tank-SW_BALLAST_TK_1_P",
  "tank-SW_RESERVATION_TK"
];

const BOTTOM_BLOCKS = [
  "tank-STERN_DRAFT_S",
  "tank-BOW_DRAFT_S",
  "tank-EG_F_O_TANK",
  "tank-BLACK_WATER_TK",
  "tank-SW_BALLAST_TK_1_S",
  "tank-SW_BALLAST_TK_2_S",
  "tank-SW_BALLAST_TK_3_S",
  "tank-LO_TANK",
  "tank-F_O_STOR_TK_S",
  "tank-F_W_TK_S"
];

const getTitleAndData = async block => {
  const [data, error] = await getMQTTDataSecAPI(block);
  const title = getTitle(block);

  if (error) {
    return { title, data: null, error, progressBar: null };
  }

  const dtoCardData = dtoToTankCard(data);
  const dtoProgressData = dtoToProgressBar(data);

  return { data: dtoCardData, error, title, progressBar: dtoProgressData };
};

const getTitle = title => {
  return title.split("-")[1].replaceAll("_", ".");
};

const getTopsectionAPI = async () => {
  try {
    const data = await Promise.all(
      TOP_BLOCK.map(block => getTitleAndData(block))
    );
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

const getBottomsectionAPI = async () => {
  try {
    const data = await Promise.all(
      BOTTOM_BLOCKS.map(block => getTitleAndData(block))
    );
    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export default { getTopsectionAPI, getBottomsectionAPI };
