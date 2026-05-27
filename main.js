console.log("Main Js End");

import { CrComLib } from "@crestron/ch5-crcomlib/";

window.CrComLib = CrComLib;
window.bridgeReceiveIntegerFromNative;
window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;

const main_page = document.querySelector(".main_page");
const monitoring_page = document.querySelector(".monitoring_page");
const gf_car_parking = document.querySelector(".gf_car_parking");
const gf_living_hall = document.querySelector(".gf_living_hall");
const gf_dining = document.querySelector(".gf_dining");
const gf_passage = document.querySelector(".gf_passage");
const gf_sitout = document.querySelector(".gf_sitout");
const staircase = document.querySelector(".staircase_page");
const ff_family_hall = document.querySelector(".ff_family_hall");
const ff_garden = document.querySelector(".ff_garden");
const ff_home_theater = document.querySelector(".ff_home_theater");
const ff_passage = document.querySelector(".ff_passage");
const ff_staircase = document.querySelector(".ff_staircase");
const sf_balcony = document.querySelector(".sf_balcony");
const sf_display_area = document.querySelector(".sf_display_area");
const sf_living_hall = document.querySelector(".sf_living_hall");
const sf_passage = document.querySelector(".sf_passage");
const sf_staircase = document.querySelector(".sf_staircase");
const outdoor = document.getElementById("outdoor");
const ac_control = document.getElementById("ac_control");
const processor_status = document.getElementById("processor_status");

const monitor_page_select_btn = document.getElementById("monitor_page_select_btn");
const gf_car_parking_btn = document.getElementById("gf_car_parking_btn");
const gf_sitout_btn = document.getElementById("gf_sitout_btn");
const gf_living_btn = document.getElementById("gf_living_btn");
const gf_dining_btn = document.getElementById("gf_dining_btn");
const gf_passage_btn = document.getElementById("gf_passage_btn");
const gf_staircase_btn = document.getElementById("gf_staircase_btn");
const ff_family_hall_btn = document.getElementById("ff_family_hall_btn");
const ff_passage_btn = document.getElementById("ff_passage_btn");
const ff_garden_area_btn = document.getElementById("ff_garden_area_btn");
const ff_staircase_btn = document.getElementById("ff_staircase_btn");
const ff_ht_btn = document.getElementById("ff_ht_btn");
const sf_staircase_btn = document.getElementById("sf_staircase_btn");
const sf_passage_btn = document.getElementById("sf_passage_btn");
const sf_living_btn = document.getElementById("sf_living_btn");
const sf_balcony_btn = document.getElementById("sf_balcony_btn");
const sf_display_area_btn = document.getElementById("sf_display_area_btn");
const ac_control_btn = document.getElementById("ac_control_btn");
const processor_status_btn = document.getElementById("processor_status_btn");

const button_back = document.querySelectorAll(".boton-elegante");
button_back.forEach((element) => {
  element?.addEventListener("click", () => {
    main_page.style.display = "block";
    monitoring_page.style.display = "none";
    gf_car_parking.style.display = "none";
    gf_living_hall.style.display = "none";
    gf_dining.style.display = "none";
    gf_passage.style.display = "none";
    gf_sitout.style.display = "none";
    staircase.style.display = "none";
    ff_family_hall.style.display = "none";
    ff_garden.style.display = "none";
    ff_home_theater.style.display = "none";
    ff_staircase.style.display = "none";
    ff_passage.style.display = "none";
    sf_balcony.style.display = "none";
    sf_display_area.style.display = "none";
    sf_living_hall.style.display = "none";
    sf_passage.style.display = "none";
    sf_staircase.style.display = "none";
    ac_control.style.display = "none";
    outdoor.style.display = "none";
    processor_status.style.display ="none";
  });
});

const button_bth = document.querySelectorAll(".button-bth");
button_bth.forEach((element) => {
  element?.addEventListener("click", () => {
    main_page.style.display = "block";
    monitoring_page.style.display = "none";
    gf_car_parking.style.display = "none";
    gf_living_hall.style.display = "none";
    gf_dining.style.display = "none";
    gf_passage.style.display = "none";
    gf_sitout.style.display = "none";
    staircase.style.display = "none";
    ff_family_hall.style.display = "none";
    ff_garden.style.display = "none";
    ff_home_theater.style.display = "none";
    ff_staircase.style.display = "none";
    ff_passage.style.display = "none";
    sf_balcony.style.display = "none";
    sf_display_area.style.display = "none";
    sf_living_hall.style.display = "none";
    sf_passage.style.display = "none";
    sf_staircase.style.display = "none";
    ac_control.style.display = "none";
    outdoor.style.display = "none";
    processor_status.style.display ="none";
  });
});

monitor_page_select_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "block";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

gf_car_parking_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "block";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

