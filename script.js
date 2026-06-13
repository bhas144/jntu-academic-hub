function addSubject() {
  let subjects = document.getElementById("subjects");

  let div = document.createElement("div");

  div.innerHTML = `
    <input type="text" placeholder="Subject Name">
    <input type="number" placeholder="Credits" class="credits">

    <select class="grade">
      <option value="10">O</option>
      <option value="9">A+</option>
      <option value="8">A</option>
      <option value="7">B+</option>
      <option value="6">B</option>
      <option value="5">C</option>
      <option value="0">F</option>
    </select>
  `;

  subjects.appendChild(div);
}

function calculateSGPA() {
  let credits = document.querySelectorAll(".credits");
  let grades = document.querySelectorAll(".grade");

  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < credits.length; i++) {
    let credit = Number(credits[i].value);
    let grade = Number(grades[i].value);

    totalCredits += credit;
    totalPoints += credit * grade;
  }

  if (totalCredits === 0) {
    document.getElementById("result").innerText = "Please enter credits";
    return;
  }

  let sgpa = totalPoints / totalCredits;

  document.getElementById("result").innerHTML =
    `Total Credits: ${totalCredits}<br>SGPA: ${sgpa.toFixed(2)}`;
}
function addSemester() {
  let semesters = document.getElementById("semesters");

  let div = document.createElement("div");

  div.innerHTML = `
    <input type="number" placeholder="Semester SGPA" class="sgpa">
    <input type="number" placeholder="Semester Credits" class="semCredits">
  `;

  semesters.appendChild(div);
}

function calculateCGPA() {
  let sgpas = document.querySelectorAll(".sgpa");
  let semCredits = document.querySelectorAll(".semCredits");

  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < sgpas.length; i++) {
    let sgpa = Number(sgpas[i].value);
    let credits = Number(semCredits[i].value);

    totalCredits += credits;
    totalPoints += sgpa * credits;
  }

  if (totalCredits === 0) {
    document.getElementById("cgpaResult").innerText =
      "Please enter semester credits";
    return;
  }

  let cgpa = totalPoints / totalCredits;

  document.getElementById("cgpaResult").innerHTML =
    `Total Credits: ${totalCredits}<br>CGPA: ${cgpa.toFixed(2)}`;
}
function calculatePercentage() {
  let cgpa = Number(document.getElementById("percentageCgpa").value);

  if (cgpa <= 0 || cgpa > 10) {
    document.getElementById("percentageResult").innerText =
      "Please enter a valid CGPA between 1 and 10";
    return;
  }

  let percentage = (cgpa - 0.5) * 10;

  document.getElementById("percentageResult").innerHTML =
    `Percentage: ${percentage.toFixed(2)}%`;
}