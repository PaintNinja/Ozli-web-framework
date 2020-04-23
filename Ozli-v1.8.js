"use strict";

let dialogueBg = document.querySelector("div.dialogBgFader, div.dialogBgDimmer");

function openDialogueBox(dialogueBoxClassName) {
    dialogueBg.style.display = "block";
    dialogueBg.classList.add("visible");
    document.querySelector("dialog." + dialogueBoxClassName).toggleAttribute("open");

    // Close the dialogue box associated with its close button when the close button is clicked
    try {
        document.querySelector('dialog[open] button.close').onclick = function(closeBtnEvent) {
            dialogueBg.classList.remove("visible");
            dialogueBg.style.display = "none";
            closeBtnEvent.srcElement.parentElement.removeAttribute("open")
        }
    } catch {}
}


function startTickerStrip(elementID, speed, updateInterval) {
    let lastScrollPos = 0;
    setInterval(function() {
        elementID.style.scrollBehavior = "smooth";
        elementID.scrollBy(speed, 0);
        //console.log(`lastScrollPos: ${lastScrollPos}`);
        //console.log(`elementID.scrollLeft: ${elementID.scrollLeft}`);
        if (lastScrollPos === elementID.scrollLeft) {
            elementID.style.scrollBehavior = "unset";
            elementID.scrollLeft = 0;
            return;
        } else {
            lastScrollPos = elementID.scrollLeft;
        }
    }, updateInterval)
}