const colorButtons = document.querySelectorAll('.color-btn');
const clickSound2 = document.getElementById('click-sound-2');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const chosenColor = button.getAttribute('data-color');
        document.body.style.backgroundColor = chosenColor;
        clickSound2.currentTime = 0;
        clickSound2.play();
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
    clickSound2.currentTime = 0;
    clickSound2.play();
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dhikrs.length) % dhikrs.length;
    localStorage.setItem('dhikrIndex', currentIndex);
    updateDhikrDisplay();
    clickSound2.currentTime = 0;
    clickSound2.play();
});



counterBtn.addEventListener('click', () => {
    let currentCount = dhikrCounts[currentIndex] || 0;
    currentCount++;
    countDisplay.textContent = currentCount;
    dhikrCounts[currentIndex] = currentCount;
    localStorage.setItem('dhikrCounts', JSON.stringify(dhikrCounts));
    clickSound.currentTime = 0;
    clickSound.play();
});
resetBtn.addEventListener('click', () => {
    currentCount = 0;
    countDisplay.textContent = currentCount;
    localStorage.setItem('dhikrCounts', JSON.stringify(dhikrCounts));
    clickSound.currentTime = 0;
    clickSound.play();
});
updateDhikrDisplay();