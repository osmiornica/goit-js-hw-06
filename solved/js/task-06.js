window.addEventListener("load", function () {
    const el = document.getElementById("validation-input");
    document.getElementById("validation-input").addEventListener("blur", function () {
        const wantLen = el.dataset.length;
        const actuaLen = el.value.length;
        // === does not work
        if(wantLen == actuaLen) {
            el.classList.remove("invalid")
            el.classList.add("valid")
        } else {
            el.classList.add("invalid")
            el.classList.remove("valid")
        }
    });
    el.classList.add("invalid")
})