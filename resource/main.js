//new RuleTester({ parserOptions: { ecmaVersion: 6 } })
//let toggled = false;

function toggleDropdown(button) {
    // Check the current "expanded" state
    const isExpanded = button.getAttribute("nav button:nth-of-type(1)") === 'true';
    
    // Toggle the `aria-expanded` attribute
    button.setAttribute("nav button:nth-of-type(1)", !isExpanded);
    
    // Add logic to show or hide the dropdown menu
    if (!isExpanded) {
        console.log('Dropdown opened');
        // Here you can show the dropdown menu
    } else {
        console.log('Dropdown closed');
        // Here you can hide the dropdown menu
    }
}

function changeBackground() {
    if (localStorage.getItem("selectedTheme") === "light") {
        localStorage.setItem("selectedTheme", "dark");
        document.body.style.background = "#2f2f2f";
    } else {
        localStorage.setItem("selectedTheme", "light");
        document.body.style.background = "#FFF";
    }
}

window.onload = function () {
    document.body.style.background = (localStorage.getItem("selectedTheme") === "light" ? "#FFF" : "#EEEAEA");
}

window.onclick = function (event) {
    if (toggled) {
        toggled = false;
        return;
    }
    var navBody = document.getElementById('navBody');
    var clickedInsidePopup = navBody.contains(event.target);

    if (!event.target.matches('#myDropDown') && !clickedInsidePopup) {
        const dropdown = document.getElementById("myDropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
