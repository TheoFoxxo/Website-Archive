"use strict";
fetch('/./src/html/nav.html')
    .then(function (res) { return res.text(); })
    .then(function (text) {
    var _a;
    var oldelem = document.querySelector("script#replace_with_navbar");
    var newelem = document.createElement("div");
    newelem.innerHTML = text;
    (_a = oldelem.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newelem, oldelem);
});
fetch('/./src/html/smart.html')
    .then(function (res) { return res.text(); })
    .then(function (text) {
    var _a;
    var oldelem = document.querySelector("script#smart_ass");
    var newelem = document.createElement("div");
    newelem.innerHTML = text;
    (_a = oldelem.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newelem, oldelem);
});

