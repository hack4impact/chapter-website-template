// Data for the Sp20 LAH Project
const name = 'Life After Hate';
const id = 'lah';
const detail =
  'How might we build a centralized platform that allows for more efficient lookup and storage of ExitUSA™ program resources?';
const coverImagePath = '/images/projects/lah/cover.jpg';
const clientDetail =
  'Founded and run by former hate group members who have led successful post-movement lives, ExitUSA™ provides support to individuals who are looking to leave racism and violence behind. The organization uses a variety of strategies, including public awareness campaigns, individualized education and job training programs, and leveraging strategic community partnerships to help individuals get their lives back on track and on their way to making positive contributions to society.';
const clientLink = 'https://www.lifeafterhate.org';
const previousLink = null;
const clientFeatures = [
  {
    title: 'Number of Supporters',
    detail: '30K+',
  },
  {
    title: 'Men and Women helped',
    detail: '150+',
  },
  {
    title: 'Formers Actively Involved',
    detail: '50+',
  },
];
const problem =
  'Often, LAH members and ExitUSA™ volunteers receive resource requests for specific services from service recipients. These requests can range from mental health support to tattoo removal to housing services. Resources are stored in individual staff emails, in LAH’s online ticketing system Supportbee, and in Smartsheets; therefore, when a referral needs to be made or a crisis occurs with an existing or new service recipient, they can lose precious time trying to track down resources. These referrals can take as long as days, and in time-sensitive scenarios LAH loses the ability to provide the logistical support that ExitUSA™ service recipients need.';
const problemImagePath = '/images/projects/lah/lah-problem.jpg';
const solution =
  'We’ve built a centralized platform that allows for more efficient lookup and storage of ExitUSA™ program resources. Resources include contact information, vetting documentation, location, industry, description with any prior contact, link to website as applicable, year relationship established, and Life After Hate point of contact. Staff need a centralized location with all necessary information to quickly access needed details when conducting case management and face-to-face interventions. Data needs to be secured and location-restricted with account privileges such that only staff and volunteers can access resource data relevant to their needs. In the second semester of working on this project, our team worked on technical improvements to ensure a quality, well-tested product as well as building on top of features created in the first semester. This consisted of creating an automated system to issue updates and  integrating Redux and RamdaJS to handle complex interactions between views and data. We also designated a “staging” and “production” version of the application to allow for mock data testing while sensitive data was only available to LAH staff.';
const solutionImagePath = '/images/projects/lah/lah-solution.jpg';
const features = [
  {
    title: 'Map View',
    detail:
      'All resources are shown on the map view with markers. The sidebar also shows more detailed information about each resource.',
    imgPath: '/images/projects/sp20/lah/lah-map-view-marker.jpg',
  },
  {
    title: 'Map View Search',
    detail:
      'Search by location, keyword, or tag, and resources are returned similar to the search terms. Resources have tags that can be used to categorize resources. Clicking on a resource tag filters the resources shown on the map view.',
    imgPath: '/images/projects/sp20/lah/lah-map-view-search.jpg',
  },
  {
    title: 'Resource Directory View',
    detail:
      'A complete listing of resources is shown in the directory. Resources can also be searched here by location, keyword, or tag.',
    imgPath: '/images/projects/sp20/lah/lah-resource-directory-tag-search.jpg',
  },
  {
    title: 'Resource Details',
    detail:
      'A modal pops up for details on each resource in the directory view. Admins can also edit the resources in this view.',
    imgPath: '/images/projects/sp20/lah/lah-resource-details.jpg',
  },
  {
    title: 'Login and Accounts',
    detail:
      'Login is through a Google account. Accounts also have different roles: admin, volunteer, or pending, with different permissions allotted for each.',
    imgPath: '/images/projects/sp20/lah/lah-user-directory.jpg',
  },
];

const featureImgSize = '7';
const techStack = ['react', 'nodejs', 'mongodb', 'express', 'ramda', 'passport', 'redux', 'mapbox'];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = 'https://github.com/hack4impact-uiuc/life-after-hate';
const team = {
  type: 'pics',
  detail: [
    {
      name: 'Alan Fang',
      role: 'Sp20 & Fa19 Product Manager',
    },
    {
      name: 'Josh Byster',
      role: 'Sp20 & Fa19 Tech Lead',
    },
    {
      name: 'Aryn Harmon',
      role: 'Sp20 Software Developer',
    },
    {
      name: 'Eugenia Chen',
      role: 'Sp20 Software Developer',
    },
    {
      name: 'Angad Garg',
      role: 'Sp20 Software Developer',
    },
    {
      name: 'Josh Burke',
      role: 'Sp20 Software Developer',
    },
    {
      name: 'Evan Eckels',
      role: 'Sp20 & Fa19 Product Designer',
    },
    {
      name: 'Lauren Ho',
      role: 'Fa19 Software Developer',
    },
    {
      name: 'Albert Cao',
      role: 'Fa19 Software Developer',
    },
    {
      name: 'Alice Fang',
      role: 'Fa19 Software Developer',
    },
    {
      name: 'Gene Wang',
      role: 'Fa19 Software Developer',
    },
    {
      name: 'Rebecca Xun',
      role: 'Fa19 Software Developer',
    },
  ],
};

export default {
  name,
  id,
  detail,
  coverImagePath,
  clientDetail,
  clientLink,
  clientFeatures,
  problem,
  problemImagePath,
  solution,
  solutionImagePath,
  features,
  techStack,
  quote,
  quoteSource,
  quoteSourceTitle,
  githubLink,
  previousLink,
  team,
  featureImgSize,
};
