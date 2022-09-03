window.addEventListener("load", function () {
    document.getElementsByClassName("login-form")[0].addEventListener("submit", function (e) {
        e.preventDefault();
        let result = {};
        let ok = true;
        for(const el of e.path[0].elements) {
            if (el.tagName.toLowerCase() !== "input")
                continue;
            result[el.name] = el.value;
            if(el.value.length === 0)
                ok = false;
        }
        if(ok)
            console.log(result);
        else
            alert("All fields must be filled in to continue");
    });
});