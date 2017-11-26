function myfunction() {
    
document.getElementById("myDropdown").classlist.toggle("show");   
}

window.onclick = function(event)  {
    if  (!event.targe.matches('.dropdown'))  {
        var dropdowns =
            document.getElementByClassName("menulinks");
        var i;
        for (i=0; i <dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show'))  {
                openDropdown.classList.remove('show');
            }
        }
    }
}