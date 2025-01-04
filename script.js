document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
});

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const slideCount = dots.length;
const slideDuration = 6000; // 6 Sekunden

// Funktion zum Aktualisieren des Sliders
function updateSlider() {
    const offset = -currentIndex * 100; // Verschiebe den Slider
    slides.style.transform = `translateX(${offset}%)`;

    // Dots aktualisieren
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Automatischer Wechsel der Slides
function autoSlide() {
    currentIndex = (currentIndex + 1) % slideCount; // Schleife zurück zum ersten Slide
    updateSlider();
}

// Klick-Ereignisse für die Dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index); // Wechsle zu diesem Slide
        updateSlider();
    });
});

// Starte die automatische Animation
setInterval(autoSlide, slideDuration);

// Initialisierung des Sliders
updateSlider();

//Textanimation
const words = ["Kommunikationsdesign", "Multimedia", "Content Creation"];
let index = 0;
const element = document.getElementById("animated-text");
let currentWord = words[index];

function typeAndDelete() {
    let currentText = currentWord;
    let textLength = currentText.length;
    let currentChar = 0;
    
    // Schreibanimation
    function typing() {
        if (currentChar < textLength) {
            element.textContent += currentText[currentChar];
            currentChar++;
            setTimeout(typing, 100); // Intervall zwischen den Zeichen
        } else {
            setTimeout(deleteText, 5000); // Nach einer Sekunde löschen
        }
    }

    // Löschanimation
    function deleteText() {
        if (currentChar > 0) {
            currentChar--;
            element.textContent = currentText.substring(0, currentChar);
            setTimeout(deleteText, 50); // Intervall zwischen den Löschungen
        } else {
            index = (index + 1) % words.length; // Nächster Text
            currentWord = words[index];
            setTimeout(typeAndDelete, 1000); // Startet den Schreibvorgang erneut
        }
    }

    typing();
}

typeAndDelete(); // Startet die Animation

//Projects
const projectsData = {
    fotos: [
        { name: 'Foto 1', image: './MediaFile/Projects/Fotos/Produktfotografie.webp', link: 'https://adobe.ly/4gWRVap' },
        { name: 'Foto 2', image: './MediaFile/Projects/Fotos/Portraitfotografie.webp', link: 'https://adobe.ly/4gYvP7s' },
        { name: 'Foto 3', image: './MediaFile/Projects/Fotos/Landschaftsfotografie.webp', link: 'https://adobe.ly/4fAMuNe' },
        { name: 'Foto 4', image: './MediaFile/Projects/Fotos/Cityfotografie.webp', link: 'https://adobe.ly/4gzVALu' }
    ],
    videos: [
        { name: 'Video 1', image: './MediaFile/Projects/Videos/30Jahre.webp', link: 'https://www.youtube.com/watch?v=uvoa-H4TQe8' },
        { name: 'Video 2', image: './MediaFile/Projects/Videos/diaflex.webp', link: 'https://www.youtube.com/watch?v=hKhUSWUs4lU' },
        { name: 'Video 3', image: './MediaFile/Projects/Videos/iSTORAGE.webp', link: 'https://www.youtube.com/watch?v=N0OsfbLp3jQ' },
        { name: 'Video 4', image: './MediaFile/Projects/Videos/Lampensortiment.webp', link: 'https://www.youtube.com/watch?v=IPmXIaM6siM' },
        { name: 'Video 5', image: './MediaFile/Projects/Videos/MAXMOBIL.webp', link: 'https://www.youtube.com/watch?v=KOx783_YUbU' }
    ],
    print: [
        { name: 'Print 1', image: './MediaFile/Projects/Print/Blickfang/BlickfangVIII.webp', link: '#' },
        { name: 'Print 2', image: './MediaFile/Projects/Print/Blickfang/BlickfangIX.webp', link: '#' },
        { name: 'Print 3', image: './MediaFile/Projects/Print/Funke/Funke1.webp', link: '#' },
        { name: 'Print 4', image: './MediaFile/Projects/Print/DiamantFaltflyer/DiamantFaltflyer.webp', link: '#' },
        { name: 'Print 5', image: './MediaFile/Projects/Print/Rollups/JUBI.webp', link: '#' },
        { name: 'Print 6', image: './MediaFile/Projects/Print/Rollups/BLK.webp', link: '#' },
        { name: 'Print 7', image: './MediaFile/Projects/Print/Baubit/BaubitBroschuere.webp', link: '#' },
        { name: 'Print 8', image: './MediaFile/Projects/Print/Viacid/Viacid.webp', link: '#' },
        { name: 'Print 9', image: './MediaFile/Projects/Print/SmartFarm/SmartFarm.webp', link: '#' },
        { name: 'Print 10', image: './MediaFile/Projects/Print/JenPa/JenPa.webp', link: '#' },
        { name: 'Print 11', image: './MediaFile/Projects/Print/DungeonCorridors/DungeonCorridors.webp', link: '#' },
        { name: 'Print 12', image: './MediaFile/Projects/Print/DungeonCorridors/Box.webp', link: '#' }
    ],
    web: [
        { name: 'Web 1', image: './MediaFile/Projects/Web/RECA_AG_Onlineshop.webp', link: 'https://shop.reca.ch/de/DE/CHF/' },
        { name: 'Web 2', image: './MediaFile/Projects/Web/RECA_AG_Website.webp', link: 'https://www.reca.ch/de/' },
        { name: 'Web 3', image: './MediaFile/Projects/Web/Viacid_AG_Website.webp', link: 'https://viacid.ch/' },
        { name: 'Web 3', image: './MediaFile/Projects/Web/Aufnahmewebsite.webp', link: '#' },
        { name: 'Web 5', image: './MediaFile/Projects/Web/graphis.webp', link: 'https://patricksager1996.github.io/Web-Projekte/graphis-Plakat/' },
        { name: 'Web 6', image: './MediaFile/Projects/Web/bill.webp', link: 'https://patricksager1996.github.io/Web-Projekte/bill-Plakat/' }
        
    ],
    systeme: [
        { name: 'System 1', image: './MediaFile/Projects/Systeme/Reca_App.webp', link: 'https://example.com/system1' },
        { name: 'System 2', image: './MediaFile/Projects/Systeme/elVIS.webp', link: 'https://example.com/system2' }
    ]
};