gf_sitout_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "block";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

gf_living_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "block";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

gf_dining_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "block";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

gf_passage_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "block";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

gf_staircase_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "block";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

ff_staircase_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "block";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

ff_family_hall_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "block";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

ff_passage_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "block";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

ff_passage_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "block";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

ff_garden_area_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "block";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

ff_ht_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "block";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

sf_staircase_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "block";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

sf_passage_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "block";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

sf_living_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "block";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

sf_balcony_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "block";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

sf_display_area_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "block";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

outdoor_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "block";
  ac_control.style.display = "none";
  processor_status.style.display ="none";
});

ac_control_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "block";
  outdoor.style.display = "none";
  processor_status.style.display ="none";
});

processor_status_btn?.addEventListener("click", () => {
  main_page.style.display = "none";
  monitoring_page.style.display = "none";
  gf_car_parking.style.display = "none";
  gf_living_hall.style.display = "none";
  gf_dining.style.display = "none";
  gf_passage.style.display = "none";
  gf_sitout.style.display = "none";
  staircase.style.display = "none";
  ff_family_hall.style.display = "none";
  ff_garden.style.display = "none";
  ff_home_theater.style.display = "none";
  ff_staircase.style.display = "none";
  ff_passage.style.display = "none";
  sf_balcony.style.display = "none";
  sf_display_area.style.display = "none";
  sf_living_hall.style.display = "none";
  sf_passage.style.display = "none";
  sf_staircase.style.display = "none";
  ac_control.style.display = "none";
  outdoor.style.display = "none";
  processor_status.style.display ="block";
});

main_page.style.display = "block";
monitoring_page.style.display = "none";
gf_car_parking.style.display = "none";
gf_living_hall.style.display = "none";
gf_dining.style.display = "none";
gf_passage.style.display = "none";
gf_sitout.style.display = "none";
staircase.style.display = "none";
ff_family_hall.style.display = "none";
ff_garden.style.display = "none";
ff_home_theater.style.display = "none";
ff_staircase.style.display = "none";
ff_passage.style.display = "none";
sf_balcony.style.display = "none";
sf_display_area.style.display = "none";
sf_living_hall.style.display = "none";
sf_passage.style.display = "none";
sf_staircase.style.display = "none";
ac_control.style.display = "none";
outdoor.style.display = "none";
processor_status.style.display ="none";

// Sliders

function initSlider(sliderId, signalJoin) {
  const slider = document.getElementById(sliderId);
  const feedback = document.getElementById(`${sliderId}_fb`);

  if (!slider) {
    console.warn(`Slider element not found: ${sliderId}`);
    return;
  }

  if (!feedback) {
    console.warn(`Feedback element not found: ${sliderId}_fb`);
    return;
  }

  // Update feedback text
  const updateFeedback = (val) => {
    const percent = Math.round((val / 65535) * 100);
    feedback.textContent = `${percent}%`;
  };

  slider?.addEventListener("input", (event) => {
    const val = parseInt(event.target.value, 10);
    window.CrComLib.publishEvent("n", signalJoin, val);
    updateFeedback(val);
  });

  // Subscribe to signal and update slider and feedback
  window.CrComLib.subscribeState("n", signalJoin, (value) => {
    slider.value = value;
    updateFeedback(value);
  });
}

// Initialize sliders with actual join numbers
initSlider("gf_living_profile_slider", "13");
initSlider("gf_living_focus_slider", "14");
initSlider("gf_living_linear_slider", "15");
initSlider("gf_passage_track_focus_slider", "19");
initSlider("gf_stair_spot_slider", "20");
initSlider("ff_family_profile_slider", "22");
initSlider("ff_family_linear_slider", "24");
initSlider("ff_family_focus_slider", "23");
initSlider("ff_garden_dh_strip_slider", "26");
initSlider("ff_garden_wall_Strip_slider", "27");
initSlider("ff_garden_dh_Spot_slider", "28");
initSlider("ff_garden_dh_inner_Spot_slider", "29");
initSlider("ff_passage_track_focus_Slider", "25");
initSlider("ff_stairs_spot_slider", "30");
initSlider("sf_balcony_strip_slider", "39");
initSlider("sf_balcony_outer_spot_slider", "40");
initSlider("sf_balcony_inner_spot_slider", "41");
initSlider("sf_display_track_focus_Slider", "42");
initSlider("sf_living_profile_slider", "36");
initSlider("sf_living_focus_slider", "37");
initSlider("sf_living_linear_slider", "38");
initSlider("sf_pass_track_focus_slider", "35");
initSlider("sf_stair_outer_spot_slider", "32");
initSlider("sf_stair_inner_spot_slider", "33");
initSlider("sf_stair_passage_spot_slider", "34");
initSlider("gf_dining_profile_slider", "16");
initSlider("gf_dining_focus_slider", "17");
initSlider("gf_dining_linear_slider", "18");
initSlider("sitout_outer_spot_slider", "11");
initSlider("sitout_inner_spot_slider", "12");
// initSlider("ff_ht_volume","");

