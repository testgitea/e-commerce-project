Document.addEventListener("DOMContentLoaded",function(){
    const scrollcontainer = 
    document.querySelector(".scroll-container");
    const scrollImage = document.getElementById("scrollImage");
    let scrollValue = 0;
    window.addEventListener("scroll",function(){
        scrollValue = window.scrollY;
        scrollImage = Style.transform = 'translateY(-${scrollvalue}px)';
    });
});

