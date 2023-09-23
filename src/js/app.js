import "../style/style.css";
import { Viewer } from "@photo-sphere-viewer/core";

import mainBig from "../assets/bg-img.png";
import logo from "../assets/logo-icon.png";
import telegram from "../assets/telegram-icon.png";
import whatsapp from "../assets/whatsapp-icon.png";
import dowload from "../assets/dowload.png";
import modalImg from "../assets/modal-img.png";
import close from "../assets/close.png";
import apartments from "../assets/panorama-1.png";
import mansions from "../assets/panorama-2.png";
import park from "../assets/panorama-2.png";
import road from "../assets/panorama-2.png";

////////////// Images  /////////////////////

const mainImg = document.getElementById("mainBig");
mainImg.src = mainBig;

const logoimg = document.getElementById("logo");
logoimg.src = logo;

const telegramImg = document.getElementById("nav-telegram");
telegramImg.src = telegram;

const whatsappImg = document.getElementById("nav-whatsapp");
whatsappImg.src = whatsapp;

const dowloadIcon = document.getElementById("main-dowload-icon");
dowloadIcon.src = dowload;

const modalImage = document.getElementById("modal-img");
modalImage.src = modalImg;

const modalIcon1 = document.getElementById("modal-link1");
modalIcon1.src = telegram;

const modalIcon2 = document.getElementById("modal-link2");
modalIcon2.src = whatsapp;

const closeIcon = document.getElementById("modal-close");
closeIcon.src = close;

const panoramaIcon = document.querySelectorAll(".panorama-icon");
panoramaIcon.forEach((item) => {
  item.src = close;
});

///////////// Modal Dowload Brochure ////////////////

const mainDowload = document.querySelector(".main-dowload");
const modalWindow = document.querySelector(".modal-window");
const modalClose = document.querySelector("#modal-close");

//////////// Modal Panorama Views  ////////////////

const mainApartments = document.querySelector(".main-apartments");
const modal1 = document.querySelector("#modal1");
const panoramaClose1 = document.querySelector("#panorama-close1");

const mainMansions = document.querySelector(".main-mansions");
const modal2 = document.querySelector("#modal2");
const panoramaClose2 = document.querySelector("#panorama-close2");

const mainPark = document.querySelector(".main-park");
const modal3 = document.querySelector("#modal3");
const panoramaClose3 = document.querySelector("#panorama-close3");

const mainroad = document.querySelector(".main-road");
const modal4 = document.querySelector("#modal4");
const panoramaClose4 = document.querySelector("#panorama-close4");

///////////// Modal Dowload Brochure ////////////////

function getModal(modal) {
  if (modal.classList.contains("active")) {
    modal.classList.add("active");
    modal.classList.remove("active");
  } else {
    modal.classList.remove("active");
    modal.classList.add("active");
  }
}

mainDowload.addEventListener("click", () => {
  getModal(modalWindow);
});

modalClose.addEventListener("click", () => {
  getModal(modalWindow);
});

//////////// Modal Panorama Views  ////////////////

mainApartments.addEventListener("click", () => {
  getModal(modal1);
});

panoramaClose1.addEventListener("click", () => {
  getModal(modal1);
});

mainMansions.addEventListener("click", () => {
  getModal(modal2);
});

panoramaClose2.addEventListener("click", () => {
  getModal(modal2);
});

mainPark.addEventListener("click", () => {
  getModal(modal3);
});

panoramaClose3.addEventListener("click", () => {
  getModal(modal3);
});

mainroad.addEventListener("click", () => {
  getModal(modal4);
});

panoramaClose4.addEventListener("click", () => {
  getModal(modal4);
});

//////////// PhotoSphera View settings  /////////////////////

const apartmentView = new Viewer({
  container: "apartments",
  panorama: apartments,
  loadingImg: apartments,
  touchmoveTwoFingers: true,
  mousewheelCtrlKey: true,
  autoplay: false,
  cancelable: false,
  navbar: false,
});

const mansionsView = new Viewer({
  container: "mansions",
  panorama: mansions,
  loadingImg: mansions,
  touchmoveTwoFingers: true,
  mousewheelCtrlKey: true,
  autoplay: false,
  cancelable: false,
  navbar: false,
});

const parkView = new Viewer({
  container: "park",
  panorama: park,
  loadingImg: park,
  touchmoveTwoFingers: true,
  mousewheelCtrlKey: true,
  autoplay: false,
  cancelable: false,
  navbar: false,
});

const roadView = new Viewer({
  container: "road",
  panorama: road,
  loadingImg: road,
  touchmoveTwoFingers: true,
  mousewheelCtrlKey: true,
  autoplay: false,
  cancelable: false,
  navbar: false,
});
