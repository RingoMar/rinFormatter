let $ = require("jquery"); // jQuery now loaded and assigned to $

$(document).ready(function () {
  $(".biggestTop ").slideUp(1000);
  $(".HoldTop").slideUp(300).fadeIn(200);
});
var medaData = {};
var recipes = {};
var tags = [];

$(".redClear").click(function () {
  $(".inName").val("");
  $(".inUrl").val("");
  $(".inImage").val("");
  $(".inDes").val("");
  $(".inIng").val("");
  $(".inDir").val("");
  $(".moring").prop("checked", false);
  $(".noon").prop("checked", false);
  $(".night").prop("checked", false);
  $(".crinkle").prop("checked", false);
  // $(".mdJS").val("");
  // $(".rJS").val("");
});
$(".greenSub").click(function () {
  var name = $(".inName").val();
  var url = $(".inUrl").val();
  var image = $(".inImage").val();
  var des = $(".inDes").val();
  var ing = $(".inIng").val().replace(/"/g, "'").split("\n");
  var dir = $(".inDir").val().replace(/"/g, "'").split("\n");
  var link = name.replace(/\s+/g, "-").toLowerCase();
  var mor = $(".moring").is(":checked");
  var noon = $(".noon").is(":checked");
  var night = $(".night").is(":checked");
  var snack = $(".crinkle").is(":checked");
  if (mor) {
    tags.push("moring");
  }
  if (noon) {
    tags.push("noon");
  }
  if (night) {
    tags.push("night");
  }
  if (snack) {
    tags.push("crinkle");
  }
  var tagsString = JSON.stringify(tags);
  medaData[name] = {
    name: `${name}`,
    description: `${des}`,
    link: `${link}`,
    image: `${image}`,
    id: Math.random(),
    tags: [],
  };
  medaData[name]["tags"] = tags;

  recipes[link] = {
    name: `${name}`,
    url: `${url}`,
    image: `${image}`,
    ing: [],
    dir: [],
  };

  recipes[link]["ing"] = ing;
  recipes[link]["dir"] = dir;

  var mataString = JSON.stringify(medaData);
  var rString = JSON.stringify(recipes);
  $(".mdJS").val(mataString);
  $(".rJS").val(rString);
});

$(function () {
  $(".copyMD").click(function () {
    $(".mdJS").focus();
    $(".mdJS").select();
    document.execCommand("copy");
  });
});

$(function () {
  $(".copyR").click(function () {
    $(".rJS").focus();
    $(".rJS").select();
    document.execCommand("copy");
  });
});
