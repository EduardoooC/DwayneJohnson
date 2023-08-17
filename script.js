const biography = "The Rock, real name Dwayne Douglas Johnson, is a former professional wrestler, actor, producer, and American-Canadian national who also played American football."
 + "On May 2, 1972, he was born in Hayward, California. Before beginning a successful acting career, Dwanye Johnson first rose to fame as a professional wrestler in the WWE." 
 + " In addition to appearing in Jumanji: Welcome to the Jungle, the Fast & Furious series, and other well-known films, he provided the voice of Maui in the Moana movie." 
 + " Dwanye Johnson is well known for his endearing personality, attractive physique, and wide range of acting roles.";

const biographyParagraph = document.getElementById("biography");
biographyParagraph.textContent = biography;

const showMoreButton = document.getElementById("show-more");
showMoreButton.addEventListener("click", () => {
  biographyParagraph.textContent = biography;
});
