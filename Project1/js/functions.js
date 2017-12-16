function dropDownNav() {
    var x = document.getElementById("myNavLinks");
    if (x.className === "navlinks") {
        x.className += " responsive";
    } else {
        x.className = "navlinks";
    }
}
