const quotesArray = [
  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    name: "Marilyn Monroe ",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    name: " Elbert Hubbard ",
  },
  {
    quote: "We accept the love we think we deserve. ",
    name: "Stephen Chbosky",
  },
  {
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    name: "Albert Einstein",
  },
];

const generateQuoteButton = document.querySelector("button");
const quoteContainer = document.querySelector(".quote");
const authorContainer = document.querySelector(".author");
let activeQuote = null;

const generateQuote = () => {
  const filteredQuotes = quotesArray.filter((quote) => {
    return activeQuote !== quote;
  });
  const randomIndexQuote = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndexQuote].quote;
  activeQuote = filteredQuotes[randomIndexQuote];
  quoteContainer.innerHTML = `<i class="fas fa-quote-left"></i> ${randomQuote}`;

  randomAuthor = filteredQuotes[randomIndexQuote].name;
  authorContainer.textContent = randomAuthor;
};

generateQuoteButton.addEventListener("click", generateQuote);
