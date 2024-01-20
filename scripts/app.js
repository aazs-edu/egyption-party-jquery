"use strict";

// Handle Nav
$("a[href^='#']").on("click", (e) => {
  const sectionOffsetTop = $($(e.target).attr("href")).offset().top;
  $("html, body").animate({ scrollTop: sectionOffsetTop }, 500);
});
$(".sidebar").css("left", `-${$(".sidebar").outerWidth()}px`);
$(".openSidebar").click(function () {
  if ($(".sidebar").css("left") === "0px") {
    $(".sidebar").css("left", `-${$(".sidebar").outerWidth()}px`);
  } else {
    $(".sidebar").css("left", 0);
  }
});

// Handle Accordion
$("#open").css("display", "block");
$(".toggle").click(function () {
  if ($(this).siblings().css("display") === "none") {
    $(this).siblings().slideDown(300);
  } else {
    $(this).siblings().slideUp(300);
  }
    $($(".toggle")).not(this).siblings().slideUp(300);
});

// Handle Counter
setInterval(() => {
  let currentDate = new Date();
  let futureDate = new Date("2024-02-20");
  let diffDate = futureDate - currentDate - 1000 * 60 * (2 * 60);
  let seconds = Math.floor(diffDate / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  $(".days").text(days);
  $(".hours").text(hours);
  $(".minutes").text(minutes);
  $(".seconds").text(seconds);
}, 1000);

// Handle Textarea
const textArea = document.querySelector("#contact textarea");
$("#contact textarea").on("input", function () {
  if (textArea.value.length < 100) {
    $("#countDownNumber")
      .text(100 - textArea.value.length);
  } else {
    $("#countDownNumber").text(100 - textArea.value.length);
    $("#countDownNumber")
      .text("your available character finished");
  }
});
$("#contact textarea").on("input", (e) => {
  let charCount = e.target.value.length;
  if (charCount > 100) {
      return;
  }
  $("#contact .progressBar").width(`${(charCount / 100) * 100}%`);
});