//Toggles
function handle_toggles(elementId, eventId) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.warn(`element not found: ${elementId}`);
    return;
  }

  element?.addEventListener("click", (event) => {
    CrComLib.publishEvent("b", eventId, true);
    setTimeout(() => {
      CrComLib.publishEvent("b", eventId, false);
    }, 200);
  });

  // Subscribe to state and update CSS class and checkbox state
  window.CrComLib.subscribeState("b", eventId, (value) => {
    element.checked = !!value;
  });
}

handle_toggles("res_reboot","16");
handle_toggles("gf-outdoor-gate-left","353");
handle_toggles("gf-outdoor-gate-right","354");
handle_toggles("gf-carparking-spot", "309");
handle_toggles("gf-Carparking-fan1", "88");
handle_toggles("gf-Carparking-fan2", "89");
handle_toggles("gf-living-cove", "53");
handle_toggles("gf-living-fan1", "90");
handle_toggles("gf-living-fan2", "91");
handle_toggles("door_curtain_open", "109");
handle_toggles("door_curtain_stop", "111");
handle_toggles("door_curtain_close", "110");
handle_toggles("window_curtain_open", "101");
handle_toggles("window_curtain_stop", "103");
handle_toggles("window_curtain_close", "102");
handle_toggles("window_curtain2_open", "105");
handle_toggles("window_curtain2_stop", "107");
handle_toggles("window_curtain2_close", "106");
handle_toggles("gf-passage-ringlight", "59");
handle_toggles("gf-sitout-ceilingspot", "51");
handle_toggles("ff-familyhall-cove", "63");
handle_toggles("ff-familyhall-hanging", "66");
handle_toggles("ff-familyhall-wallpoint", "67");
handle_toggles("ff-familyhall-fan1", "64");
handle_toggles("ff-familyhall-fan2", "65");
handle_toggles("familyhall_curtain_open", "117");
handle_toggles("familyhall_curtain_stop", "119");
handle_toggles("familyhall_curtain_close", "118");
handle_toggles("gf-staircase-down", "60");
handle_toggles("ff-garden-wall-ceiling", "69");
handle_toggles("ff-garden-tree-spot", "70");
handle_toggles("ff-garden-plant-spot", "71");
handle_toggles("ff-garden-standing","312");
handle_toggles("ff-ht-balcony-spot", "73");
handle_toggles("ff-ht-entry-spot", "74");
handle_toggles("ff-ht-seating-spot", "76");
handle_toggles("ff-ht-screen-spot", "75");
handle_toggles("ht_curtain_open", "121");
handle_toggles("ht_curtain_stop", "123");
handle_toggles("ht_curtain_close", "122");
handle_toggles("ht_curtain2_open", "125");
handle_toggles("ht_curtain2_stop", "127");
handle_toggles("ht_curtain2_close", "126");
handle_toggles("ht_curtain3_open", "129");
handle_toggles("ht_curtain3_stop", "131");
handle_toggles("ht_curtain3_close", "130");
handle_toggles("ff-passage-ringlight", "68");
handle_toggles("ff-staircase-down", "72");
handle_toggles("sf-balcony-fan1", "85");
handle_toggles("sf-balcony-fan2", "86");
handle_toggles("sf-living-cove", "79");
handle_toggles("sf-living-balcony-inner", "81");
handle_toggles("sf-living-balcony-outer", "82");
handle_toggles("sf-living-hanging-light", "80");
handle_toggles("sf-living-fan1", "83");
handle_toggles("sf-living-fan2", "84");
handle_toggles("sf_living_curtain_open", "137");
handle_toggles("sf_living_curtain_stop", "139");
handle_toggles("sf_living_curtain_close", "138");
handle_toggles("sf-passage-ringlight", "78");
handle_toggles("gf-dining-cove", "54");
handle_toggles("gf-dining-hanging", "55");
handle_toggles("gf-dining-garden", "56");
handle_toggles("gf-dining-fan1", "57");
handle_toggles("gf-dining-fan2", "58");
handle_toggles("gf-dining-wall-point","304");
handle_toggles("gf-dining-showcase","94");
handle_toggles("dining_curtain_open", "113");
handle_toggles("dining_curtain_stop", "115");
handle_toggles("dining_curtain_close", "114");
handle_toggles("gf-outdoor-garden-tree-spike", "61");
handle_toggles("gf-outdoor-toilet-sunshade", "95");
handle_toggles("gf-outdoor-pooja-sunshade", "93");
handle_toggles("gf-outdoor-compound-updown", "92");
handle_toggles("gf-outdoor-garden-bollard", "97");
handle_toggles("gf-car-parking-c", "308");
handle_toggles("gf-living-wall-point", "311");
handle_toggles("gf-staircase-ipad-charging", "305");
handle_toggles("gf-outdoor-mbr-sunshade", "310");
handle_toggles("gf-outdoor-compound-lamp", "303");
handle_toggles("gf-outdoor-entry-floor-lamp", "96");
handle_toggles("sf-stair-triple-height-spot", "98");
handle_toggles("ff-garden-wall-point", "99");
handle_toggles("ff-staircase-ipad-charging", "306");
handle_toggles("sf-staircase-ipad-charging", "307");
handle_toggles("gf_dining_profile", "326");
handle_toggles("gf_dining_focus", "327");
handle_toggles("gf_dining_linear", "328");
handle_toggles("gf_living_profile", "323");
handle_toggles("gf_living_focus", "324");
handle_toggles("gf_living_linear", "325");
handle_toggles("gf_passage_track_focus", "329");
handle_toggles("sitout_outer_spot", "321");
handle_toggles("sitout_inner_spot", "322");
handle_toggles("gf_stair_spot", "330");
handle_toggles("ff_family_profile", "331");
handle_toggles("ff_family_linear", "332");
handle_toggles("ff_family_focus", "333");
handle_toggles("ff_garden_dh_strip", "335");
handle_toggles("ff_garden_wall_strip", "336");
handle_toggles("ff_garden_dh_outer_spot", "337");
handle_toggles("ff_garden_dh_inner_spot", "338");
handle_toggles("ff_passage_track_focus", "334");
handle_toggles("ff_stair_spot", "339");
handle_toggles("sf_balcony_strip", "347");
handle_toggles("sf_balcony_outer_spot", "348");
handle_toggles("sf_balcony_inner_spot", "349");
handle_toggles("sf_display_track_focus", "350");
handle_toggles("sf_living_profile", "344");
handle_toggles("sf_living_focus", "345");
handle_toggles("sf_living_linear", "346");
handle_toggles("sf_pass_track_focus", "343");
handle_toggles("sf_staircase_outer_spot", "340");
handle_toggles("sf_staircase_inner_spot", "341");
handle_toggles("sf_stair_passage_spot", "342");
handle_toggles("switchBox-Theatre-on-off", "35");
handle_toggles("ht_projector_togg", "39");
handle_toggles("ht_projector_togg_fb", "39");
handle_toggles("ht_processor_togg", "21");
handle_toggles("ht_processor_togg_fb", "21");
handle_toggles("apple-tv", "30");
handle_toggles("ht_vol_plus", "25");
handle_toggles("ht_vol_minus", "26");
handle_toggles("ht_vol_mute", "28");
handle_toggles("apple_remote_up","40");
handle_toggles("apple_remote_right","43");
handle_toggles("apple_remote_down","41");
handle_toggles("apple_remote_left","42");
handle_toggles("apple_remote_ok","44");
handle_toggles("apple_remote_play_pause","46");
handle_toggles("apple_remote_menu","45");
handle_toggles("gf-outdoor-gbr-sunshade","50");
handle_toggles("gf-outdoor-sitout-spike","13");
handle_toggles("gf-outdoor-outer-light","14"); 

