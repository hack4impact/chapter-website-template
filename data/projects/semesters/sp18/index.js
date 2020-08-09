// Fa17/Sp18 Imports
import Sp18C2tcData from "./c2tc-1";
import LwbData from "./lwb";
import Sp18KivaData from "./kiva-1";
import Sp18NnbData from "./nnb-1";

// TODO: NNB and Kiva
export default {
  semester: "Fall 2017 & Spring 2018",
  projects: [
    {
      ...LwbData,
    },
    {
      ...Sp18C2tcData,
    },
    {
      ...Sp18KivaData,
    },
    {
      ...Sp18NnbData,
    },
  ],
};
