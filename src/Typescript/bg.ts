fetch('./src/html/bg.html')
    .then(function (res) { return res.text(); })
    .then(function (text) {
    var oldelem = document.querySelector("script#replace_with_bg")!;
    var newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode?.replaceChild(newelem, oldelem);
});