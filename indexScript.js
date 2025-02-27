document.getElementById('btn-yes').addEventListener('click', function() {
  window.location.href = 'indexPage2.html';
});

document.getElementById('btn-no').addEventListener('click', function() {

  if (window.location.pathname.includes('indexPage2.html')) {

      let messages = [
          "😭 soch lo 😭",
          "😢chlo na.sth mai khayngai.. 😢",
          "😭mere liy ny chlogii ky 😭",
          "😩 please please 😩"
      ];

      let randomMessage = messages[Math.floor(Math.random() * messages.length)];
      let btnNo = document.getElementById('btn-no');

      // Update the button message
      if (btnNo.innerHTML !== randomMessage) {
        btnNo.innerHTML = randomMessage;
      } else {
        btnNo.innerHTML = "No";
      }

      // Remove any previous GIF
      let gifContainer = document.getElementById('gif-container');
      if (gifContainer) {
        gifContainer.remove();
      }

      // Create a new container for the GIF
      gifContainer = document.createElement('div');
      gifContainer.id = 'gif-container';
      document.body.appendChild(gifContainer);

      // Create an img element for the GIF
      let gifImage = document.createElement('img');

      // Array of provided GIF URLs
      let gifArray = [
          'https://media.tenor.com/UdThavVus9oAAAAi/peach-and.gif',
          'https://media.tenor.com/kZ0XPsvtqw8AAAAj/cat-farsi-sad.gif',
          'https://media.tenor.com/lI1b3RZqGe8AAAAi/crying.gif',
          'https://media.tenor.com/_28-tA-sTvwAAAAi/chibi-cat-mochi-cat.gif'
      ];

      // Select a random GIF
      let randomGif = gifArray[Math.floor(Math.random() * gifArray.length)];
      console.log("Selected GIF:", randomGif); // Debug log

      // Set the image source and alt text
      gifImage.src = randomGif;
      gifImage.alt = 'Random Crying Cat GIF';

      // Handle errors if the GIF URL cannot be loaded
      gifImage.onerror = function() {
        console.error("Failed to load GIF:", randomGif);
        gifContainer.innerHTML = "⚠️ GIF failed to load. Please try again.";
      };

      // Add the image to the container
      gifContainer.appendChild(gifImage);
  }
});

document.getElementById('btn-yes').addEventListener('click', function() {
  window.location.href = 'indexPage3.html';
});
