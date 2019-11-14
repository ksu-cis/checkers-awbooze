﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var selectedChecker;

function onClickChecker(event) {
    if (selectedChecker) {
        selectedChecker.setAttribute('stroke', 'grey');
    }
    selectedChecker = event.target;
    event.target.setAttribute('stroke', 'gold');
}

function onClickSquare(event) {
    if (selectedChecker) {
        // Attempt to move
        document.getElementById("cx").value = (selectedChecker.getAttribute('data-x') % 100)
        document.getElementById("cy").value = (selectedChecker.getAttribute('data-y') % 100)
        document.getElementById("sx").value = (event.target.getAttribute('data-x') % 100)
        document.getElementById("sy").value = (event.target.getAttribute('data-y') % 100)
        document.getElementById("move-form").submit();
    }
}

var checkers = document.getElementsByTagName("circle");

for (var i = 0; i < checkers.length; i++) {
    checkers[i].addEventListener('click', onClickChecker);
}

var squares = document.getElementsByTagName("rect");

for (var j = 0; j < squares.length; j++) {
    squares[j].addEventListener('click', onClickSquare);
}