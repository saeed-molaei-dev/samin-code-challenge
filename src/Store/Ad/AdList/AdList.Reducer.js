import {
  ADLISTFAILEDSTATE,
  ADLISTLOADINGSTATE,
  ADLISTSTATE,
} from "../../../Constanst/Constanst.Const";

export default function AdListReducer(
  adListState = {
    adListLoading: false,
    adList: [],
    sortedAdList: [],
    searchAdList: [],
    adListFailed: "",
  },
  { type, payload },
) {
  switch (type) {
    case ADLISTLOADINGSTATE:
      return payload;
    case ADLISTSTATE:
      return payload;
    case ADLISTFAILEDSTATE:
      return payload;
    default:
      return adListState;
  }
}
