// Sp20 Imports
import GlenWorldData from "./glenworld";
import KsoData from "./kso";
import LahData from "./lah";
import SaverLifeData from "./saverlife";
import YmcaData from "./ymca";

export default {
  semester: "Spring 2020",
  projects: [
    {
      ...GlenWorldData
    },
    {
      ...KsoData
    },
    {
      ...LahData
    },
    {
      ...SaverLifeData
    },
    {
      ...YmcaData
    }
  ]
};
