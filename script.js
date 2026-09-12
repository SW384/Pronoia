function showPage(pageName){
    const sections = document.querySelectorAll("section");
    sections.forEach(section =>{
        section.style.display = "none";
    });
    const page = document.getElementById(pageName);
    if (page) {
        page.style.display = "block";
        window.scrollTo(0, 0);
    }
    const navLinks = document.querySelectorAll(".top-link");
    navLinks.forEach(link => {
        link.classList.remove("active");
    });
    const activeLink = document.querySelector(
        `.top-link[onclick="showPage('${pageName}')"]`
    );
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

showPage("home");