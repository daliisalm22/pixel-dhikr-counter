let isMuted = false;
const volumeBtn = document.getElementById('volume-btn');
const volumeOnSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="2 -2 24 24" width="24" height="24"><path d="M13 22h-2v-2H9v-2h2V6H9V4h2V2h2v20Zm-4-4H7v-2h2v2Zm10 0h-4v-2h4v2ZM7 10H5v4h2v2H3V8h4v2Zm14 6h-2V8h2v8Zm-4-2h-2v-4h2v4ZM9 8H7V6h2v2Zm10 0h-4V6h4v2Z"/></svg>`;
const volumeOffSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="2 -2 24 24" width="24" height="24"><path d="M17 22h-2v-2h-2v-2h2V6h-2V4h2V2h2v20Zm-4-4h-2v-2h2v2ZM11 8v2H9v4h2v2H7V8h4Zm2 0h-2V6h2v2Z"/></svg>`;
volumeBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted){
        volumeBtn.innerHTML = volumeOffSVG;
    }
    else {
        volumeBtn.innerHTML = volumeOnSVG;
        clickSound2.currentTime = 0;
        clickSound.play();
    }
});


const colorButtons = document.querySelectorAll('.color-btn');
const clickSound2 = document.getElementById('click-sound-2');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const chosenColor = button.getAttribute('data-color');
        document.body.style.backgroundColor = chosenColor;
        if (!isMuted){
            clickSound2.currentTime = 0;
            clickSound2.play();
        }
    });
});


const dhikrs = [
    {english: "Subhanallah", arabic: "سُبْحَانَ ٱللَّٰهِ"},
    {english: "Alhamdulillah", arabic: "ٱلْحَمْدُ لِلَّٰهِ"},
    {english: "La ilaha illalah", arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ"},
    {english: "Allahu akbar", arabic: "ٱللَّٰهُ أَكْبَرُ"},
    {english: "Astaghfirullah", arabic: "أَسْتَغْفِرُ ٱللَّٰهَ"},
    {english: "Subhanallahi wa bihamdihi", arabic: "سُبْحَانَ ٱللَّٰهِ وَبِحَمْدِهِ"},
    {english: "Subhanallahi-Adheem", arabic: "سُبْحَانَ ٱللَّٰهِ ٱلْعَظِيمِ"},
    {english: "La hawla wala quwwata illa billah", arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ"},
    {english: "Allahumma salli 'ala Muhammad", arabic: "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ"},
    {english: "Hasbunallah wa ni'mal-wakil", arabic: "حَسْبُنَا ٱللَّٰهُ وَنِعْمَ ٱلْوَكِيلُ"},
];
let currentIndex = localStorage.getItem('dhikrIndex') ? parseInt(localStorage.getItem('dhikrIndex')) : 0;
let dhikrCounts = JSON.parse(localStorage.getItem('dhikrCounts')) || {};
const englishDisplay = document.getElementById('english-text');
const arabicDisplay = document.getElementById('arabic-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const countDisplay = document.getElementById('count-display');
const counterBtn = document.getElementById('counter-btn');
const resetBtn = document.getElementById('reset-btn');
const clickSound = document.getElementById('click-sound');
function updateDhikrDisplay(){
    englishDisplay.textContent = dhikrs[currentIndex].english;
    arabicDisplay.textContent = dhikrs[currentIndex].arabic;
    let currentCount = dhikrCounts[currentIndex] || 0;
    countDisplay.textContent = currentCount;
}
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dhikrs.length;
    localStorage.setItem('dhikrIndex', currentIndex);
    updateDhikrDisplay();
    if (!isMuted){
        clickSound2.currentTime = 0;
        clickSound2.play();
    }
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dhikrs.length) % dhikrs.length;
    localStorage.setItem('dhikrIndex', currentIndex);
    updateDhikrDisplay();
    if (!isMuted){
        clickSound2.currentTime = 0;
        clickSound2.play();
    }
});



counterBtn.addEventListener('click', () => {
    let currentCount = dhikrCounts[currentIndex] || 0;
    currentCount++;
    countDisplay.textContent = currentCount;
    dhikrCounts[currentIndex] = currentCount;
    localStorage.setItem('dhikrCounts', JSON.stringify(dhikrCounts));
    if (!isMuted){
        clickSound.currentTime = 0;
        clickSound.play();
    }
});
resetBtn.addEventListener('click', () => {
    currentCount = 0;
    countDisplay.textContent = currentCount;
    localStorage.setItem('dhikrCounts', JSON.stringify(dhikrCounts));
    if (!isMuted){
        clickSound.currentTime = 0;
        clickSound.play();
    }
});
updateDhikrDisplay();


const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const closeModal = document.getElementById('close-modal');
infoBtn.addEventListener('click', () => {
    infoModal.style.display = 'flex';
    if (!isMuted) {
        clickSound2.currentTime = 0;
        clickSound2.play();
    }
});
closeModal.addEventListener('click', () => {
    infoModal.style.display = 'none';
    if (!isMuted){
        clickSound2.currentTime = 0;
        clickSound2.play();
    }
});
