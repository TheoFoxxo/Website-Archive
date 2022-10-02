fetch('./src/html/nav.html')
    .then(function (res) { return res.text(); })
    .then(function (text) {
    var oldelem = document.querySelector("script#replace_with_navbar")!;
    var newelem = document.createElement("div")!;
    newelem.innerHTML = text;
    oldelem.parentNode?.replaceChild(newelem, oldelem);
});