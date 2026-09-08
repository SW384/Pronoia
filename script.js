function showPage(pageName){
    const sections = document.querySelectorAll("section");
    sections.forEach(section =>{
        section.style.display = "none";
    });
    document.getElementById(pageName).style.display = "block";
}

showPage("home");