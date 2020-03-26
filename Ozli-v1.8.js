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