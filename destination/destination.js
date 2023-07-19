// const fs = require("fs");
// const filePath = "data.json";
// const jsonData = fs.readFileSync(filePath, "utf-8");
// const destinations = JSON.parse(jsonData);
// console.log(destinations);

import fs from "fs";

const readDestinations = () => {
  const filePath = "../data.json";
  const data = fs.readFileSync(filePath, "utf-8");
  const destinations = JSON.parse(data);
  console.log(destinations);
};
readDestinations();

// // Function to update the page content based on the selected destination
// function updateDestinationContent(destination) {
//   document.getElementById("destinationName").textContent = destination.name;
//   document.getElementById("destinationDescription").textContent =
//     destination.description;
//   document.getElementById("destinationDistance").textContent =
//     destination.distance;
//   document.getElementById("destinationTravelTime").textContent =
//     destination.travel;

//   // Update the image
//   const destinationImage = document.getElementById("destinationImage");
//   destinationImage.src = destination.images.webp;
//   destinationImage.alt = "Image of " + destination.name;
// }

// // Function to handle the click event and update the content
// function handleDestinationClick(destinationIndex) {
//   const selectedDestination = destinations.destinations[destinationIndex];
//   updateDestinationContent(selectedDestination);

//   // Remove the 'current_nav' class from all links
//   const destinationLinks = document.querySelectorAll(
//     ".destination_navigations a"
//   );
//   destinationLinks.forEach((link) => {
//     link.classList.remove("current_nav");
//   });

//   // Add the 'current_nav' class to the clicked link
//   const clickedLink = destinationLinks[destinationIndex];
//   clickedLink.classList.add("current_nav");
// }

// // Load initial destination data (Moon) when the page is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   const initialDestinationIndex = 0; // Index of the "Moon" destination in the destinations array
//   const initialDestination = destinations.destinations[initialDestinationIndex];
//   updateDestinationContent(initialDestination);

//   const destinationLinks = document.querySelectorAll(
//     ".destination_navigations a"
//   );
//   destinationLinks.forEach((link, index) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//       handleDestinationClick(index);
//     });
//   });
// });
