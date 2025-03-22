
$(document).ready(function(){

  const sections = document.querySelectorAll('.section');
  const container = document.querySelector('.gallery');
  
  function updateBackgrounds() {
      const width = window.innerWidth;
      
      sections.forEach((section, index) => {
          const background = section.querySelector('.background');
          const theme = ["../3D/media/NN-1.jpg", "../3D/media/quilt-2.jpg", "../arch/media/newburgh-2.JPG", "../3D/media/VRT-showcase.png", "../arch/media/flood-1.JPG", "../ui-ux/media/ambient-4.png", "../3D/media/dml-2.gif"][index % 7];
          
          if (width < 600) {
              // Small screens (mobile)
              background.style.backgroundImage = `url(${theme})`; //<!-- add -sm to this -->
          } else if (width < 1024) {
              // Medium screens (tablet)
              background.style.backgroundImage = `url(${theme})`; // add -md to this
          } else {
              // Large screens (desktop)
              background.style.backgroundImage = `url(${theme})`; // add -lg to this
          }
      });
  }
// Function to check if section is in view
function checkSectionVisibility() {
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const isInView = (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= window.innerHeight &&
              rect.right <= window.innerWidth
          );
          
          if (isInView) {
              section.classList.add('in-view');
              console.log("IN VIew, world!"); // Outputs "Hello, world!" to the console
          } else {
              section.classList.remove('in-view');
              console.log("NOTINVIEW, world!"); // Outputs "Hello, world!" to the console
          }
      });
  }
}

// Prevent scrolling past boundaries
function preventOverscroll() {
  container.addEventListener('wheel', (e) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      
      // At the top and trying to scroll up
      if (scrollTop <= 0 && e.deltaY < 0) {
          e.preventDefault();
      }
      
      // At the bottom and trying to scroll down
      if (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0) {
          e.preventDefault();
      }
  }, { passive: false });
  
  // Prevent touch overscroll for mobile
  container.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
  }, { passive: false });
  
  container.addEventListener('touchmove', (e) => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const currentY = e.touches[0].clientY;
      const direction = startY - currentY;
      
      // Scrolling up at the top
      if (scrollTop <= 0 && direction < 0) {
          e.preventDefault();
      }
      
      // Scrolling down at the bottom
      if (scrollTop + clientHeight >= scrollHeight && direction > 0) {
          e.preventDefault();
      }
  }, { passive: false });
}

// Set backgrounds on page load
updateBackgrounds();

// Set up scroll prevention
let startY;
preventOverscroll();

// Add scroll event listener to detect when sections come into view
container.addEventListener('scroll', checkSectionVisibility);
window.addEventListener('resize', () => {
  updateBackgrounds();
  checkSectionVisibility();
});

// Initial check for visible sections
checkSectionVisibility();


  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
        scrollLeft: $(hash).offset().left
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

