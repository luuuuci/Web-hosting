

// HEADER

const links = document.querySelectorAll(".link-header");

  links.forEach(link => {
    if(link.href === window.location.href){
      link.classList.add("active");
    }
  });






const section = document.querySelector(".tools-section");
const bars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries) => {

if(entries[0].isIntersecting){

bars.forEach((bar, index) => {

let value = bar.dataset.value;

setTimeout(() => {

bar.style.width = value + "%";

}, index * 200);

});

}

}, { threshold: 0.4 });

if (section) {
  observer.observe(section);
}











