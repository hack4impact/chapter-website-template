import Fa18C2tcData from "./c2tc";
import ChildsPlayData from "./cp";
import GlobalGivingData from "./gg";
import PhilaReadsData from "./pr";

// Fa18 Project Data
export default {
  semester: "Fall 2018",
  projects: [
    {
      ...Fa18C2tcData
    },
    {
      ...ChildsPlayData
    },
    {
      ...GlobalGivingData
    },
    {
      ...PhilaReadsData
    }
  ]
};
