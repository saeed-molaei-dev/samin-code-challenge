import {
  ADDETAILFAILEDSTATE,
  ADDETAILLOADINGSTATE,
  ADDETAILSTATE,
} from "../../../Constanst/Constanst.Const";

export default function AdDetailReducer(
  adDetailState = {
    adDetailLoading: false,
    adDetailList: {},
    adDetailError: "",
  },
  { type, payload },
) {
  switch (type) {
    case ADDETAILLOADINGSTATE:
      return payload;
    case ADDETAILSTATE:
      return payload;
    case ADDETAILFAILEDSTATE:
      return payload;

    default:
      return adDetailState;
  }
}
