const jobs = [
  {
    title: "Delivery Driver",
    company: "DEMO COMPANY",
    country: "Hungary",
    city: "Budapest",
    category: "Driver",
    salary: "Check employer",
    type: "Full-time",
    sponsorship: "Check visa eligibility"
  },
  {
    title: "Warehouse Worker",
    company: "DEMO COMPANY",
    country: "Romania",
    city: "Bucharest",
    category: "Warehouse",
    salary: "Check employer",
    type: "Full-time",
    sponsorship: "Check visa eligibility"
  },
  {
    title: "Factory Worker",
    company: "DEMO COMPANY",
    country: "Serbia",
    city: "Belgrade",
    category: "Factory",
    salary: "Check employer",
    type: "Full-time",
    sponsorship: "Check visa eligibility"
  },
  {
    title: "Hotel Worker",
    company: "DEMO COMPANY",
    country: "Portugal",
    city: "Lisbon",
    category: "Hotel",
    salary: "Check employer",
    type: "Full-time",
    sponsorship: "Check visa eligibility"
  }
];

function displayJobs(list = jobs) {
  const jobList = document.getElementById("jobList");
  const noJobs = document.getElementById("noJobs");

  jobList.innerHTML = "";

  if (list.length === 0) {
    noJobs.style.display = "block";
    return;
  }

  noJobs.style.display = "none";

  list.forEach(job => {
    const card = document.createElement("div");

    card.className = "job-card";

    card.innerHTML = `
      <div class="job-type">${job.category.toUpperCase()} JOB</div>
      <h3>${job.title}</h3>
      <p class="company">${job.company}</p>

      <div class="job-info">
        <span>📍 ${job.city}, ${job.country}</span>
        <span>💼 ${job.type}</span>
        <span>💰 ${job.salary}</span>
      </div>

      <p class="sponsorship">
        ✓ ${job.sponsorship}
      </p>

      <a class="apply" href="#" onclick="demoApply(event)">
        Apply Now
      </a>
    `;

    jobList.appendChild(card);
  });
}

function filterJobs() {
  const search = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const country = document.getElementById("countryFilter").value;

  const filtered = jobs.filter(job => {
    const searchMatch =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.category.toLowerCase().includes(search);

    const countryMatch =
      country === "all" || job.country === country;

    return searchMatch && countryMatch;
  });

  displayJobs(filtered);
}

function categoryFilter(category) {
  const filtered = jobs.filter(
    job => job.category === category
  );

  displayJobs(filtered);

  document.getElementById("jobs").scrollIntoView({
    behavior: "smooth"
  });
}

function visaJobs() {
  displayJobs(jobs);

  document.getElementById("jobs").scrollIntoView({
    behavior: "smooth"
  });
}

function demoApply(event) {
  event.preventDefault();

  alert(
    "This is demo data. An official employer application link will be added after the vacancy is verified."
  );
}

displayJobs();
