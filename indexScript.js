document.addEventListener("DOMContentLoaded", function () {
    let btnYes = document.getElementById('btn-yes');
    let btnNo = document.getElementById('btn-no');

    if (btnYes) {
        btnYes.addEventListener('click', function () {
            window.location.href = 'indexPage2.html';
        });
    }

    if (btnNo) {
        btnNo.addEventListener('click', function () {
            let messages = [
                "😭 soch lo 😭",
                "😢 chlo na.sth mai khayngai.. 😢",
                "😭 mere liy ny chlogii ky 😭",
                "😩 please please 😩"
            ];

            let randomMessage = messages[Math.floor(Math.random() * messages.length)];
            btnNo.innerHTML = btnNo.innerHTML !== randomMessage ? randomMessage : "Ji Nhi";

            let gifContainer = document.getElementById('gif-container');
            if (!gifContainer) {
                gifContainer = document.createElement('div');
                gifContainer.id = 'gif-container';
                document.body.appendChild(gifContainer);
            } else {
                gifContainer.innerHTML = "";
            }

            let gifArray = [
                'https://media.tenor.com/UdThavVus9oAAAAi/peach-and.gif',
                'https://media.tenor.com/kZ0XPsvtqw8AAAAj/cat-farsi-sad.gif',
                'https://media.tenor.com/lI1b3RZqGe8AAAAi/crying.gif',
                'https://media.tenor.com/_28-tA-sTvwAAAAi/chibi-cat-mochi-cat.gif'
            ];

            let randomGif = gifArray[Math.floor(Math.random() * gifArray.length)];
            let gifImage = document.createElement('img');
            gifImage.src = randomGif;
            gifImage.alt = 'Random Crying Cat GIF';

            gifImage.onerror = function () {
                gifContainer.innerHTML = "⚠️ GIF failed to load. Please try again.";
            };

            gifContainer.appendChild(gifImage);
        });
    }
});
