"use strict";

const log = document.getElementById("values");
const card = document.querySelector("div.card");

const keyboard = [];

const rotateDiv = (dir) => {
  let v = Number(card.style.transform.match(/(\d)+/g));
  if (dir === "ArrowRight") {
    if (v >= 360) v = 0;
    ++v;
  } else if (dir === "ArrowLeft") {
    if (v <= 0) v = 360;
    --v;
  }
  card.style.transform = `rotate(${v}deg)`;
  console.log(card.style.transform);
};

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    // do not alert when only Alt key is pressed.
    if (keyName === "Alt") {
      return;
    }
    if (event.altKey) {
      rotateDiv(keyName);
    }
  },
  false
);
