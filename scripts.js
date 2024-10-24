const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
//create a try block to catch the errors and force the inputs
  try {
    //! checks if the values for dividend and divider are falsy (checks if either of these is empty)
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      return;
    }

    //convert the string inputs into numbers
    const dividendNumber = parseFloat(dividend);
    const dividerNumber = parseFloat(divider);

    //check whether or not the inputs are numbers or not using NaN
    if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
      throw new Error("Invalid input: non-numeric value.")
    }

    //check if they try and divide by 0
    if (dividerNumber === 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again."
      //create a new error and error stack for debuggging
      console.error(new Error("Division by Zero error"), new Error().stack);
      return;
    }

    //perform the division calculation resulting in a whole number
    const wholeNumberResult = Math.floor(dividendNumber / dividerNumber);
    result.innerText = wholeNumberResult;
  //add a catch to handle errors
  } catch (error) {
    document.body.innerHTML = `<div class="critical error">Something critical went wrong. Please reload the page.</div>`;
    console.error(error, error.stack);
  }
  });

