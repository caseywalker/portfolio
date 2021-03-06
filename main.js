// ** Data Arrays ** //

let projects = [
  {
  title: "Cool Project", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
title: "Cool Project", 
screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
available: true,
url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}
]

// ** DOM Print Function ** //

let printToDom = (divId, textToPrint) => {
  let targetedDiv = document.querySelector(divId);
  targetedDiv.innerHTML = textToPrint
};

// ** HTML Builders ** //

let createProjectCards = (taco) => {
  let domString = ''

  for (const elem of taco) {
    if (elem.available) {
    domString += `${elem.title} info coming soon. `
    }
  }
  printToDom('#projectsPage', domString)
};

// ** Initializer ** //

const init = () => {
  createProjectCards(projects)
}

init ();
