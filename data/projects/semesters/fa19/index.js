import CCLData from './ccl';
import LAHData from '../sp20/lah';
import MLIDATA from './mli';
import YMCADATA from '../sp20/ymca';
import AcademyData from './academy';

// Fa18 Project Data
export default {
  semester: 'Fall 2019',
  projects: [
    {
      ...CCLData,
    },
    {
      ...LAHData,
    },
    {
      ...MLIDATA,
    },
    {
      ...YMCADATA,
    },
    {
      ...AcademyData,
    },
  ],
};
