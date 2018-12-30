export default [
  {
    semester: "Fall 2018",
    projects: [
      {
        name: "Cut to the Case",
        id: "c2tc-2", // second C2TC Project
        detail: "How might we make students feel safer on campus?",
        coverImagePath: "/static/images/projects/c2tc-2/c2tc-2-cover.jpg",
        clientDetail:
          "Cut to the Case (CTTC) is a nonprofit organization started by two UIUC Engineering students who met through a nonprofit startup aimed at increasing interest in STEM among young girls called MakerGirl. After getting accepted into iVenture Accelerator and doing summer research, Premika and Kendall decided to tackle the issue of sexual assault. CTTC’s goal is to increase reporting and eventually increase prosecution through a rape kit tracking system. Currently Premika and Kendall are working on customer research",
        clientLink:
          "http://iventure.illinois.edu/index.php/portfolio/wanderweb/",
        problem:
          "Cut to the Case is a UIUC based non-profit started by two UIUC Engineering students whose initial mission was to help victims of sexual assault. Now, Cut to the Case has expanded their focus into tackling public safety with the hopes of improving the safety of all students on campus",
        problemImagePath: "/static/images/projects/c2tc-2/c2tc-2-cover.jpg",
        solution: (
          <div style={{ marginTop: "20px" }}>
            Come out to our
            <a href="https://www.facebook.com/events/762781120723120/">
              {" "}
              Product Showcase{" "}
            </a>
            event to see our team&#39;s solution and live demo of the final
            product!
            <br />
            <br /> Event Details: <br /> Sunday, Dec. 9 <br /> 5PM-6PM <br />
            ECEB 2013
          </div>
        ),
        solutionImagePath: "/static/images/projects/question.jpg",
        features: [
          {
            title: "Map Interface",
            detail:
              "Users can click, drag and interact with map icons & filters"
          },
          {
            title: "Map Layers",
            detail:
              "Users can filter through layers containing different information such as emergency phones and past crimes"
          },
          {
            title: "Call Buttons",
            detail:
              "Users can access Safe Rides, Safe Walks, police, and trusted contact(s)"
          }
        ],
        techStack: ["reactnative", "flask", "mongodb"],
        quote:
          "We talked to a couple of people about developing about Cut to the Case, but a lot of them didn’t have the same passion that Hack4Impact had for the project. Hack4Impact had enthusiasm for what we were doing.",
        quoteSource: "Premika Pandian",
        quoteSourceTitle: "Cut to the Case Co-Founder and CTO",
        githubLink: "https://github.com/hack4impact-uiuc/c2tc-fall-2018",
        team: {
          type: "pics",
          detail: [
            {
              name: "Shreyas Mohan",
              role: "Product Manager"
            },
            {
              name: "Megha Mallya",
              role: "Tech Lead"
            },
            {
              name: "Josh Burke",
              role: "Software Developer"
            },
            {
              name: "Neeraj Aggarwal",
              role: "Software Developer"
            },
            {
              name: "Daniel Choi",
              role: "Software Developer"
            },
            {
              name: "Anooj Lal",
              role: "Software Developer"
            },
            {
              name: "Phillip Kuo",
              role: "UI/UX Designer"
            },
            {
              name: "Annie Wu",
              role: ""
            }
          ]
        }
      },
      {
        name: "Child's Play",
        id: "cp", // second C2TC Project
        detail:
          "How might we streamline the process of connecting children with effective games to order to alleviate their ailments?",
        coverImagePath: "/static/images/projects/cp/cp-cover.jpg",
        clientDetail:
          "Child’s Play seeks to improve the lives of children in pediatric hospitals and other child welfare facilities through the kindness and generosity of the video game community and the power of play. They reach 169 hospitals and shelters internationally.",
        clientLink: "https://childsplaycharity.org/",
        problem:
          "Child’s Play currently has an online pdf guide that categorizes recommended games by ailment, age, and device. This guide is updated around once a year with the newest EEDAR reports that they receive. The current PDF is static which requires manual searching, making it hard to update. Hospitals’ usage can be limited or slow.",
        problemImagePath: "/static/images/projects/cp/cp-cover.jpg",
        solution: (
          <div style={{ marginTop: "20px" }}>
            Come out to our{" "}
            <a href="https://www.facebook.com/events/762781120723120/">
              Product Showcase
            </a>{" "}
            event to see our team&#39;s solution and live demo of the final
            product!
            <br />
            <br /> Event Details: <br /> Sunday, Dec. 9 <br /> 5PM-6PM <br />
            ECEB 2013
          </div>
        ),
        solutionImagePath: "/static/images/projects/question.jpg",
        features: [
          {
            title: "Search Filters",
            detail:
              "Users can choose from Age, Ailment, Game Title, Gender of Protagonist, and System"
          },
          {
            title: "Upload Field",
            detail: "Users can easy update new data"
          },
          {
            title: "Game Descriptions",
            detail:
              "Provide users information including Protagonist, Tags, Picture, Description, and Title"
          }
        ],
        techStack: ["react", "redux", "flask", "postgres"],
        quote: null,
        githubLink: "https://github.com/hack4impact-uiuc/childs-play-tool",
        team: {
          type: "pic",
          detail: [
            {
              name: "Hana Rimawi",
              role: "Product Manager"
            },
            {
              name: "Angad Garg",
              role: "Tech Lead"
            },
            {
              name: "Jeffy Lin",
              role: "Software Developer"
            },
            {
              name: "Betty Shen",
              role: "Software Developer"
            },
            {
              name: "Michael Chen",
              role: "Software Developer"
            },
            {
              name: "Arpan Laha",
              role: "Software Developer"
            },
            {
              name: "Albert Cao",
              role: "Software Developer"
            }
          ]
        }
      },
      {
        name: "Global Giving",
        id: "gg",
        detail:
          "How might we expand Global Giving’s impact and reach on domestic and international nonprofits?",
        coverImagePath: "/static/images/projects/gg/gg-cover.jpg",
        clientDetail:
          "Global Giving seeks to identify nonprofits around the world, creating a central directory of nonprofits. They also aim to connect each nonprofit with the necessary resources, such as connecting them with donors or setting up crowdfunding options to help the nonprofit succeed.",
        clientLink: "https://www.globalgiving.org/",
        problem:
          "Currently, GlobalGiving connects with organizations based in the US along with some nonprofits in other countries. However, the process of finding and applying to GlobalGiving remains significantly easier within the United States. In certain countries, factors including lack of internet connectivity and lack of access to documents required by GlobalGiving has led to slower onboarding and discovery of the organization.",
        problemImagePath: "/static/images/projects/gg/gg-cover.jpg",
        solution: (
          <>
            Come out to our{" "}
            <a href="https://www.facebook.com/events/762781120723120/">
              {" "}
              Product Showcase{" "}
            </a>{" "}
            event to see our team&#39;s solution and live demo of the final
            product!
            <br />
            <br /> Event Details: <br /> Sunday, Dec. 9 <br /> 5PM-6PM <br />
            ECEB 2013
          </>
        ),
        solutionImagePath: "/static/images/projects/question.jpg",
        features: [
          {
            title: "Database",
            detail:
              "Choose ten websites with directories of nonprofits and scrape each individual one and add them to the database. Data includes the organization’s name, country of registration, registration numbers, website url, and email."
          },
          {
            title: "Command Line Tool",
            detail:
              "Allows user to see all the available scripts, run them, and submit the entries to the global giving database using the organization parser"
          }
        ],
        quote: null,
        quoteSource: null,
        quoteSourceTitle: null,
        githubLink: "https://github.com/hack4impact-uiuc/globalgiving-tool",
        team: {
          type: "pic",
          detail: [
            {
              name: "Aria Malkani",
              role: "Tech Lead"
            },
            {
              name: "Roy Chiu",
              role: "Tech Lead"
            },
            {
              name: "Skyler Shi",
              role: "Software Developer"
            },
            {
              name: "Alan Fang",
              role: "Software Developer"
            },
            {
              name: "Pavani Malli",
              role: "Software Developer"
            },
            {
              name: "Aryn Harmon",
              role: "Software Developer"
            },
            {
              name: "Alan Ren",
              role: "Software Developer"
            }
          ]
        }
      }
    ]
  },
  {
    semester: "Fall 2017 & Spring 2018",
    projects: [
      {
        name: "Love Without Boundaries",
        id: "lwb",
        detail:
          "How might we facilitate and improve the learning of Cambodian students preparing for the English Exam?",
        coverImagePath: "/static/images/projects/lwb/lwb-cover.jpg",
        clientDetail:
          "Love Without Boundaries (LWB) is an international NPO with the mission of serving vulnerable children in underserved communities. Through their services including nutrition programs, summer camps, and healing homes, LWB is able to target education, nutrition, medical care, and foster care. LWB recently registered as a NGO in China’s national registry. Other areas they serve include Cambodia, India, and Uganda.",
        clientLink: "https://www.lovewithoutboundaries.com/",
        problem:
          "Recently, the Cambodian Ministry of Education implemented a written English component on the college entrance exams, requiring English competency in order to be admitted to university for the following term. Currently students and tutors can only DM only group posts without showing edits and are not able to tutor in real time.",
        problemImagePath: "/static/images/projects/lwb/lwb-problem.jpg",
        solution:
          "We worked with LWB to create an application that tracks the progress of students and their interactions with tutors.This platform allows students to access standardized lessons and work with teachers on individual worksheets and lesson notes in real - time through google docs.Admins can manage all the students and teachers through the platform while keeping track of the student progress.",
        solutionImagePath: "/static/images/projects/lwb/lwb-sol.jpg",
        features: null,
        techStack: ["react", "relay", "mongodb", "nodejs", "graphql"],
        quote:
          "The software is transformative. To be able to bring English language competency and ability to pass the college entrance exams to these students in an extremely impoverished and vulnerable region literally transforms futures . These students now can have options and select a career where they can think about what they want to do in life and contribute to the economy. It opens the door to a new future.",
        quoteSource: "Kelly Wolfe",
        quoteSourceTitle:
          "Love Without Boundaries Managing Director of Strategic Partnerships",
        githubLink:
          "https://github.com/hack4impact-uiuc/love-without-boundaries",
        projectLink: "http://cambodia.lovewithoutboundaries.org",
        team: {
          type: "no-pic",
          detail: {
            pm: "Timothy Ko",
            tl: "Aria Malkani",
            swe: [
              "Shreyas Mohan",
              "Hana Riwani",
              "Alan Ren",
              "Michael Chen",
              "Teja Kotha"
            ]
          }
        }
      },
      {
        name: "Cut to the Case",
        id: "c2tc-1",
        detail:
          "How might we allow sexual assault victims to have more control over the reporting process?",
        coverImagePath: "/static/images/projects/c2tc-1/c2tc-1-cover.jpg",
        clientDetail:
          "Cut to the Case (CTTC) is a nonprofit organization started by two UIUC Engineering students who met through a nonprofit startup aimed at increasing interest in STEM among young girls called MakerGirl. After getting accepted into iVenture Accelerator and doing summer research, Premika and Kendall decided to tackle the issue of sexual assault. CTTC’s goal is to increase reporting and eventually increase prosecution through a rape kit tracking system. Currently Premika and Kendall are working on customer research",
        clientLink:
          "http://iventure.illinois.edu/index.php/portfolio/wanderweb/",
        problem:
          "While there are many problems that remain with aiding victims in the overall process after an initial report of the sexual assault, close to two-thirds of these victims never report the crime at all in the first place. This can prevent the victims from getting help that they want or need, while also leaving the perpetrators to remain free and possibly commit another crime with the recidivism rate around 35%.",
        problemImagePath: "/static/images/projects/c2tc-1/c2tc-1-problem.jpg",
        solution:
          "We worked with Cut to the Case to create an anonymous web-based platform that provides victim with control over the reporting process. A matching status was incorporated to offer more support for victims and show the strength in numbers. Both witnesses and victims can log-in and fill out multiple reports with the ability to take a break during the reporting process and continue later.",
        solutionImagePath: "/static/images/projects/c2tc-1/c2tc-1-sol.jpg",
        features: null,
        techStack: ["react", "redux", "flask", "postgres", "redis"],
        quote:
          "We talked to a couple of people about developing about Cut to the Case, but a lot of them didn’t have the same passion that Hack4Impact had for the project. Hack4Impact had enthusiasm for what we were doing. Alex’s team brought up great points like what we would do if someone who’s reporting is underage. They were really receptive to what we said and had a good grasp on the issue.",
        quoteSource: "Premika Pandian",
        quoteSourceTitle: "Cut to the Case Co-Founder and CTO",
        githubLink: null,
        team: {
          type: "no-pic",
          detail: {
            pm: "Alex Wu",
            tl: "Jeff Delonge",
            swe: [
              "Helena Chi",
              "Melody Felix",
              "Anooj Lal",
              "Pavani Malli",
              "Karthik Shankar",
              "Skyler Shi"
            ]
          }
        }
      }
    ]
  }
];
