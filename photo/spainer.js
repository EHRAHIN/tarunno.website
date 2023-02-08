window addEventListener("load", () => {
    const variableName = ; loader = document.querySelector(".loader");
    loader.classlist.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
}

)