let currentCategory = 'fotos';
let visibleProjects = 6;

function displayProjects() {
    const projectsContainer = document.getElementById('projects');
    projectsContainer.innerHTML = '';
    projectsData[currentCategory].slice(0, visibleProjects).forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const imgElement = document.createElement('img');
        imgElement.src = project.image;
        projectElement.appendChild(imgElement);

        const spanElement = document.createElement('span');
        spanElement.textContent = project.name;
        projectElement.appendChild(spanElement);

        const linkElement = document.createElement('a');
        linkElement.href = project.link;
        linkElement.target = '_blank';
        projectElement.appendChild(linkElement);

        projectsContainer.appendChild(projectElement);
    });
}

function filterProjects(category) {
    currentCategory = category;
    visibleProjects = 6;
    document.querySelectorAll('.navbar button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.navbar button[onclick="filterProjects('${category}')"]`).classList.add('active');
    displayProjects();
}

function loadMoreProjects() {
    visibleProjects += 6;
    displayProjects();
}

// Initialer Aufruf
displayProjects();
filterProjects('web');

//Circle
document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { id: 1, percent: 70 },
        { id: 2, percent: 60 },
        { id: 3, percent: 60 },
        { id: 4, percent: 30 },
        { id: 5, percent: 60 },
        { id: 6, percent: 70 }
    ];

    const animationDuration = 2000; // Animation in Millisekunden
    const intervalTime = 10; // Intervallzeit

    skills.forEach(skill => {
        const circle = document.getElementById(`circle-${skill.id}`);
        const percentText = document.getElementById(`percent-text-${skill.id}`);

        let currentPercent = 0;
        const step = skill.percent / (animationDuration / intervalTime);

        const interval = setInterval(() => {
            currentPercent += step;
            if (currentPercent >= skill.percent) {
                currentPercent = skill.percent;
                clearInterval(interval);
            }

            circle.style.background = `conic-gradient(
                var(--portfolio-maincolor) ${currentPercent}%,
                var(--portfolio-backgroundcolor) ${currentPercent}% 
            )`;
            percentText.textContent = `${Math.round(currentPercent)}%`;
        }, intervalTime);
    });
});