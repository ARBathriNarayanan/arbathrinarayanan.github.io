// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bathriwrites",
          title: "BathriWrites",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collections of projects done by me",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "My Github UserID and repositories. All my programs used for various purposes can be accessed here",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "post-the-gopuram",
        
          title: "The Gopuram",
        
        description: "A poem I wrote about my lost heirloom.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/giscus-comments/";
          
        },
      },{id: "books-the-india-way",
          title: 'The India Way',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/india_way/";
            },},{id: "books-mrs-funnybones",
          title: 'Mrs Funnybones',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mrs_funnybones/";
            },},{id: "books-the-immortals-of-meluha",
          title: 'The Immortals of Meluha',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/immortals_of_meluha/";
            },},{id: "projects-exploring-superconducting-quantum-circuits",
          title: 'Exploring Superconducting Quantum Circuits',
          description: "Done in IISc Bengaluru",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-the-current-mirror-qubit",
          title: 'The Current Mirror Qubit',
          description: "Done in CEBS Mumbai",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-superconducting-qubits-and-analogue-gravity",
          title: 'Superconducting Qubits and Analogue Gravity',
          description: "Done in CEBS Mumbai",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-aspects-of-quantum-carnot-engine",
          title: 'Aspects of Quantum Carnot Engine',
          description: "Done in HRI Prayagraj under Indian Academy of Sciences-Summer Research Fellowship Program",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-solar-structure-without-computers",
          title: 'Solar structure without computers',
          description: "Done with Khushi Raghavendra (IISER TVM) and Spoorthi Syamaprasad (IISER Kolkata)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/A%20R%20Bathri%20Narayanan%20CV.pdf", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/835063204937072660", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%62%61%74%68%72%69.%6E%61%72%61%79%61%6E%61%6E@%63%62%73.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ARBathriNarayanan", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/bathri2003", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/a-r-bathri-narayanan-679405179", "_blank");
        },
      },{
        id: 'social-quora',
        title: 'Quora',
        section: 'Socials',
        handler: () => {
          window.open("https://www.quora.com/profile/A-R-Bathri-Narayanan", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
