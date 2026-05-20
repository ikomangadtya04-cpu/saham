const comparisons = [

    ["Risiko","Return"],
    ["Dividend Yield","Return"],
    ["Stabilitas","Return"],
    ["Dividend Yield","Risiko"],
    ["Stabilitas","Risiko"],
    ["Stabilitas","Dividend Yield"]

];

let currentStep = 0;

const slider =
document.getElementById(
"ahpSlider");

const title =
document.getElementById(
"questionTitle");

const left =
document.getElementById(
"leftLabel");

const right =
document.getElementById(
"rightLabel");

const preview =
document.getElementById(
"previewText");

const stepNow =
document.getElementById(
"stepNow");

const progressFill =
document.getElementById(
"progressFill");

/* =========================
   UPDATE UI
========================= */
function updateUI(){

    let pair =
    comparisons[currentStep];

    left.innerText = pair[0];
    right.innerText = pair[1];

    title.innerText =
    pair[1] + " vs " + pair[0];

    stepNow.innerText =
    currentStep + 1;

    progressFill.style.width =
    ((currentStep + 1) / 6 * 100)
    + "%";

    updatePreview();
}

/* =========================
   UPDATE PREVIEW
========================= */
function updatePreview(){

    let value =
    slider.value;

    let pair =
    comparisons[currentStep];

    preview.innerHTML =
    `
    <strong>
    Pilihan Anda:
    </strong><br>

    ${pair[1]}
    <strong>
    ${value}x
    </strong>

    lebih penting dibanding
    ${pair[0]}
    `;
}

/* =========================
   SLIDER EVENT
========================= */
slider.addEventListener(
"input",
updatePreview
);

/* =========================
   NEXT BUTTON
========================= */
document.getElementById(
"nextBtn"
).onclick = function(){

    if(currentStep < 5){

        currentStep++;
        updateUI();

    }else{

        /* PINDAH KE HALAMAN HASIL */
        window.location.href =
        hasilURL;

    }

};

/* =========================
   PREV BUTTON
========================= */
document.getElementById(
"prevBtn"
).onclick = function(){

    if(currentStep > 0){

        currentStep--;
        updateUI();

    }

};

/* =========================
   INITIAL LOAD
========================= */
updateUI();