let cardName = document.getElementById("card-holder-name");

let cardNameOnCard = document.getElementById("card-name-on-card");

let submitBtn = document.getElementById("submitBtn");

const disableBtn = () => {
  submitBtn.disabled = true;
  submitBtn.style.color = "var(--Dark-grayish-violet)";
};

const enableBtn = () => {
  submitBtn.disabled = false;
  submitBtn.style.color = "var(--Light-grayish-violet)";
};

function cc_format(value) {
  var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var matches = v.match(/\d{4,16}/g);
  var match = (matches && matches[0]) || "";
  var parts = [];

  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(" ");
  } else {
    return value;
  }
}

disableBtn();

cardName.addEventListener("keyup", () => {
  let isName = /^[a-zA-Z]+$/.test(cardName.value);
  if (!isName) {
    disableBtn();
    document.querySelectorAll(".error-text")[0].classList.remove("hidden");
  }
  if (isName) {
    cardNameOnCard.innerHTML = cardName.value;
    cardName.style.borderColor = "var(--active-border)";
    document.querySelectorAll(".error-text")[1].classList.add("hidden");
    document.querySelectorAll(".error-text")[0].classList.add("hidden");
    enableBtn();
  } else if (!isName && cardName.value.length > 0) {
    cardName.style.borderColor = "red";
  } else if (cardName.value.length === 0) {
    cardName.style.removeProperty("border");
    document.querySelectorAll(".error-text")[0].classList.add("hidden");
    document.querySelectorAll(".error-text")[1].classList.add("hidden");
    disableBtn();
  }
});

let cardNumber = document.getElementById("card-number");
let cardNumberOnCard = document.getElementById("card-number-on-card");

cardNumber.addEventListener("keyup", () => {
  let isnum = /^\d+$/.test(Number(cardNumber.value));

  if (!isnum) {
    cardNumber.style.borderColor = "red";
    document.querySelectorAll(".error-text")[3].classList.remove("hidden");
    disableBtn();
  } else if (isnum) {
    cardNumberOnCard.innerHTML = cc_format(cardNumber.value);
    cardNumber.style.borderColor = "var(--active-border)";
    document.querySelectorAll(".error-text")[3].classList.add("hidden");
    document.querySelectorAll(".error-text")[2].classList.add("hidden");
    enableBtn();
  }
  if (cardNumber.value.length === 0) {
    cardNumber.style.removeProperty("border");
  }
});

let cardMonth = document.getElementById("card-month");
let cardMonthOnCard = document.getElementById("card-month-on-card");

cardMonth.addEventListener("keyup", () => {
  let isnum = /^\d+$/.test(Number(cardMonth.value));

  if (!isnum || cardMonth.value > 12 || cardMonth.value <= 0) {
    cardMonth.style.borderColor = "red";
  } else if (isnum) {
    cardMonth.style.borderColor = "var(--active-border)";
    cardMonthOnCard.innerHTML = cardMonth.value;
    enableBtn();
    document.querySelectorAll(".error-text")[5].classList.add("hidden");
    document.querySelectorAll(".error-text")[4].classList.add("hidden");
  }

  if (!isnum) {
    document.querySelectorAll(".error-text")[5].classList.remove("hidden");
    disableBtn();
  }
  if (cardMonth.value.length === 0) {
    cardMonth.style.removeProperty("border");
    document.querySelectorAll(".error-text")[5].classList.add("hidden");
    document.querySelectorAll(".error-text")[4].classList.add("hidden");
  }
});

let cardYear = document.getElementById("card-year");
let cardYearOnCard = document.getElementById("card-year-on-card");

cardYear.addEventListener("keyup", () => {
  let isnum = /^\d+$/.test(Number(cardYear.value));

  if (!isnum || cardYear.value < 22 || cardYear.value <= 0) {
    cardYear.style.borderColor = "red";
  } else if (isnum) {
    cardYear.style.borderColor = "var(--active-border)";
    cardYearOnCard.innerHTML = cardYear.value;
    enableBtn();
  }

  if (!isnum) {
    document.querySelectorAll(".error-text")[7].classList.remove("hidden");
    disableBtn();
  }
  if (cardYear.value.length === 0) {
    cardYear.style.removeProperty("border");
    document.querySelectorAll(".error-text")[6].classList.add("hidden");
    document.querySelectorAll(".error-text")[7].classList.add("hidden");
  }
});

let cardCvc = document.getElementById("card-cvc");
let cardCvcOnCard = document.getElementById("cvc-on-card");

cardCvc.addEventListener("keyup", () => {
  let isnum = /^\d+$/.test(Number(cardCvc.value));

  if (!isnum) {
    cardCvc.style.borderColor = "red";
    disableBtn();
    document.querySelectorAll(".error-text")[9].classList.remove("hidden");
  } else if (isnum) {
    cardCvc.style.borderColor = "var(--active-border)";
    cardCvcOnCard.innerHTML = cardCvc.value;
    enableBtn();
    document.querySelectorAll(".error-text")[8].classList.add("hidden");
    document.querySelectorAll(".error-text")[9].classList.add("hidden");
  }
  if (cardCvc.value.length === 0) {
    cardCvc.style.removeProperty("border");
    document.querySelectorAll(".error-text")[8].classList.add("hidden");
    document.querySelectorAll(".error-text")[9].classList.add("hidden");
  }
});

let creditCardForm = document.getElementById("credit-form");
let thankYouDiv = document.getElementById("thank-you-div");
const onSubmit = () => {
  if (cardName.value.length == 0) {
    cardName.style.borderColor = "red";
    document.querySelectorAll(".error-text")[1].classList.remove("hidden");
  }

  if (cardNumber.value.length == 0) {
    cardNumber.style.borderColor = "red";
    document.querySelectorAll(".error-text")[2].classList.remove("hidden");
  }

  if (cardMonth.value.length === 0) {
    cardMonth.style.removeProperty("border");
    document.querySelectorAll(".error-text")[4].classList.remove("hidden");
  }
  if (cardYear.value.length === 0) {
    cardYear.style.removeProperty("border");
    document.querySelectorAll(".error-text")[6].classList.remove("hidden");
  }
  if (cardCvc.value.length === 0) {
    cardCvc.style.removeProperty("border");
    document.querySelectorAll(".error-text")[8].classList.remove("hidden");
  }
  if (
    cardName.value.length == 0 ||
    cardNumber.value.length == 0 ||
    cardMonth.value.length === 0 ||
    cardYear.value.length === 0 ||
    cardCvc.value.length === 0
  ) {
    event.preventDefault();
  } else {
    creditCardForm.classList.add("hidden");
    thankYouDiv.classList.remove("hidden");
  }
};
