$("document").ready(function () {
    $("a[href^=mailto]").css("text-decoration", "none");
    $("body").css("font-family", "Roboto");
    $("h1").css("font-family", "Roboto");
    $("h2").css("font-family", "Roboto");
    $("h3").css("font-family", "Roboto");
    $("h4").css("font-family", "Roboto");
    $("h5").css("font-family", "Roboto");
    $("h6").css("font-family", "Roboto");
    $("#linkedIn").click(function () {
        window.location="https://www.linkedin.com/in/matruprasad-chand-137a35133/";
    });
    $("#twitter").click(function () {
        window.location="https://twitter.com/Matt110110";
    });
    $("#facebook").click(function () {
        window.location="https://www.facebook.com/Matt110110";
    });
    $("#insta").click(function () {
        window.location="https://www.instagram.com/matt110110/";
    });
    $("#github").click(function () {
        window.location="https://github.com/Matt110110";
    });
});
/*
document.getElementById("linkedIn").addEventListener("click", function () {
   window.location="https://www.linkedin.com/in/matruprasad-chand-137a35133/"; 
});
document.getElementById("twitter").addEventListener("click", function () {
    window.location="https://twitter.com/Matt110110";
});
document.getElementById("facebook").addEventListener("click", function () {
    window.location="https://www.facebook.com/Matt110110";
});
document.getElementById("insta").addEventListener("click", function () {
    window.location="https://www.instagram.com/matt110110/";
});
document.getElementById("github").addEventListener("click", function () {
    window.location="https://github.com/Matt110110";
});
*/