/* handle_toggles("switchBox-Theatre-on-off", "34"); */


 /* const Theatre_on_off = document.getElementById("ht_main_pwr_togg");
 const ht_main_pwr_togg_fb = document.getElementById("ht_main_pwr_togg_fb");

 Theatre_on_off.addEventListener("click", (value) => {

   if (value) {
       CrComLib.publishEvent("b", "34", true);
       console.log('button press')
   } else {
       CrComLib.publishEvent("b", "34", false);
   }
 });

   window.CrComLib.subscribeState("b", "34", (value) => {
     ht_main_pwr_togg_fb.checked = !!value;
   });
  */
 const Theatre_on_off = document.getElementById("ht_main_pwr_togg");
/* const ht_main_pwr_togg_fb = document.getElementById("ht_main_pwr_togg_fb"); */

// Handle toggle button click
Theatre_on_off.addEventListener("change", () => {
  const isChecked = Theatre_on_off.checked; // Get the current state of the toggle button
  // Publish the state to CrComLib
  if (isChecked) {
    CrComLib.publishEvent("b", "34", true);
  } else {
    CrComLib.publishEvent("b", "34", false);
  }
});

// Subscribe to Crestron feedback
window.CrComLib.subscribeState("b", "34", (value) => {
  Theatre_on_off.checked = !!value; // Update the UI based on feedback
});


//All Ac on/off

