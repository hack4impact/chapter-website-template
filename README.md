# UIUC Chapter Website - uiuc.hack4impact.org

------
This website uses the server-rendered react framework, [Next.js](http://nextjs.org) for the best of both worlds, react usable components and faster page loads (since this is mostly a static website). We are also able to load configurations, text, etc based on config files (possibly json).

To start development, first install node.js and yarn. Look at the [H4I wiki](https://github.com/hack4impact-uiuc/wiki/wiki/Mac-Setup) for instructions. Then,
```
yarn
yarn dev
```

For the optimal development environment, edit your code with [vscode](https://code.visualstudio.com/) and install the [eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) then press `Cmd + Shift + P` to open the command palette and then search and click `Eslint: Enable Eslint`. Then, go to the settings (`Cmd + Shift + P` then type `open user settings`) and search for `Eslint`. Afterwards, click the checkbox for `Eslint: Auto Fix On Save`. This would automatically format your code as you go.


## Details
### Project Pages
Each project page is under `/projects?name={project_id}`. Ex: `/projects?name=c2tc-1` - this goes to the sp2018 project. `/projects?name=c2tc-2` goes to the fa18 project, etc. Look into `/data/projectData.js` for the projects detail. `/projects` just goes to the regular project page listing all the projects.

### People Pictures
Whenever you need to add a new member to the organization, whether to the `/about` or `/project` page, you would need to add a photo of them to the folder `/static/images/people/` and name it `{name}.jpg`. Ex: for `Timothy Ko`, `timothy_ko.jpg`. Fill in the spaces with `_`. Then, in any configuration file for their name, put in the name itself (`Timothy Ko`)

### Project Data configuration
The Project Data configuration file will hold a list of dictionaries (which are semesters specifying the projects that happened there). Each field must exist.

Look at [template.md](./template.md) for a template when adding a project

Each Semester has the following...
- `semester`: <str> ex: Fall 2018
- `projects`: List[Objects]
    - `name`: Full Name of Client
    - `id`: id for the page ex: `/projects?name=lwb` goes to the project with id `lwb`
    - `detail`: detail shown below each project card (in the regular projects list)
    - `coverImagePath`: image shown in each project card
    - `clientDetail`: paragraph detailing the client and who they are. Shown in the project banner.
    - `clientLink`: link to the Client's website. Used in the `Learn More` Button in the project banner
    - `clientFeatures`: array of features about the client
        - `title`: example is `In Donations`
        - `detail: example is `$324 Million`
    - `problem`: problem text shown below the `Problem` in the specific project's page
    - `problemImagePath`: the image for this section
    - `solution`: solution text
    - `solutionImagePath`: self explanatory
    - `features`: List[Object] (can make this null)
        - `title`: str
        - `detail`: str
        - `imgPath`: optional but shows feature's images.
    - `techStack`: List[str] (Must match the `techStackMasterList` in `/components/projects/projectTechStack.js`)
    - `quote`: Quote from client. (can be null) 
    - `quoteSource`: name of the source of the quote (can be null if `quote` is null)
    - `quoteTitle`: the title of the source of the quote (can be null if `quoteq is null)
    - `githubLink`: link to the github source code of the project
    - `projectLink: link to the project's current deployable link. Or a link to a youtube video, gif, etc.
    - `team`: Object
        - `type`: either `no-pic` or `pic`
        - `details` (this can either be { pm: "Timothy Ko", tl: "Aria Malkani", swe: ["Hana Rimawi", "Michael Chen"]} for type `no-pic`. OR [{name: "Timothy Ko", role: "Product Manager"}, {name: "Aria Malkani", role: "Tech Lead"}, {name: "Hana Rimawi", role: "Software Developer"}]) for type `pic`
    - `featureImgSize`: (int) Bootstrap column size for the image in a feature Slider. This is to combat rectangle screenshots (vertical rectangles(phone screenshots) dont fit well with column 6 while rectanges work well with 7) - nullable. `FeatureSlider` will default to 6 (half)


### Apply Pages
For both Nonprofits and Students, both pages pull data from `/data/ngoApplyData.js` or `/data/studentApplyData.js` depending on the page. 

To close an application cycle, add the `closed` prop to the component `ApplicationProcess` in the relevant page and the `closedText` will display. Remember to update `currentSemester` and `nextSemester` to the correct text because that will affect what the `closedText` says. 

Always remember to update the `applicationLink`, the Dates, etc. They will all be reflected on our pages. Look into the code to know how to add more faq questions, change the application process, etc. It's pretty straightforward.