document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("b2").addEventListener("click", function() {
        var driveFileUrl = "https://drive.google.com/uc?export=download&id=1X28RUpGpH4VH0S_REUn4B5HyQtQsc1yu";
        var anchor = document.createElement("a");
        anchor.href = driveFileUrl;
        anchor.target = "_blank";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });
});
