(()=>{new Swiper(".images-menu",{slidesPerView:"auto",spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0}}),GLightbox({selector:".image-popup",title:!1});var e=document.querySelector("#loadmore");if(e){var r=3;e.addEventListener("click",(function(e){var t=[].concat(function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(document.querySelectorAll(".list .list-element")));if(t){for(var i=r;i<r+3;i++)t[i]&&(t[i].style.display="block");(r+=3)>=t.length&&(event.target.style.display="none")}}))}})();