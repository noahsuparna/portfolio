var links = new Array();
links[0] = "https://noahsuparna.ch/posters/index.html";
links[1] = "https://noahsuparna.ch/a-book-by-books/index.html";
links[2] = "https://noahsuparna.ch/jardin-de-sculptures/index.html";
links[3] = "https://noahsuparna.ch/zeitung/index.html";
links[4] = "https://noahsuparna.ch/poscards/index.html";
links[5] = "https://noahsuparna.ch/bagong/index.html";
links[6] = "https://noahsuparna.ch/phone/index.html";
links[7] = "https://noahsuparna.ch/gletscher/index.html";



function randomSite() {
  var i = Math.floor(Math.random() * links.length);
  parent.location = links[i];
  return false;
}