document.addEventListener('DOMContentLoaded', function() {
    const ratingSection = document.getElementById('ratingSection');
    const thankYouSection = document.getElementById('thankYouSection');
    const submitButton = document.getElementById('submitBtn');
    
    submitButton.addEventListener('click', function() {
      
      
      // Get the selected choice
      const selectedChoice = document.querySelector(".numbers .selected").innerText;
      // Hide rating section and show thank you section
      ratingSection.style.display = 'none';
      thankYouSection.style.display = 'block';
      // Display selected choice in thank you section
      document.getElementById("result").innerText = `You  selected ${selectedChoice} out of 5`;
    });

    // Add click event listeners to rating stars
    const ratingStars = document.querySelectorAll(".numbers span");
    ratingStars.forEach(star => {
      star.addEventListener('click', function() {
        // Remove 'selected' class from all stars
        ratingStars.forEach(s => s.classList.remove('selected'));
        // Add 'selected' class to clicked star
        this.classList.add('selected');
      });
    });
  });