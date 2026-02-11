const words = ["Full Stack Developer", "Java Specialist", "UI Enthusiast"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
    currentWord = words[i];

    if (!isDeleting) {
        document.querySelector(".typing").textContent = currentWord.slice(0, j++);
        if (j > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.querySelector(".typing").textContent = currentWord.slice(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
