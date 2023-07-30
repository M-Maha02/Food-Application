function toggleContent() {
        var aboutContent = document.getElementById("aboutContent");
        var toggleButton = document.getElementById("toggleButton");
      
        if (aboutContent.style.display === "none") {
          aboutContent.style.display = "block";
          toggleButton.textContent = "Read Less";
        } else {
          aboutContent.style.display = "none";
          toggleButton.textContent = "Read More";
        }
      }