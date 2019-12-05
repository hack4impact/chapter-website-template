// Data for the Fa19 YMCA Project
const name = "Dr.Mehta's Lab at UIC";
const id = "mli";
const detail = "How might we create an algorithm that denoises x-ray images and allow for the research lab to better diagnose patients?";
const coverImagePath = "/static/images/projects/mli/cover.png";
const clientDetail =
  "Dr. Ankit I. Mehta’s lab at the University of Illinois at Chicago (UIC MLI) specializes in “the surgical treatment of complex spinal conditions including tumors, degenerative and spine diseases”, among which are corrective surgeries which require screws to be placed in patients’ spines to help correct vertebrae alignment. X-rays are taken at the location of any inserted screws at two occasions - one relatively closer to the operation and another later on - so that movement in screws and/or vertebrae can be monitored over time. At each time, two x-rays are taken: one from the patient’s side (lateral view) and another from the back (AP view). In addition to verifying operation success, the “post” x-rays can help diagnose spinal issues that may have occurred as a result of an operation, such as pseudarthrosis.";
const clientLink =
  "https://hospital.uillinois.edu/find-a-doctor/ankit-i-mehta";
const previousLink = null;
const clientFeatures = null;
const problem =
  "For both the lateral and the AP views, there are two separate sources of motion that could contribute to differences between the “pre” and “post” images: movement of the patient and the ovement of the spine and/or screws. The camera itself has preset positions for both views, with millimeter-level noise between separate images that can be effectively ignored. As the movements of the patient are extraneous, they introduce noise that makes it difficult to evaluate patient progress and diagnose any potential issues (e.g. pseudarthrosis) that may cause major health risks. As a result, a patient that may come in after their operation to diagnose why they haven’t seen the expected improvement may require additional x-rays which delay the process, which could result in any medical conditions worsening or potentially another operation being required.";
const problemImagePath = "/static/images/projects/mli/problem.JPG";
const solution =
  "We will create an algorithm enabling users to upload both the “pre” and “post” images, realign/manipulate them, and eliminate noise induced by movement of the patient. By doing so, the lab will be able to make more accurate diagnoses and prognoses of their patients. Having specific, quantitative data on the relative positions and movements of screws and vertebral bodies of interest would help patients to make the best of their own and the lab’s time and diagnose any complications earlier for better health and less cost to the patient.";
const solutionImagePath = "/static/images/projects/mli/solution.png";
const features = null;

const featureImgSize = "7";
const techStack = ["python"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/life-after-hate";
const team = {
  type: "pics",
  detail: [
    {
      name: "Arpan Laha",
      role: "Product Manager"
    },
    {
      name: "Aryn Harmon",
      role: "Tech Lead"
    },
    {
      name: "Eugenia Chen",
      role: "Software Developer"
    },
    {
      name: "Melody Felix",
      role: "Software Developer"
    },
    {
      name: "Michael Chen",
      role: "Software Developer"
    },
    {
      name: "Prashant Pokhriyal",
      role: "Software Developer"
    },
    {
        name: "Sabelle Huang",
        role: "Software Developer"
    }
  ]
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
  featureImgSize
};
