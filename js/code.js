let input1 = document.querySelector("[name='username']");
let input2 = document.querySelector("[name='number']");
let input3 = document.querySelector("[name='month']");
let input4 = document.querySelector("[name='year']");
let input5 = document.querySelector("[name='cvc']");
let arry = [input1, input2, input3, input4, input5];

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = input1.value.trim();
  const serialnumValue = input2.value.trim();
  const monthValue = input3.value.trim();
  const yearValue = input4.value.trim();
  const cvcValue = input5.value.trim();

  if (
    usernameValue === "" ||
    /[a-z]{3,8}\s[a-z]{3,8}/gi.test(usernameValue) === false
  ) {
    setErrorFor(input1, "Wron format, words only", input1.classList.item("0"));
    if (usernameValue === "") {
      document.querySelector(".name").textContent =
        document.querySelector(".name").textContent;
    } else {
      document.querySelector(".name").textContent = usernameValue;
    }
  } else {
    setsuccessFor(input1, input1.classList.item("0"));
    if (usernameValue === "") {
      document.querySelector(".name").textContent =
        document.querySelector(".name").textContent;
    } else {
      document.querySelector(".name").textContent = usernameValue;
    }
  }

  if (
    serialnumValue === "" ||
    /\d{4}\s\d{4}\s\d{4}\s\d{4}/gi.test(serialnumValue) === false
  ) {
    setErrorFor(
      input2,
      "Wrong format, numbers only",
      input2.classList.item("0")
    );
    if (serialnumValue === "") {
      document.querySelector(".serial-num").textContent =
        document.querySelector(".serial-num").textContent;
    } else {
      document.querySelector(".serial-num").textContent = serialnumValue;
    }
  } else {
    setsuccessFor(input2, input2.classList.item("0"));
    if (serialnumValue === "") {
      document.querySelector(".serial-num").textContent =
        document.querySelector(".serial-num").textContent;
    } else {
      document.querySelector(".serial-num").textContent = serialnumValue;
    }
  }

  if (monthValue === "" || /(0[1-9]|1[012])/gi.test(monthValue) === false) {
    setErrorFor(input3, "Can't be blank", input3.classList.item("0"));
    if (monthValue === "") {
      document.querySelector(".first").textContent =
        document.querySelector(".first").textContent;
    } else {
      document.querySelector(".first").textContent = monthValue;
    }
  } else {
    setsuccessFor(input3, input3.classList.item("0"));
    if (monthValue === "") {
      document.querySelector(".first").textContent =
        document.querySelector(".first").textContent;
    } else {
      document.querySelector(".first").textContent = monthValue;
    }
  }

  if (yearValue === "" || /[1-9]{1}[0-9]{1}/gi.test(yearValue) === false) {
    setErrorFor(input4, "Can't be blank", input4.classList.item("0"));
    if (yearValue === "") {
      document.querySelector(".second").textContent =
        document.querySelector(".second").textContent;
    } else {
      document.querySelector(".second").textContent = yearValue;
    }
  } else {
    setsuccessFor(input4, input4.classList.item("0"));
    if (yearValue === "") {
      document.querySelector(".second").textContent =
        document.querySelector(".second").textContent;
    } else {
      document.querySelector(".second").textContent = yearValue;
    }
  }

  if (cvcValue === "" || /([0-9]{1}){3}/gi.test(cvcValue) === false) {
    setErrorFor(input5, "Can't be blank", input5.classList.item("0"));
    if (cvcValue === "") {
      document.querySelector(".input-five").textContent =
        document.querySelector(".input-five").textContent;
    } else {
      document.querySelector(".third").textContent = cvcValue;
    }
  } else {
    setsuccessFor(input5, input5.classList.item("0"));
    if (cvcValue === "") {
      document.querySelector(".input-five").textContent =
        document.querySelector(".input-five").textContent;
    } else {
      document.querySelector(".third").textContent = cvcValue;
    }
  }

  if (
    !(
      usernameValue === "" ||
      /[a-z]{3,8}\s[a-z]{3,8}/gi.test(usernameValue) === false
    ) &&
    !(
      serialnumValue === "" ||
      /\d{4}\s\d{4}\s\d{4}\s\d{4}/gi.test(serialnumValue) === false
    ) &&
    !(monthValue === "" || /(0[1-9]|1[012])/gi.test(monthValue) === false) &&
    !(yearValue === "" || /[1-9]{1}[0-9]{1}/gi.test(yearValue) === false) &&
    !(cvcValue === "" || /([0-9]{1}){3}/gi.test(cvcValue) === false)
  ) {
    document.getElementById("form").style.display = "none";
    document.querySelector(".complete-state").style.display = "block";
  }
  document.querySelector(".continue").addEventListener("click", function () {
    document.getElementById("form").style.display = "block";
    document.querySelector(".complete-state").style.display = "none";
    input1.value = "";
    input1.style.borderColor = "hsl(270, 3%, 87%)";
    input2.value = "";
    input2.style.borderColor = "hsl(270, 3%, 87%)";
    input3.value = "";
    input3.style.borderColor = "hsl(270, 3%, 87%)";
    input4.value = "";
    input4.style.borderColor = "hsl(270, 3%, 87%)";
    input5.value = "";
    input5.style.borderColor = "hsl(270, 3%, 87%)";
  });
}

function setErrorFor(input, message, class1) {
  const formHolder = input.parentElement;
  const errorDiv = formHolder.querySelector(".errors");
  errorDiv.textContent = message;
  input.className = `${class1} error`;
}

function setsuccessFor(input, class1) {
  input.className = `${class1} success`;
}
