import Sp19SafeMapsData from './safemaps';
import KivaData from './kiva-2';
import GlobalGivingData from './gg-2';
import ProductInfraData from './pi';

// Fa18 Project Data
export default {
  semester: 'Spring 2019',
  projects: [
    {
      ...KivaData,
    },
    {
      ...Sp19SafeMapsData,
    },
    {
      ...GlobalGivingData,
    },
    {
      ...ProductInfraData,
    },
  ],
};
