A Template to copy over when adding a new project

```javascript
const name = '';
const id = ''; // used for project navigation and representations in folders

/* Blurb Shown when describing project in /projects */
const detail = '';

/* Client Details */
const coverImagePath = ''; // used in the project cards in /projects
const clientDetail = '';
const clientLink = ''; // link to website
const clientFeatures = [
  {
    title: '',
    detail: '',
  },
]; // can be null

/* Product Details and Solution */
const problem = '';
const problemImagePath = '';
const solution = '';
const solutionImagePath = '';

/* Product Features*/
const features = [
  {
    title: '',
    detail: '',
    imgPath: '',
  },
]; // can be null
const featureImgSize = null;

const techStack = ['']; // can be null, must follow specific format (look at `projectTechStack.js`)

/* Quote */
const quote = ''; // can be null
const quoteSource = ''; // can be null
const quoteSourceTitle = ''; // can be null

/* Project Related Links */
const githubLink = '';
const projectLink = '';

const team = {
  type: 'pic', // can be "no-pic" if no pics for developers, look at README.md for more info
  detail: [
    {
      name: '',
      role: '',
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
  team,
};
```
