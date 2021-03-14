"use strict";

const suwak = document.querySelector('input[type="range"]');
const log = document.getElementById("values");
const card = document.querySelector("div.card");

suwak.value = 0;

const updateValue = (e) => {
  log.textContent = e.target.value;
  card.style.transform = `rotate(${e.target.value}deg)`;
};

suwak.addEventListener("input", updateValue);
