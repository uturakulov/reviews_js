const reviews = [
  {
    name: "Jama Tashkentskaya",
    job: "Vor Zakone",
    text:
      "shes the head of the clan of tashkentskie she calls herself vor zakone maybe she knows a person called zubenko mikhail petrovich well  i dont know",
  },
  {
    name: "Aka Olim",
    job: "Street Racer",
    text:
      "hes a very strange interesting guy ive ever met, i dont like richchie richs and dont know what im typing",
  },
  {
    name: "Mr. Turakulov",
    job: "Simple Guy",
    text:
      "well i can say many good things about this guy hes an IT specialist and quite well mannered ull never get bored with him",
  },
  {
    name: "His Majesty",
    job: "CR",
    text:
      "hes the mentor, teacher CR and many things i even dont know sometimes hes secret guy maybe a bit sshy but anyway its kinda interesting",
  },
];

const author = document.getElementById("author");
const occup = document.getElementById("occupation");
const about = document.getElementById("about");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.getElementById("random");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  author.textContent = item.name;
  occup.textContent = item.job;
  about.textContent = item.text;
}

nextBtn.onclick = function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
};

prevBtn.onclick = function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
};

randomBtn.onclick = function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
};