function handle_ac_on_off(elementId, eventId) {
  const element = document?.getElementById(elementId);

  element.addEventListener("change", (event) => {
    CrComLib.publishEvent("b", eventId, true);
    setTimeout(() => {
      CrComLib.publishEvent("b", eventId, false);
    }, 100);
  });

  // Subscribe to state and update CSS class and checkbox state
  window.CrComLib.subscribeState("b", eventId, (value) => {
    element.checked = !!value;
  });
}

handle_ac_on_off("gf-living-room-ac", "155");
handle_ac_on_off("radio-gf-mbr-ac", "170");
handle_ac_on_off("radio-gf-gbr-ac", "185");
handle_ac_on_off("radio-ff-ht-ac", "200");
handle_ac_on_off("radio-ff-mbr-ac", "215");
handle_ac_on_off("radio-ff-gbr1-ac", "230");
handle_ac_on_off("radio-sf-gbr2-ac", "245");
handle_ac_on_off("radio-sf-da-ac", "260");
handle_ac_on_off("radio-sf-mbr-ac", "275");
handle_ac_on_off("radio-sf-gbr-ac", "290");

//All Ac Modes & Fan
function handle_ac_modes(elementId, eventId) {
  const element = document?.getElementById(elementId);
  if (!element) {
    console.warn(`element not found: ${elementId}`);
    return;
  }
  element?.addEventListener("change", (event) => {
    CrComLib.publishEvent("b", eventId, true);
    setTimeout(() => {
      CrComLib.publishEvent("b", eventId, false);
    }, 100);
  });

  // Subscribe to state and update CSS class and checkbox state
  window.CrComLib.subscribeState("b", eventId, (value) => {
    element.checked = !!value;
  });
}
/* gf living */
handle_ac_modes("gf_living_ac_mode_cool", "156");
handle_ac_modes("gf_living_ac_mode_dry", "157");
handle_ac_modes("gf_living_ac_mode_fan", "158");
handle_ac_modes("gf_living_ac_mode_auto", "159");
handle_ac_modes("gf_living_ac_fan_low", "160");
handle_ac_modes("gf_living_ac_fan_mid", "161");
handle_ac_modes("gf_living_ac_fan_high", "162");
handle_ac_modes("gf_living_ac_fan_auto", "163");
/* gf mbr */
handle_ac_modes("gf_mbr_ac_mode_cool", "171");
handle_ac_modes("gf_mbr_ac_mode_dry", "172");
handle_ac_modes("gf_mbr_ac_mode_fan", "173");
handle_ac_modes("gf_mbr_ac_mode_auto", "174");
handle_ac_modes("gf_mbr_ac_fan_low", "175");
handle_ac_modes("gf_mbr_ac_fan_mid", "176");
handle_ac_modes("gf_mbr_ac_fan_high", "177");
handle_ac_modes("gf_mbr_ac_fan_auto", "178");
/* gf gbr */
handle_ac_modes("gf_gbr_ac_mode_cool", "186");
handle_ac_modes("gf_gbr_ac_mode_dry", "187");
handle_ac_modes("gf_gbr_ac_mode_fan", "188");
handle_ac_modes("gf_gbr_ac_mode_auto", "189");
handle_ac_modes("gf_gbr_ac_fan_low", "190");
handle_ac_modes("gf_gbr_ac_fan_mid", "191");
handle_ac_modes("gf_gbr_ac_fan_high", "192");
handle_ac_modes("gf_gbr_ac_fan_auto", "193");
/* ff home teatre */
handle_ac_modes("ff_ht_ac_mode_cool", "201");
handle_ac_modes("ff_ht_ac_mode_dry", "202");
handle_ac_modes("ff_ht_ac_mode_fan", "203");
handle_ac_modes("ff_ht_ac_mode_auto", "204");
handle_ac_modes("ff_ht_ac_fan_low", "205");
handle_ac_modes("ff_ht_ac_fan_mid", "206");
handle_ac_modes("ff_ht_ac_fan_high", "207");
handle_ac_modes("ff_ht_ac_fan_auto", "208");
/* ff mbr */
handle_ac_modes("ff_mbr_ac_mode_cool", "216");
handle_ac_modes("ff_mbr_ac_mode_dry", "217");
handle_ac_modes("ff_mbr_ac_mode_fan", "218");
handle_ac_modes("ff_mbr_ac_mode_auto", "219");
handle_ac_modes("ff_mbr_ac_fan_low", "220");
handle_ac_modes("ff_mbr_ac_fan_mid", "221");
handle_ac_modes("ff_mbr_ac_fan_high", "222");
handle_ac_modes("ff_mbr_ac_fan_auto", "223");
/* ff gbr-1 */
handle_ac_modes("ff_gbr_ac_mode_cool", "231");
handle_ac_modes("ff_gbr_ac_mode_dry", "232");
handle_ac_modes("ff_gbr_ac_mode_fan", "233");
handle_ac_modes("ff_gbr_ac_mode_auto", "234");
handle_ac_modes("ff_gbr_ac_fan_low", "235");
handle_ac_modes("ff_gbr_ac_fan_mid", "236");
handle_ac_modes("ff_gbr_ac_fan_high", "237");
handle_ac_modes("ff_gbr_ac_fan_auto", "238");
/* ff gbr-2 */
handle_ac_modes("ff_gbr2_ac_mode_cool", "246");
handle_ac_modes("ff_gbr2_ac_mode_dry", "247");
handle_ac_modes("ff_gbr2_ac_mode_fan", "248");
handle_ac_modes("ff_gbr2_ac_mode_auto", "249");
handle_ac_modes("ff_gbr2_ac_fan_low", "250");
handle_ac_modes("ff_gbr2_ac_fan_mid", "251");
handle_ac_modes("ff_gbr2_ac_fan_high", "252");
handle_ac_modes("ff_gbr2_ac_fan_auto", "253");
/* sf display room */
handle_ac_modes("sf_display_ac_mode_cool", "261");
handle_ac_modes("sf_display_ac_mode_dry", "262");
handle_ac_modes("sf_display_ac_mode_fan", "263");
handle_ac_modes("sf_display_ac_mode_auto", "264");
handle_ac_modes("sf_display_ac_fan_low", "265");
handle_ac_modes("sf_display_ac_fan_mid", "266");
handle_ac_modes("sf_display_ac_fan_high", "267");
handle_ac_modes("sf_display_ac_fan_auto", "268");
/* sf mbr */
handle_ac_modes("sf_mbr_ac_mode_cool", "276");
handle_ac_modes("sf_mbr_ac_mode_dry", "277");
handle_ac_modes("sf_mbr_ac_mode_fan", "278");
handle_ac_modes("sf_mbr_ac_mode_auto", "279");
handle_ac_modes("sf_mbr_ac_fan_low", "280");
handle_ac_modes("sf_mbr_ac_fan_mid", "281");
handle_ac_modes("sf_mbr_ac_fan_high", "282");
handle_ac_modes("sf_mbr_ac_fan_auto", "283");
/* sf gbr */
handle_ac_modes("sf_gbr_ac_mode_cool", "291");
handle_ac_modes("sf_gbr_ac_mode_dry", "292");
handle_ac_modes("sf_gbr_ac_mode_fan", "293");
handle_ac_modes("sf_gbr_ac_mode_auto", "294");
handle_ac_modes("sf_gbr_ac_fan_low", "295");
handle_ac_modes("sf_gbr_ac_fan_mid", "296");
handle_ac_modes("sf_gbr_ac_fan_high", "297");
handle_ac_modes("sf_gbr_ac_fan_auto", "298");

