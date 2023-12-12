function userQuote() {
  var quote = [
    "A room without books is like a body without a soul.",
    "Be the change that you wish to see in the world.",
    "Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    " To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever",
    "Without music, life would be a mistake.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "It is better to be hated for what you are than to be loved for what you are not.",
    "Home is not where you are born home is where all your attempts to escape cease",
  ];
  var author = [
    "- Marcus Tullius Cicero",
    "- Mahatma Gandhi",
    "- Albert Camus",
    "- Oscar Wilde",
    "- Johann Wolfgang von Goethe",
    "- Mahatma Gandhi",
    "- Friedrich Nietzsche",
    "- Ralph Waldo Emerson",
    "- Andre Gide",
    "- Naguib Mahfouz",
  ];

  var num = Math.floor(Math.random() * quote.length);

  document.getElementById("hello").innerHTML = quote[num];
  document.getElementById("bye").innerHTML = author[num];
}
