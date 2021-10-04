const ageInput = document.getElementById("age");

const heightInput = document.getElementById("height");

const weightInput = document.getElementById("weight");

const submitButton = document.getElementById("submit");

const femaleInput = document.getElementById("female");

const maleInput = document.getElementById("male");

const handleBmiButton = (event) => {
  event.preventDefault();
  const bmiInfo = gatherBmiInfo();
  const bmi = calcBMI(bmiInfo.weight, bmiInfo.height);
  const status = getStatus(bmi, bmiInfo.age, bmiInfo.gender);
  showResult(bmi, status);
};

const gatherBmiInfo = () => {
  const ageInputValue = ageInput.value;

  const heightInputValue = heightInput.value;

  const weightInputValue = weightInput.value;

  return {
    age: ageInputValue,
    weight: weightInputValue,
    height: heightInputValue,
    gender: getGender(),
  };
};

const getFemaleStatus = (bmi, age) => {
  if (age <= 24) {
    if (bmi < 19) {
      return "Underweight";
    } else if (bmi < 25) {
      return "Normal";
    } else if (bmi < 29) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 34) {
    if (bmi < 20) {
      return "Underweight";
    } else if (bmi < 26) {
      return "Normal";
    } else if (bmi < 29) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 44) {
    if (bmi < 21) {
      return "Underweight";
    } else if (bmi < 27) {
      return "Normal";
    } else if (bmi < 31) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 54) {
    if (bmi < 22) {
      return "Underweight";
    } else if (bmi < 28) {
      return "Normal";
    } else if (bmi < 32) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 64) {
    if (bmi < 24) {
      return "Underweight";
    } else if (bmi < 29) {
      return "Normal";
    } else if (bmi < 33) {
      return "Overweigt";
    } else {
      return "Obese";
    }
  } else {
    if (bmi < 25) {
      return "Underweight";
    } else if (bmi < 30) {
      return "Normal";
    } else if (bmi < 34) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
};

const getMaleStatus = (bmi, age) => {
  if (age <= 24) {
    if (bmi < 20) {
      return "Underweight";
    } else if (bmi < 26) {
      return "Normal";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 34) {
    if (bmi < 21) {
      return "Underweight";
    } else if (bmi < 27) {
      return "Normal";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 44) {
    if (bmi < 22) {
      return "Underweight";
    } else if (bmi < 28) {
      return "Normal";
    } else if (bmi < 32) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 54) {
    if (bmi < 23) {
      return "Underweight";
    } else if (bmi < 29) {
      return "Normal";
    } else if (bmi < 33) {
      return "Overweight";
    } else {
      return "Obese";
    }
  } else if (age <= 64) {
    if (bmi < 25) {
      return "Underweight";
    } else if (bmi < 30) {
      return "Normal";
    } else if (bmi < 34) {
      return "Overweigt";
    } else {
      return "Obese";
    }
  } else {
    if (bmi < 26) {
      return "Underweight";
    } else if (bmi < 31) {
      return "Normal";
    } else if (bmi < 35) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
};

const getStatus = (bmi, age, gender) => {
  switch (gender) {
    case "female":
      return getFemaleStatus(bmi, age);
    case "male":
      return getMaleStatus(bmi, age);
  }
};

const getGender = () => {
  if (femaleInput.checked) {
    return "female";
  } else if (maleInput.checked) {
    return "male";
  } else {
    return null;
  }
};

const calcBMI = (weight, height) => {
  return ((weight / (height * height)) * 10000).toFixed(2);
};

const showResult = (bmi, status) => {
  const resultContainer = document.querySelector(".result");
  const spanResultScale = document.createElement("span");
  const spanResultNumber = document.createElement("span");

  spanResultScale.classList.add("result-scale");
  spanResultNumber.classList.add("result-number");

  resultContainer.innerHTML = `<span class="result-scale">${status}</span>
  <span>BMI : <span class="result-number">${bmi}</span></span>`;
};

submitButton.addEventListener("click", handleBmiButton);
