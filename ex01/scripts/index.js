var thumbnails = document.querySelectorAll(".thumbnail");
var overlays = document.querySelectorAll(".overlay");
var modalLinks = document.querySelectorAll(".modal-link");
var modal = document.querySelector(".modal");
var modalImage = document.querySelector(".modal-image");
var modalText = document.querySelector(".modal-text");

thumbnails.forEach(thumbnail => {
   thumbnail.addEventListener("mouseover", function(e) {
       var black = e.target.nextElementSibling;
       black.classList.add("black");
       var title = e.target.title;
       var heading = e.target.nextElementSibling.childNodes[1];
       heading.innerText = title;
    });    
});

overlays.forEach(overlay => {
   overlay.addEventListener("mouseleave", function(e){
   e.target.childNodes[1].innerText = "";
   e.target.classList.remove("black");
   });
});

modalLinks.forEach(modalLink => {
   modalLink.addEventListener("click", function(e) {
   modal.style.display = "block";
   var overlay = e.target.offsetParent;
   var thumbnailSrc = overlay.offsetParent.childNodes[1].getAttribute('data-original');
   var iframeSrc = overlay.offsetParent.childNodes[5].getAttribute('data-original');
   modalImage.src = thumbnailSrc;
   modalText.src = iframeSrc;
   });
});


modal.addEventListener("click", function(e) {
   if(e.target.classList.contains("modal")) {
      modal.style.display = "none";
   }
});