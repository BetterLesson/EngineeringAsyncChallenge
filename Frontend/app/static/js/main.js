var viewCoachesModal = document.getElementById("viewCoachesModal");
var mailingListModal = document.getElementById("mailingListModal");
var viewCoachesBtn = document.getElementById("viewCoaches");
var joinMailingBtn = document.getElementById("joinMailing");

var span = document.getElementsByClassName("close")[0];

viewCoachesBtn.onclick = function() {
  viewCoachesModal.style.display = "block";
}
joinMailingBtn.onclick = function() {
  mailingListModal.style.display = "block";
}

// exit modal
span.onclick = function() {
  viewCoachesModal.style.display = "none";
  mailingListModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    viewCoachesModal.style.display = "none";
    mailingListModal.style.display = "none";
  }
}

// table creation
var coaches = [
  {name: 'Jessica D.',availStart: '11/6/22', industry: 'Professional Services'},
  {name: 'David F.', availStart: '8/5/21', industry: 'Sports/Fitness'},
  {name: 'Keir Y.', availStart:'4/12/22', industry: 'E-Sports'}
];

var newTable = document.createElement("table");
newTable.innerHTML = "<thead><th>Coach Name</th><th>Available Starting</th><th>Industry</th></thead>";
for(coach of coaches){
    var newRow = document.createElement("tr");
    var tdCoach = document.createElement("td");
    var tdAvailStart = document.createElement("td");
    var tdIndustry = document.createElement("td");

    tdCoach.textContent = coach.name;
    tdAvailStart.textContent = coach.availStart;
    tdIndustry.textContent = coach.industry;

    newRow.appendChild(tdCoach);
    newRow.appendChild(tdAvailStart);
    newRow.appendChild(tdIndustry);

    newTable.appendChild(newRow);
}

// populate Industry dropdown
var target = document.getElementById('target');
target.appendChild(newTable);

var select = document.getElementById("industrySelect");
var options = ["E-Sports", "Sports/Fitness", "Professional Services", "Fintech", "Other"];

select.innerHTML = "";
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}
