const handleDashboard = () => {
 document.getElementById("home").style.display = "block";
 document.getElementById("pendidikan").style.display = "none";
 document.getElementById("work").style.display = "none";
 document.getElementById("skill").style.display = "none";
document.getElementById("pencapaian").style.display = "none";
};

const handlePendidikan = () => {
 document.getElementById("home").style.display = "none";
 document.getElementById("pendidikan").style.display = "block";
 document.getElementById("work").style.display = "none";
 document.getElementById("skill").style.display = "none";
 document.getElementById("pencapaian").style.display = "none";
};

const handleTimeline = () => {
 document.getElementById("home").style.display = "none";
 document.getElementById("pendidikan").style.display = "none";
 document.getElementById("work").style.display = "block";
 document.getElementById("skill").style.display = "none";
 document.getElementById("pencapaian").style.display = "none";
};

const handleSkill = () => {
 document.getElementById("home").style.display = "none";
 document.getElementById("pendidikan").style.display = "none";
 document.getElementById("work").style.display = "none";
 document.getElementById("skill").style.display = "block";
 document.getElementById("pencapaian").style.display = "none";
};

const handleAward = () => {
 document.getElementById("home").style.display = "none";
 document.getElementById("pendidikan").style.display = "none";
 document.getElementById("work").style.display = "none";
 document.getElementById("skill").style.display = "none";
 document.getElementById("pencapaian").style.display = "block";
};


document.getElementById("home-button").addEventListener("click", handleDashboard);
document.getElementById("timeline-button").addEventListener("click", handleTimeline);
document
 .getElementById("education-button")
 .addEventListener("click", handlePendidikan);
document.getElementById("skill-button").addEventListener("click", handleSkill);
document.getElementById("award-button").addEventListener("click", handleAward);


console.log("Started");
