import CCLData from "./ccl";
import LAHData from "./lah";
import MLIDATA from "./mli";
import YMCADATA from "./ymca";
import AcademyData from "./academy";

// Fa18 Project Data
export default {
  semester: "Fall 2019",
  projects: [
    {
      ...CCLData
    },
    {
      ...LAHData
    },
    {
      ...MLIDATA
    },
    {
      ...YMCADATA
    },
    {
        ...AcademyData
      }
  ]
};