//All Ac temperature
function handle_ac_temp(elementId, eventId) {
  const element = document.getElementById(elementId);

  element?.addEventListener("click", (event) => {
    CrComLib.publishEvent("b", eventId, true);
    setTimeout(() => {
      CrComLib.publishEvent("b", eventId, false);
    }, 100);
  });

  // Subscribe to state and update CSS class and checkbox state
  window.CrComLib.subscribeState("b", eventId, (value) => {
    element.checked = !!value;
  });
}

handle_ac_temp("gf-living-decrease-temp-ac", "165");
handle_ac_temp("gf-living-increase-temp-ac", "164");
handle_ac_temp("gf-mbr-decrease-temp-ac", "180");
handle_ac_temp("gf-mbr-increase-temp-ac", "179");
handle_ac_temp("gf-gbr-decrease-temp-ac", "195");
handle_ac_temp("gf-gbr-increase-temp-ac", "194");
handle_ac_temp("ff-ht-decrease-temp-ac", "210");
handle_ac_temp("ff-ht-increase-temp-ac", "209");
handle_ac_temp("ff-mbr-decrease-temp-ac", "225");
handle_ac_temp("ff-mbr-increase-temp-ac", "224");
handle_ac_temp("ff-gbr-decrease-temp-ac", "240");
handle_ac_temp("ff-gbr-increase-temp-ac", "239");
handle_ac_temp("ff-gbr2-decrease-temp-ac", "255");
handle_ac_temp("ff-gbr2-increase-temp-ac", "254");
handle_ac_temp("sf-display-decrease-temp-ac", "270");
handle_ac_temp("sf-display-increase-temp-ac", "269");
handle_ac_temp("sf-mbr-decrease-temp-ac", "285");
handle_ac_temp("sf-mbr-increase-temp-ac", "284");
handle_ac_temp("sf-gbr-decrease-temp-ac", "300");
handle_ac_temp("sf-gbr-increase-temp-ac", "299");


