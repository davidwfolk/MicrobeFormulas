
function phase1() {
  let p1pic = "../assets/img/product-phase-1.png";
  let img = document.getElementById('phasepic')
  img.src = p1pic.replace('90x90', '225x225');
  img.style.display = "block";

  document.getElementById("ci").className = "phase-click";
  document.getElementById("omh").className = "";
  document.getElementById("iss").className = "";
  document.getElementById("md").className = "";


  let phl = document.getElementById("phasehl");
  let psub =  document.getElementById("phasesub");
  let ptext = document.getElementById("phasetext");
  phl.innerHTML = "Phase 1";
  psub.innerHTML = "Foundational Protocol";
  ptext.innerHTML = "No matter what youve been diagnosed with, the components of this phase are foundational to your healing journey.";

}

function phase2() {
  let p2pic = "../assets/img/product-phase-2.png";
  let img = document.getElementById('phasepic')
  img.src = p2pic.replace('90x90', '225x225');
  img.style.display = "block";

  document.getElementById("ci").className = "";
  document.getElementById("omh").className = "phase-click";
  document.getElementById("iss").className = "";
  document.getElementById("md").className = "";


  let phl = document.getElementById("phasehl");
  let psub =  document.getElementById("phasesub");
  let ptext = document.getElementById("phasetext");
  phl.innerHTML = "Phase 2";
  psub.innerHTML = "Gut & Immune Support";
  ptext.innerHTML = "Building on the detox traction you gained in Phase 1, it’s time to start running any unwanted guests out of town. Phase 2 focuses on removing pathogens and deep-rooted toxins that could be holding you back from true health.";
}

function phase3() {
  let p3pic = "../assets/img/product-phase-3.png";
  let img = document.getElementById('phasepic')
  img.src = p3pic.replace('90x90', '225x225');
  img.style.display = "block";

  document.getElementById("ci").className = "";
  document.getElementById("omh").className = "";
  document.getElementById("iss").className = "phase-click";
  document.getElementById("md").className = "";

  let phl = document.getElementById("phasehl");
  let psub =  document.getElementById("phasesub");
  let ptext = document.getElementById("phasetext");  
  phl.innerHTML = "Phase 3";
  psub.innerHTML = "Whole Body Immune Support";
  ptext.innerHTML = "Now, it’s time to build on the progress you’ve made and achieve even greater results. Continue gut cleansing and clear pathogens and toxins throughout your body to prepare for deeper detox in Phase 4.";
}

function phase4() {
  let p4pic = "../assets/img/product-phase-4.png";
  let img = document.getElementById('phasepic')
  img.src = p4pic.replace('90x90', '225x225');
  img.style.display = "block";

  document.getElementById("ci").className = "";
  document.getElementById("omh").className = "";
  document.getElementById("iss").className = "";
  document.getElementById("md").className = "phase-click";
  
  let phl = document.getElementById("phasehl");
  let psub =  document.getElementById("phasesub");
  let ptext = document.getElementById("phasetext");
  phl.innerHTML = "Phase 4";
  psub.innerHTML = "Mold Detox";
  ptext.innerHTML = "In this phase, you’ll do a thorough cleanup of heavy metals like mercury, lead, arsenic, and cadmium. These can build up in your body over time. You’ll bind and remove these toxins from your tissues, brain, and other organs to restore your natural state of health.";
}