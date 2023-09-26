//Get Elements
const button = document.getElementById('btn');
const displayQuote = document.getElementById('text');

async function randomQuote() {
  //fetch API
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    //after the APi has been fetched
    return data.content;
    // To handle error
  } catch (error) {
    console.error('Unable to fetch quote', error);
    return "Error occured because you don't have data 😂😂";
  }
  console.log(error);
}


// On button clicks...
button.addEventListener('click', async () => {
    // wait for randomQuote() to fetch API
    const text = await randomQuote();
// To display quotes in the paragraph
    displayQuote.textContent = text;
});