//All Ac temperature
function handle_ac_temp(elementId, eventId) {
  const element = document.getElementById(elementId);

  // Subscribe to state and update CSS class and checkbox state
  window.CrComLib.subscribeState("n", eventId, (value) => {
    element.innerText = value;
  });
}

handle_ac_temp("g_living_temp-value-ac", "45");
handle_ac_temp("g_mbr_temp-value-ac", "46");
handle_ac_temp("g_gbr_temp-value-ac", "47");
handle_ac_temp("f_ht_temp-value-ac", "52");
handle_ac_temp("f_mbr_temp-value-ac", "48");
handle_ac_temp("f_gbr1temp-value-ac", "49");
handle_ac_temp("f_gbr2_temp-value-ac", "50");
handle_ac_temp("s_display_temp-value-ac", "53");
handle_ac_temp("s_mbr_temp-value-ac", "54");
handle_ac_temp("s_gbr_temp-value-ac", "55");





//master all on/off

function handle_master_scenes(elementId, eventId) {
  const element = document.getElementById(elementId)

  element.addEventListener('click', (event) => {
    CrComLib.publishEvent("b", eventId, true);
    setTimeout(() => {
      CrComLib.publishEvent("b", eventId, false);
    }, 200);
  } );
}

handle_master_scenes('gf_master_all_off','2');
handle_master_scenes('gf_master_all_on','1');
handle_master_scenes('ff_master_all_off','5');
handle_master_scenes('ff_master_all_on','4');
handle_master_scenes('sf_master_all_off','8');
handle_master_scenes('sf_master_all_on','7');
handle_master_scenes('entirebuilding_master_all_off','11');
handle_master_scenes('entirebuilding_master_all_on','10');

//Handle all monitoring text

function handle_monitoring(elementId, eventId){
  const element = document.getElementById(elementId);

  if (!element) {
    console.warn(`Element not found: ${elementId}`);
    return;
  }
  window.CrComLib.subscribeState("b", eventId, (value) => {
    if (value) {
      element.innerText = "ON";
    } else {
      element.innerText = "OFF";
    }
  });
}

handle_monitoring('gf_sitout_light_monitor_text','400');
handle_monitoring('gf_car_parking_light_monitor_text','400');
handle_monitoring('gf_living_hall_light_monitor_text','401');
handle_monitoring('gf_living_hall_ac_monitor_text','');
handle_monitoring('gf_dining_light_monitor_text','402');
handle_monitoring('gf_passage_light_monitor_text','414');
handle_monitoring('gf_staircase_light_monitor_text','413');
handle_monitoring('ff_family_hall_light_monitor_text','404');
handle_monitoring('ff_passage_light_monitor_text','415');
handle_monitoring('ff_garden_light_monitor_text','405');
handle_monitoring('ff_staircase_light_monitor_text','406');
handle_monitoring('ff_ht_light_monitor_text','407');
handle_monitoring('ff_ht_ac_monitor_text','');
handle_monitoring('sf_staircase_light_monitor_text','408');
handle_monitoring('sf_passage_light_monitor_text','412');
handle_monitoring('sf_living_light_monitor_text','409');
handle_monitoring('sf_balcony_light_monitor_text','410');
handle_monitoring('sf_display_area_light_monitor_text','411');


function handle_monitoring_icons(elementId, eventId) {
    const element = document.getElementById(elementId);

    if (!element) {
        console.warn(`Element not found: ${elementId}`);
        return;
    }

     element.addEventListener('click', () => {
        CrComLib.publishEvent("b", eventId, true);
        setTimeout(() => {
            CrComLib.publishEvent("b", eventId, false);
        }, 200);
    });
    window.CrComLib.subscribeState('b', eventId, (value) => {
        if (value) {
            element.classList.add('monitor_checked');
        } else {
            element.classList.remove('monitor_checked');
        }
    });
}

handle_monitoring_icons('gf_sitout_light_monitor_icon','400');
handle_monitoring_icons('gf_car_parking_light_monitor_icon','400');
handle_monitoring_icons('gf_living_hall_light_monitor_icon','401');
handle_monitoring_icons('gf_living_hall_ac_monitor_icon','');
handle_monitoring_icons('gf_dining_light_monitor_icon','402');
handle_monitoring_icons('gf_passage_light_monitor_icon','414');
handle_monitoring_icons('gf_staircase_light_monitor_icon','413');
handle_monitoring_icons('ff_family_hall_light_monitor_icon','404');
handle_monitoring_icons('ff_passage_light_monitor_icon','415');
handle_monitoring_icons('ff_garden_light_monitor_icon','405');
handle_monitoring_icons('ff_staircase_light_monitor_icon','406');
handle_monitoring_icons('ff_ht_light_monitor_icon','407');
handle_monitoring_icons('ff_ht_ac_monitor_icon','');
handle_monitoring_icons('sf_staircase_light_monitor_icon','408');
handle_monitoring_icons('sf_passage_light_monitor_icon','412');
handle_monitoring_icons('sf_living_light_monitor_icon','409');
handle_monitoring_icons('sf_balcony_light_monitor_icon','410');
handle_monitoring_icons('sf_display_area_light_monitor_icon','411');


