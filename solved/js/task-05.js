window.addEventListener("load", function () {
    document.getElementById("name-input").addEventListener("input", function () {
        let val = "Anonymous";
        let realVal = document.getElementById("name-input").value;
        if(realVal.length > 0)
            val = realVal;

        document.getElementById("name-output").innerText = val;
    })
})