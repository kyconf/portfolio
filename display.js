document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running!");
    window.scrollTo(0, 0);
  });
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
    var animatedBox = document.getElementById('sectText');
    
  
    entry.target.classList.add('change')
    document.body.classList.add('change');
    animatedBox.classList.remove('sectText');
  void animatedBox.offsetWidth; 
  animatedBox.classList.add('sectText');
} else {
  var animated = document.getElementById('titleText');
  animated.classList.remove('titleText');
  void animated.offsetWidth; 
  animated.classList.add('titleText');
  entry.target.classList.remove('change')
  document.body.classList.remove('change');
  
        
    
        }
    });
});

const hiddenElements = document.querySelectorAll('.sect1');

hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => { //section 2 projects
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
       


     
            }
        });
    });
    
    const hiddenElements2 = document.querySelectorAll('.sect2');
    
    hiddenElements2.forEach((el) => observer2.observe(el));


    var hoverAbout = document.getElementById("aboutText");
    var hover = document.getElementById("education");

    // Add a mouseover event listener
    hoverAbout.addEventListener("mouseover", function() {
      hover.style.display= 'block';
    });

    // Add a mouseout event listener
    hoverAbout.addEventListener("mouseout", function() {
      // Code to be executed when the mouse leaves the element
      console.log("Mouseout event triggered");
      hover.style.display= 'none';
    });

 
/* 
  var animatedText = document.getElementById('titleText');
animatedText.classList.remove('titleText');
        void animatedText.offsetWidth; 
        animatedText.classList.add('titleText');
        
  */
    