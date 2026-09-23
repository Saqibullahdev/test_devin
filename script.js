(function () {
  "use strict";

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  var KICKOFF = new Date("2027-03-14T15:00:00+05:00").getTime();
  var countdown = document.getElementById("countdown");
  var units = {
    days: countdown.querySelector('[data-unit="days"]'),
    hours: countdown.querySelector('[data-unit="hours"]'),
    minutes: countdown.querySelector('[data-unit="minutes"]'),
    seconds: countdown.querySelector('[data-unit="seconds"]')
  };

  function pad(value) {
    return value < 10 ? "0" + value : String(value);
  }

  function tick() {
    var remaining = Math.max(0, KICKOFF - Date.now());
    var totalSeconds = Math.floor(remaining / 1000);
    units.days.textContent = String(Math.floor(totalSeconds / 86400));
    units.hours.textContent = pad(Math.floor(totalSeconds / 3600) % 24);
    units.minutes.textContent = pad(Math.floor(totalSeconds / 60) % 60);
    units.seconds.textContent = pad(totalSeconds % 60);
  }

  tick();
  setInterval(tick, 1000);

  var form = document.getElementById("registerForm");
  var status = document.getElementById("formStatus");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var required = form.querySelectorAll("[required]");
    var firstInvalid = null;

    Array.prototype.forEach.call(required, function (field) {
      var valid = field.checkValidity() && field.value.trim() !== "";
      field.classList.toggle("invalid", !valid);
      if (!valid && !firstInvalid) {
        firstInvalid = field;
      }
    });

    if (firstInvalid) {
      status.textContent = "Please complete the highlighted fields.";
      status.className = "form-status error";
      firstInvalid.focus();
      return;
    }

    var team = form.elements.team.value.trim();
    status.textContent =
      "Thanks! " + team + " has been added to the waiting list — the committee will confirm within 48 hours.";
    status.className = "form-status ok";
    form.reset();
  });
})();
