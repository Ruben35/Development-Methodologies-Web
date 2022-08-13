<a href="https://ruben35.github.io/Development-Methodologies-Web/">

  ![Hero GitHub](https://user-images.githubusercontent.com/30848819/184420899-ec26f2fd-c305-4dd0-a609-779fa30a9a50.svg)

</a>

<h3 align="center">A digital resource 🌐 to learn about them and how to apply them!🧩</h3>

<div align="center">

[![Gastby](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/)

</div>

<div align="center">

[![DeployedOn](https://badgen.net/badge/Deployed%20On/GitHub%20Pages/blue?icon=github)](https://pages.github.com/)
[![WebsiteUp](https://img.shields.io/website.svg?down_color=red&down_message=down&up_color=green&up_message=up&url=https%3A%2F%2Fruben35.github.io%2FDevelopment-Methodologies-Web%2F)](https://ruben35.github.io/Development-Methodologies-Web/)

</div>

<h2>Contents 📑</h3>

- [Brief 🗒️](#brief-️)
  - [What is "Metodologías de Desarrollo de Proyectos"? 🌐](#what-is-metodologías-de-desarrollo-de-proyectos-)
- [Product Design 🧩](#product-design-)
- [Development 🛠️](#development-️)
  - [Structure of the project ⚙️](#structure-of-the-project-️)
  - [Data of the project 📊](#data-of-the-project-)
  - [Special Features ✨](#special-features-)
- [Installation 💻](#installation-)
- [Deployment 🚀](#deployment-)
- [Contribute 🎈](#contribute-)
- [Authors and Credits 📖](#authors-and-credits-)

## Brief 🗒️

### What is "Metodologías de Desarrollo de Proyectos"? 🌐

This is a **web page** 🌐 that includes information of various technology project development methodologies 📊.

In it are the famous approaches (**Traditional** and **Agile**) and their main methodologies are exposed.

Its functionality, advantages, components or stages are explained for each methodology and, above all, it is about explaining **what type of projects are adapted to each one** for greater feasibility.

The raison d'être of this project is that people who are in the process of starting a technology project have an **easily accessible site** that concentrates various options for methodologies and makes it **easier to choose** one of them.

<div align="center">

[![Visit Website](https://user-images.githubusercontent.com/30848819/184499201-099b4203-8653-4a6f-a31a-a66dab47ea4c.svg)](https://ruben35.github.io/Development-Methodologies-Web/)

</div>

## Product Design 🧩 

This project was developed with two **principles** in mind:
- **Accessibiliy:** The web must be usable for anybody and must be *perceptible*, *operable*, *understandable* and *robust*.
- **Consistent:** The web must have the same goal on all of his sections and speak the same way (both visually and written).
   
Some important **foundations** that are important to remark are:
- **Typography:** The web uses the popular font **"Poppins"** of Google Fonts in three different weights (regular, bold and extrabold) used for headings `h1,h2,h3`, label's text and normal text `p`.
- **Colors:** The web uses a yellow color palette (as brand color) and variations of white for background (in two levels) and variations of black for the text.
- **Voice and Tone:** The web uses a neutral tone in spanish and is user centered. It is allowed to use emojis in catch phrases and descriptive paragraphs.
- **Layout:** The desing is **Mobile First** because this web is oritend to be used as a quick tool for the people so it must have the info distributed with margin and padding with enough size to focus readers. 

This foundations can be accesible on the [🧩UI Kit](https://www.figma.com/file/xCcXr7QB0ToLkBs1AKOX5N/Project-Methodologies?node-id=16%3A197) page on the Figma Project.

For the UX design it was developed and prototyped a [📝WireFrame Mobile](https://www.figma.com/file/xCcXr7QB0ToLkBs1AKOX5N/Project-Methodologies?node-id=0%3A1) and subsequently for the UI were designed some atoms and components that were placed on the Hi Fidelity designs for [📱Mobile](https://www.figma.com/file/xCcXr7QB0ToLkBs1AKOX5N/Project-Methodologies?node-id=22%3A145), [📳Tablet](https://www.figma.com/file/xCcXr7QB0ToLkBs1AKOX5N/Project-Methodologies?node-id=39%3A327) and [🖥️Desktop](https://www.figma.com/file/xCcXr7QB0ToLkBs1AKOX5N/Project-Methodologies?node-id=68%3A688).

<div align="center">

  [![Open Figma](https://user-images.githubusercontent.com/30848819/184499203-9bef0687-5a4f-45e2-8cd5-74973b0e9984.svg)](https://www.figma.com/file/xCcXr7QB0ToLkBs1AKOX5N/Project-Methodologies)
  
</div>

## Development 🛠️

This site was developed with [Gatsby](https://www.gatsbyjs.com/docs) that is a React-based open-source framework for creating websites. The advantage of using this framework mainly is beacause of its speed on compiling and building, the generation of static sites (that loads faster on the browsers) and the easy way to add SEO on the pages. 

Another reason why this page uses [Gatsby](https://www.gatsbyjs.com/docs) its because of the large number of plugins it offers, specially this ones used here:
- `gatsby-plugin-image` for responsive images. 
- `gatsby-plugin-manifest` and `gatsby-plugin-offline` for adding a manifest and create a service worker for PWA.
- `gatsby-transformer-json` to parse JSON strings into JavaScript objects that can be queried with graphql.

### Structure of the project ⚙️

The site has three main pages:
- `Home/Index` - The welcome to the site.
- `Metodologias` - Page where all the methodologies are listed grouped by type (Traditional/Agil).
- `NotFound/404` - Page where the user is redirected when the page typed on the address bar doesn't exist on the site.

And one template `IndividualMethodology` for creating pages dynamically with [gatsby-node.js](/gatsby-node.js)

### Data of the project 📊

The data of the methodologies are in two JSON located on `/src/assets/data` named [`Agil.json`](/src/assets/data/Agil.json) and [`Traditional.json`](src/assets/data/Traditional.json) that have the following structure:
```json
[
  {
    "title": "NameOfMethodology",
    "imagePath": "images/Methodologies/Agile/NameOfImage.extension",
    "content":[
      {
        "type": "ImageConcept",
				"concept": [
					"paragraph",
					...
				]
      },
      {
        "type": "section",
        "header": "Heading Text",
		    "bodyCopy": "Paragraph below heading",
				"content":[
          {
            "type":"list | numberList | p",
            "list | p ": ["listItem | paragraph", ...]
          },
          ...
        ]
      },
      ...
      ,
      {
        "type": "specialSection | references",
        "content": ["text", ...]
      }
    ]
  },
  ...
]
```
**Note:** Only the main content of type `section` can be used multiple times while `ImageConcept`, `specialSection` and `references` only ones and with preference in that order (the `section` between `ImageConcept` and `specialSection`).

The images of the methodologies are on `src/assets/images/Methodologies/` grouped by type `Traditional` and `Agile`.

### Special Features ✨

- The web has a **responsive design** allowing a correct visualization on any kind of device.
- The web has on all the pages **metatags** for improving **SEO** and, when sharing in social media (like Twitter or Facebook), a previsualization with image and some data of the current page.
-  The web is a [PWA](https://web.dev/i18n/es/progressive-web-apps/), allowing to cache the pages (with their resources) in order to **have them offline** and the posibility of **installing the webapp on the device**.

## Installation 💻

To use this project and develop on it you need to:

1. **Clone repository** 🖇️
```
https://github.com/Ruben35/Development-Methodologies-Web.git
```
2. **Change directory & Install dependencies** ⬇️
```
cd .\Development-Methodologies-Web\
npm install
```
3. **Start developing** 👾
```
npm run dev
```
4. **Build website** 🛠️
```
npm run build
```
**Note:** This will generate the static assets on the `public` folder on the root.

## Deployment 🚀

The website in this repository was deployed using [GitHub Pages](https://pages.github.com/) and in the [package.json](package.json) there is a special command that clean, build and deploy on `gh-pages` branch:
```
npm run deploy
```
Also, there is a special GitHub Action called [GitHub Pages Deploy](.github/workflows/webDeploy.yml) that deploys also on `gh-pages` when there is a *push* on  `main` branch.

## Contribute 🎈

If you want to contribute on this project you can:

- **Clone** this repository, **install it** as in the [installation section](#installation-💻) and **make a pull request** on `dev` branch with your changes in order to evaluate them.
- **Add** methodologies info in two ways:
  - **Opening a issue** with the info and image ([formated as JSON](#data-of-the-project-📊) or in plain text).
  - **Cloning** and adding the methodology by yourself and **opening a pull request** on `dev` branch.

## Authors and Credits 📖

- Designed and developed by [@Ruben35](https://github.com/Ruben35).
- Info researched by Oscar Gerardo Trejo Rivera.
- Owned by Verónica Agustín Domínguez (Teacher at [ESCOM-IPN](https://www.escom.ipn.mx/)).
