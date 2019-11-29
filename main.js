const handleHome = () => {
 document.getElementById("home").style.display = "block";
 document.getElementById("about").style.display = "none";
 document.getElementById("profile").style.display = "none";
};

const handleAbout = () => {
 document.getElementById("home").style.display = "none";
 document.getElementById("about").style.display = "block";
 document.getElementById("profile").style.display = "none";
};

const handleProfile = () => {
 document.getElementById("home").style.display = "none";
 document.getElementById("about").style.display = "none";
 document.getElementById("profile").style.display = "block";
};

document.getElementById("home-button").addEventListener("click", handleHome);
document.getElementById("about-button").addEventListener("click", handleAbout);
document
 .getElementById("profile-button")
 .addEventListener("click", handleProfile);

console.log("Started");
