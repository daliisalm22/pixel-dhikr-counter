const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const chosenColor = button.getAttribute('data-color');
        document.body.style.backgroundColor = chosenColor;
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
let currentIndex = 0;
const englishDisplay = document.getElementById('english-text');
const arabicDisplay = document.getElementById('arabic-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
function updateDhikrDisplay(){
    englishDisplay.textContent = dhikrs[currentIndex].english;
    arabicDisplay.textContent = dhikrs[currentIndex].arabic;
}
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dhikrs.length;
    updateDhikrDisplay();
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dhikrs.length) % dhikrs.length;
    updateDhikrDisplay();
});
updateDhikrDisplay();


let currentCount = 0;
const countDisplay = document.getElementById('count-display');
const counterBtn = document.getElementById('counter-btn');
const resetBtn = document.getElementById('reset-btn');
counterBtn.addEventListener('click', () => {
    currentCount++;
    countDisplay.textContent = currentCount;
})
resetBtn.addEventListener('click', () => {
    currentCount = 0;
    countDisplay.textContent = currentCount;
})