const ht_vol_fb = document.getElementById('ht_vol_fb');

  window.CrComLib.subscribeState("s", "1", (value) => {
    ht_vol_fb.innerText = value;
  });
 

/* //handle buttons
function handle_buttons(button_id, Joinnumber) {
    const buttonidname = document.getElementById(button_id);

    buttonidname.addEventListener('click', () => {

        CrComLib.publishEvent("b", Joinnumber, true);
        setTimeout(() => {
            CrComLib.publishEvent("b", Joinnumber, false);
        }, 200);
    
    });

    window.CrComLib.subscribeState('b', Join, (value) => {
        if (value) {
            buttonidname.classList.add("master_scene_button_active");
        } else {
            buttonidname.classList.remove("master_scene_button_active");
        }
    }); 

}

handle_buttons('gf_master_all_off', '2'); 
handle_buttons('ggf_master_all_on', '1'); 
handle_buttons('ff_master_all_off', '4'); 
handle_buttons('ff_master_all_on', '3'); 
handle_buttons('sf_master_all_off', '6'); 
handle_buttons('sf_master_all_on', '5');  */

//gf_master_all_off
/* const gf_master_all_off = document.getElementById("gf_master_all_off");

gf_master_all_off?.addEventListener("click", () => {
  CrComLib.publishEvent("b", "2", true);
  setTimeout(() => {
    CrComLib.publishEvent("b", "2", false);
  }, 200);
});

window.CrComLib.subscribeState("b", "2", (value) => {
  if (value) {
    gf_master_all_off.classList.add("master_scene_button_active");
  } else {
    gf_master_all_off.classList.remove("master_scene_button_active");
  }
});

//gf_master_all_on
const gf_master_all_on = document.getElementById("gf_master_all_on");

gf_master_all_on?.addEventListener("click", () => {
  CrComLib.publishEvent("b", "1", true);
  setTimeout(() => {
    CrComLib.publishEvent("b", "1", false);
  }, 200);
});

window.CrComLib.subscribeState("b", "1", (value) => {
  if (value) {
    gf_master_all_on.classList.add("master_scene_button_active");
  } else {
    gf_master_all_on.classList.remove("master_scene_button_active");
  }
});

//ff_master_all_off
const ff_master_all_off = document.getElementById("ff_master_all_off");

ff_master_all_off?.addEventListener("click", () => {
  CrComLib.publishEvent("b", "3", true);
  setTimeout(() => {
    CrComLib.publishEvent("b", "3", false);
  }, 200);
});

window.CrComLib.subscribeState("b", "3", (value) => {
  if (value) {
    ff_master_all_off.classList.add("master_scene_button_active");
  } else {
    ff_master_all_off.classList.remove("master_scene_button_active");
  }
});

//ff_master_all_on
const ff_master_all_on = document.getElementById("ff_master_all_on");

ff_master_all_on?.addEventListener("click", () => {
  CrComLib.publishEvent("b", "4", true);
  setTimeout(() => {
    CrComLib.publishEvent("b", "4", false);
  }, 200);
});

window.CrComLib.subscribeState("b", "4", (value) => {
  if (value) {
    ff_master_all_on.classList.add("master_scene_button_active");
  } else {
    ff_master_all_on.classList.remove("master_scene_button_active");
  }
});

//sf_master_all_off
const sf_master_all_off = document.getElementById("sf_master_all_off");

sf_master_all_off?.addEventListener("click", () => {
  CrComLib.publishEvent("b", "6", true);
  setTimeout(() => {
    CrComLib.publishEvent("b", "6", false);
  }, 200);
});

window.CrComLib.subscribeState("b", "6", (value) => {
  if (value) {
    sf_master_all_off.classList.add("master_scene_button_active");
  } else {
    sf_master_all_off.classList.remove("master_scene_button_active");
  }
});

//sf_master_all_on
const sf_master_all_on = document.getElementById("sf_master_all_on");

sf_master_all_on?.addEventListener("click", () => {
  CrComLib.publishEvent("b", "5", true);
  setTimeout(() => {
    CrComLib.publishEvent("b", "5", false);
  }, 200);
});

window.CrComLib.subscribeState("b", "5", (value) => {
  if (value) {
    sf_master_all_on.classList.add("master_scene_button_active");
  } else {
    sf_master_all_on.classList.remove("master_scene_button_active");
  }
}); */

