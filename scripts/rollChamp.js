let currentRollLevels = new Set();
let currentUserRef = null;
let boughtChamps = [];

const tierChances = {
    1: { D: 85, C: 15 },
    2: { D: 60, C: 25, B: 15 },
    3: { D: 40, C: 35, B: 24, A: 1 },
    4: { D: 25, C: 35, B: 30, A: 10 },
    5: { D: 15, C: 29, B: 30, A: 20, S: 10, Z: 1 },
    6: { D: 12, C: 20, B: 20, A: 30, S: 12, Z: 6 },
    7: { D: 8.5, C: 15, B: 20, A: 25, S: 20, Z: 11, GOD: 0.5 },
    8: { D: 5, C: 9, B: 18, A: 25, S: 22, Z: 18, GOD: 3 },
    9: { D: 3.5, C: 9, B: 15, A: 23, S: 25, Z: 20, GOD: 4.5 }
};
function getSellRefund(cost) {
    switch (cost) {
        case 1: return 1;
        case 2: return 2;
        case 3:
        case 4: return 3;
        case 5:
        case 6: return 4;
        case 7: return 5;
        case 8:
        case 9: return 6;
        case 10: return 7;
        case 12: return 8;
        case 15: return 0;
        default: return 0;
    }
}
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUserRef = firebase.firestore()
            .collection("tables").doc("sharedTable")
            .collection("players").doc(user.uid);

        currentUserRef.get().then(doc => {
            if (doc.exists) {
                const data = doc.data();
                const gold = data.gold || 0;
                document.getElementById("gold-display").textContent = `Vàng: ${gold}`;

                // 🔁 Restore previously bought champs on reload
                boughtChamps = data.champs || [];
                displayBoughtChamps();
            }
        });
    }
});




const champions = {
    D: [
        { name: "Mr Satan", cost: 1, img: "images/champs/1.webp", tier: "D" },
        { name: "Master Roshi Max Power", cost: 2, img: "images/champs/2.webp", tier: "D" },
        { name: "Videl", cost: 1, img: "images/champs/3.webp", tier: "D" },
        { name: "Master Roshi", cost: 1, img: "images/champs/4.webp", tier: "D" },
        { name: "Spopovich", cost: 1, img: "images/champs/5.webp", tier: "D" },
        { name: "Yajirobe", cost: 2, img: "images/champs/6.webp", tier: "D" },
        { name: "Saibaman", cost: 1, img: "images/champs/7.webp", tier: "D" },
        { name: "Chiaotzu", cost: 1, img: "images/champs/8.webp", tier: "D" },
        { name: "Frieza Soldier", cost: 1, img: "images/champs/9.webp", tier: "D" },
        { name: "Recoome", cost: 1, img: "images/champs/11.webp", tier: "D" },
        { name: "Nappa", cost: 1, img: "images/champs/12.webp", tier: "D" },
        { name: "Jeice", cost: 2, img: "images/champs/13.webp", tier: "D" },
        { name: "Yamcha", cost: 1, img: "images/champs/14.webp", tier: "D" },
        { name: "Krillin", cost: 2, img: "images/champs/15.webp", tier: "D" },
        { name: "Dodoria", cost: 1, img: "images/champs/16.webp", tier: "D" },
        { name: "Zarbon", cost: 1, img: "images/champs/17.webp", tier: "D" },
        { name: "Super Zarbon", cost: 2, img: "images/champs/18.webp", tier: "D" },
        { name: "Raditz", cost: 1, img: "images/champs/19.webp", tier: "D" },
        { name: "Goku (Teen)", cost: 1, img: "images/champs/20.webp", tier: "D" },
        { name: "Pan (GT)", cost: 1, img: "images/champs/21.webp", tier: "D" },
        { name: "Cell Jr.", cost: 1, img: "images/champs/22.webp", tier: "D" },
        { name: "Gohan (Kid)", cost: 1, img: "images/champs/23.webp", tier: "D" },
        { name: "Cui", cost: 1, img: "images/champs/24.webp", tier: "D" },
        { name: "Babidi", cost: 1, img: "images/champs/25.webp", tier: "D" },
        { name: "Burter", cost: 2, img: "images/champs/26.webp", tier: "D" }
    ],
    C: [
        { name: "Dr. Wheelo", cost: 3, img: "images/champs/27.webp", tier: "C" },
        { name: "Tapion", cost: 4, img: "images/champs/28.webp", tier: "C" },
        { name: "Mini Goku (Daima)", cost: 4, img: "images/champs/29.webp", tier: "C" },
        { name: "Vegeta (Z-Scouter)", cost: 3, img: "images/champs/30.webp", tier: "C" },
        { name: "Bardock", cost: 3, img: "images/champs/31.webp", tier: "C" },
        { name: "Uub (GT)", cost: 3, img: "images/champs/32.webp", tier: "C" },
        { name: "Base Goku (Z-Early)", cost: 4, img: "images/champs/33.webp", tier: "C" },
        { name: "Glorio", cost: 4, img: "images/champs/34.webp", tier: "C" },
        { name: "Super Garlic Jr.", cost: 3, img: "images/champs/35.webp", tier: "C" },
        { name: "Ginyu", cost: 4, img: "images/champs/36.webp", tier: "C" },
        { name: "Lord Slug", cost: 3, img: "images/champs/37.webp", tier: "C" },
        { name: "King Cold", cost: 3, img: "images/champs/38.webp", tier: "C" },
        { name: "Android 19", cost: 3, img: "images/champs/39.webp", tier: "C" },
        { name: "Piccolo", cost: 3, img: "images/champs/40.webp", tier: "C" },
        { name: "Tien", cost: 3, img: "images/champs/41.webp", tier: "C" },
        { name: "Nail", cost: 3, img: "images/champs/42.webp", tier: "C" },
        { name: "Dr. Gero", cost: 3, img: "images/champs/43.webp", tier: "C" },
        { name: "Great Saiyanman", cost: 4, img: "images/champs/44.webp", tier: "C" },
        { name: "Base Goten", cost: 3, img: "images/champs/45.webp", tier: "C" },
        { name: "Kid Trunks", cost: 3, img: "images/champs/46.webp", tier: "C" },
        { name: "Turles", cost: 3, img: "images/champs/47.webp", tier: "C" },
    ],
    B: [
        { name: "Mini Vegeta", cost: 6, img: "images/champs/48.webp", tier: "B" },
        { name: "Base Gohan (SH)", cost: 6, img: "images/champs/49.webp", tier: "B" },
        { name: "Base Adult Gohan", cost: 5, img: "images/champs/50.webp", tier: "B" },
        { name: "Base Sworld Trunks", cost: 5, img: "images/champs/51.webp", tier: "B" },
        { name: "Base Teen Gohan", cost: 6, img: "images/champs/52.webp", tier: "B" },
        { name: "SSJ Mini Goku", cost: 5, img: "images/champs/53.webp", tier: "B" },
        { name: "Base Broly (Z)", cost: 6, img: "images/champs/54.webp", tier: "B" },
        { name: "Great Ape Vegeta", cost: 5, img: "images/champs/55.webp", tier: "B" },
        { name: "Base Goku (Super)", cost: 6, img: "images/champs/56.webp", tier: "B" },
        { name: "Base Goku (GT)", cost: 6, img: "images/champs/57.webp", tier: "B" },
        { name: "Baby Vegeta", cost: 6, img: "images/champs/58.webp", tier: "B" },
        { name: "Base Broly", cost: 6, img: "images/champs/59.webp", tier: "B" },
        { name: "Base Future Gohan", cost: 5, img: "images/champs/60.webp", tier: "B" },
        { name: "Base Kale", cost: 5, img: "images/champs/61.webp", tier: "B" },
        { name: "Frieza 1st Form", cost: 5, img: "images/champs/62.webp", tier: "B" },
        { name: "Frieza 2nd Form", cost: 5, img: "images/champs/63.webp", tier: "B" },
        { name: "Frieza 3rd Form", cost: 6, img: "images/champs/64.webp", tier: "B" },
        { name: "Base Caulifla", cost: 5, img: "images/champs/65.webp", tier: "B" },
        { name: "Zamasu", cost: 5, img: "images/champs/66.webp", tier: "B" },
        { name: "Android 16", cost: 5, img: "images/champs/67.webp", tier: "B" },
        { name: "Base Goku Black", cost: 6, img: "images/champs/68.webp", tier: "B" },
        { name: "Android 18", cost: 6, img: "images/champs/69.webp", tier: "B" },
        { name: "Base Goku (Mid)", cost: 5, img: "images/champs/70.webp", tier: "B" },
        { name: "Base Goku (End)", cost: 5, img: "images/champs/71.webp", tier: "B" },
        { name: "Android 13", cost: 5, img: "images/champs/72.webp", tier: "B" },
        { name: "Base Vegeta (Super)", cost: 6, img: "images/champs/73.webp", tier: "B" },
        { name: "SSJ Mini Vegeta", cost: 6, img: "images/champs/74.webp", tier: "B" },
        { name: "Ribrianne", cost: 5, img: "images/champs/75.webp", tier: "B" },
        { name: "Piccolo (SH)", cost: 6, img: "images/champs/76.webp", tier: "B" },
        { name: "Piccolo (Fused W/Kami)", cost: 5, img: "images/champs/77.webp", tier: "B" },
        { name: "Cell 1st Form", cost: 5, img: "images/champs/78.webp", tier: "B" },
        { name: "Cell 2nd Form", cost: 6, img: "images/champs/79.webp", tier: "B" },
        { name: "Base Cabba", cost: 5, img: "images/champs/80.webp", tier: "B" },
        { name: "SSJ Kid Trunks", cost: 5, img: "images/champs/81.webp", tier: "B" },
        { name: "Kakunsa", cost: 5, img: "images/champs/82.webp", tier: "B" },
        { name: "SSJ Goten", cost: 5, img: "images/champs/83.webp", tier: "B" },
        { name: "Base Melee Trunks", cost: 5, img: "images/champs/84.webp", tier: "B" },
        { name: "Android 17 (Z)", cost: 5, img: "images/champs/85.webp", tier: "B" },
        { name: "Janemba", cost: 5, img: "images/champs/86.webp", tier: "B" },
        { name: "Base Future Trunks", cost: 6, img: "images/champs/87.webp", tier: "B" },
        { name: "Giant Lord Slug", cost: 5, img: "images/champs/88.webp", tier: "B" },
        { name: "Bergamo", cost: 5, img: "images/champs/89.webp", tier: "B" },
        { name: "Roasie", cost: 5, img: "images/champs/90.webp", tier: "B" },
        { name: "Majin Kuu", cost: 5, img: "images/champs/91.webp", tier: "B" },
        { name: "Base Vegeta (Z-Early)", cost: 5, img: "images/champs/92.webp", tier: "B" },
        { name: "Base Vegeta (Z-End)", cost: 5, img: "images/champs/93.webp", tier: "B" },
        { name: "Bojack", cost: 5, img: "images/champs/183.webp", tier: "B" },
    ],
    A: [
        { name: "Hirudegarn", cost: 7, img: "images/champs/94.webp", tier: "A" },
        { name: "Base Kefla", cost: 8, img: "images/champs/95.webp", tier: "A" },
        { name: "Super Trunks", cost: 7, img: "images/champs/96.webp", tier: "A" },
        { name: "Super Buu", cost: 8, img: "images/champs/97.webp", tier: "A" },
        { name: "Base Gotenks", cost: 8, img: "images/champs/98.webp", tier: "A" },
        { name: "SSJ Goku (Super)", cost: 7, img: "images/champs/99.webp", tier: "A" },
        { name: "SSJ Goku (GT)", cost: 7, img: "images/champs/100.webp", tier: "A" },
        { name: "SSJ2 Mini Vegeta", cost: 7, img: "images/champs/101.webp", tier: "A" },
        { name: "Android 17 (Super)", cost: 8, img: "images/champs/102.webp", tier: "A" },
        { name: "Frost", cost: 7, img: "images/champs/103.webp", tier: "A" },
        { name: "Frieza 4th Form", cost: 7, img: "images/champs/104.webp", tier: "A" },
        { name: "SSJ Sword Trunks", cost: 7, img: "images/champs/105.webp", tier: "A" },
        { name: "Super Vegeta", cost: 7, img: "images/champs/106.webp", tier: "A" },
        { name: "Frieza (Super)", cost: 7, img: "images/champs/107.webp", tier: "A" },
        { name: "SSJ Vegeta (Super)", cost: 7, img: "images/champs/108.webp", tier: "A" },
        { name: "SSJ Goku (End)", cost: 7, img: "images/champs/109.webp", tier: "A" },
        { name: "SSJ Future Trunks", cost: 7, img: "images/champs/110.webp", tier: "A" },
        { name: "Super Baby 1", cost: 7, img: "images/champs/111.webp", tier: "A" },
        { name: "Mecha Frieza", cost: 7, img: "images/champs/112.webp", tier: "A" },
        { name: "Piccolo (SH) - Power Awakening", cost: 8, img: "images/champs/113.webp", tier: "A" },
        { name: "SSJ Cabba", cost: 7, img: "images/champs/114.webp", tier: "A" },
        { name: "Majin Buu", cost: 7, img: "images/champs/115.webp", tier: "A" },
        { name: "SSJ Melee Trunks", cost: 7, img: "images/champs/116.webp", tier: "A" },
        { name: "SSJ Future Gohan", cost: 7, img: "images/champs/117.webp", tier: "A" },
        { name: "SSJ Teen Gohan", cost: 7, img: "images/champs/118.webp", tier: "A" },
        { name: "SSJ Kale", cost: 7, img: "images/champs/119.webp", tier: "A" },
        { name: "Majuub", cost: 7, img: "images/champs/120.webp", tier: "A" },
        { name: "SSJ2 Vegeta (End)", cost: 8, img: "images/champs/121.webp", tier: "A" },
        { name: "SSJ Vegeta (Early)", cost: 7, img: "images/champs/122.webp", tier: "A" },
        { name: "Majin Buu (Evil)", cost: 8, img: "images/champs/123.webp", tier: "A" },
        { name: "Dyspo", cost: 7, img: "images/champs/124.webp", tier: "A" },
        { name: "Cell Perfect Form", cost: 7, img: "images/champs/180.webp", tier: "A" },
        { name: "Dabura", cost: 7, img: "images/champs/182.webp", tier: "A" },

    ],
    S: [
        { name: "Great Ape Baby", cost: 10, img: "images/champs/126.webp", tier: "S" },
        { name: "SSJ Broly (Z)", cost: 10, img: "images/champs/127.webp", tier: "S" },
        { name: "SSJ Kale (Berserk)", cost: 9, img: "images/champs/128.webp", tier: "S" },
        { name: "Base Vegito", cost: 9, img: "images/champs/129.webp", tier: "S" },
        { name: "Base Gogeta", cost: 9, img: "images/champs/130.webp", tier: "S" },
        { name: "Syn Shenron", cost: 9, img: "images/champs/131.webp", tier: "S" },
        { name: "Toppo", cost: 9, img: "images/champs/132.webp", tier: "S" },
        { name: "Super Baby 2", cost: 9, img: "images/champs/133.webp", tier: "S" },
        { name: "Frieza Full Power", cost: 9, img: "images/champs/134.webp", tier: "S" },
        { name: "Metal Cooler", cost: 9, img: "images/champs/135.webp", tier: "S" },
        { name: "Cooler Final Form", cost: 9, img: "images/champs/136.webp", tier: "S" },
        { name: "Full-Power Bojack", cost: 9, img: "images/champs/137.webp", tier: "S" },
        { name: "SSJ Broly (Super)", cost: 10, img: "images/champs/138.webp", tier: "S" },
        { name: "Kid Buu", cost: 10, img: "images/champs/139.webp", tier: "S" },
        { name: "SSJ Adult Gohan", cost: 9, img: "images/champs/140.webp", tier: "S" },
        { name: "Super Janemba", cost: 9, img: "images/champs/141.webp", tier: "S" },
        { name: "SSJ3 Goku", cost: 9, img: "images/champs/142.webp", tier: "S" },
        { name: "Majin Vegeta", cost: 9, img: "images/champs/143.webp", tier: "S" },
        { name: "SSJ2 Teen Gohan", cost: 9, img: "images/champs/144.webp", tier: "S" },
        { name: "SSJ2 Caulifla", cost: 9, img: "images/champs/145.webp", tier: "S" },
        { name: "Ultimate Gohan", cost: 9, img: "images/champs/146.webp", tier: "S" },
        { name: "SSJ Kefla", cost: 9, img: "images/champs/147.webp", tier: "S" },
        { name: "Buutenks", cost: 9, img: "images/champs/148.webp", tier: "S" },
        { name: "SSJ3 Mini Vegeta", cost: 9, img: "images/champs/149.webp", tier: "S" },
        { name: "God Goku", cost: 9, img: "images/champs/150.webp", tier: "S" },
        { name: "God Vegeta", cost: 9, img: "images/champs/151.webp", tier: "S" },
        { name: "Gamma 1", cost: 10, img: "images/champs/152.webp", tier: "S" },
        { name: "Gamma 2", cost: 10, img: "images/champs/153.webp", tier: "S" },
        { name: "Fusion Android 13", cost: 9, img: "images/champs/154.webp", tier: "S" },
        { name: "SSJ2 Cabba", cost: 9, img: "images/champs/155.webp", tier: "S" },
        { name: "Buuhan", cost: 10, img: "images/champs/156.webp", tier: "S" },
        { name: "SSJ Gotenks", cost: 9, img: "images/champs/157.webp", tier: "S" },
        { name: "SSJ3 Goku (GT)", cost: 9, img: "images/champs/158.webp", tier: "S" },
        { name: "Fused Zamasu", cost: 10, img: "images/champs/159.webp", tier: "S" },
        { name: "Ultimate Gohan (SH)", cost: 10, img: "images/champs/160.webp", tier: "S" },
        { name: "Omega Shenron", cost: 10, img: "images/champs/161.webp", tier: "S" },
        { name: "Giant Orange Piccolo", cost: 10, img: "images/champs/162.webp", tier: "S" },
        { name: "Ultra Instinct Sign Goku", cost: 10, img: "images/champs/163.webp", tier: "S" },
        { name: "Anilaza", cost: 10, img: "images/champs/164.webp", tier: "S" },
        { name: "God of Destruction - Toppo", cost: 10, img: "images/champs/165.webp", tier: "S" },
        { name: "Jiren", cost: 10, img: "images/champs/166.webp", tier: "S" },
        { name: "Super Gogeta (Z)", cost: 10, img: "images/champs/167.webp", tier: "S" },
        { name: "SSJ4 Goku", cost: 10, img: "images/champs/168.webp", tier: "S" },
        { name: "SSJ2 Kefla", cost: 10, img: "images/champs/169.webp", tier: "S" },
        { name: "SSJ Rose Goku Black", cost: 10, img: "images/champs/170.webp", tier: "S" },
        { name: "Orange Piccolo", cost: 9, img: "images/champs/171.webp", tier: "S" },
        { name: "Golden Frieza", cost: 10, img: "images/champs/172.webp", tier: "S" },
        { name: "SSGSS Vegeta", cost: 10, img: "images/champs/173.webp", tier: "S" },
        { name: "SSGSS Goku", cost: 10, img: "images/champs/174.webp", tier: "S" },
        { name: "Super Vegito", cost: 10, img: "images/champs/175.webp", tier: "S" },
        { name: "SSJ Gogeta", cost: 10, img: "images/champs/176.webp", tier: "S" },
        { name: "Hit", cost: 10, img: "images/champs/177.webp", tier: "S" },
        { name: "SSJ3 Gotenks", cost: 10, img: "images/champs/178.webp", tier: "S" },
        { name: "SSJ4 Vegeta", cost: 10, img: "images/champs/179.webp", tier: "S" },
        { name: "Super Perfect Cell", cost: 9, img: "images/champs/181.webp", tier: "S" },
    ],
    Z: [
        { name: "Beast Gohan", cost: 12, img: "images/champs/184.webp", tier: "Z" },
        { name: "Legendary SSJ Broly (Z)", cost: 12, img: "images/champs/185.webp", tier: "Z" },
        { name: "Mastered Ultra Instinct Goku", cost: 12, img: "images/champs/186.webp", tier: "Z" },
        { name: "Jiren Full Power", cost: 12, img: "images/champs/187.webp", tier: "Z" },
        { name: "SSJ Broly Full Power (Super)", cost: 12, img: "images/champs/188.webp", tier: "Z" },
        { name: "Cell MAX", cost: 12, img: "images/champs/189.webp", tier: "Z" },
        { name: "Corrupted Fused Zamasu", cost: 12, img: "images/champs/190.webp", tier: "Z" },
    ],
    GOD: [
        { name: "Beerus", cost: 15, img: "images/champs/191.webp", tier: "GOD" },
        { name: "Whis", cost: 15, img: "images/champs/192.webp", tier: "GOD" },
        { name: "SSGSS Vegito", cost: 15, img: "images/champs/193.webp", tier: "GOD" },
        { name: "SSGSS Gogeta", cost: 15, img: "images/champs/194.webp", tier: "GOD" },
        { name: "SSJ4 Gogeta", cost: 15, img: "images/champs/195.webp", tier: "GOD" }
    ]
};



function getRandomTier(level) {
    const pool = tierChances[level];
    const rand = Math.random() * 100;
    let sum = 0;
    for (let tier in pool) {
        sum += pool[tier];
        if (rand <= sum) return tier;
    }
    return "D";
}
function handleLevelInput() {
    const level = parseInt(document.getElementById("player-level").value);
    if (!level || level < 1 || level > 9) return;

    currentRollLevels.clear(); // Optional: clear previous roll levels on new input
    currentRollLevels.add(level);

    showTierPercentages(level);

    // Auto-roll 5 champions immediately on input
    const rolled = Array.from({ length: 5 }, () => {
        const tier = getRandomTier(level);
        const pool = champions[tier];
        return { ...pool[Math.floor(Math.random() * pool.length)] };
    });

    displayChampions(rolled);
}


function showTierPercentages(level) {
    const tierDisplay = document.getElementById("tier-percentages");
    const tierData = {
        1: [{ tier: "D", rate: 85 }, { tier: "C", rate: 15 }],
        2: [{ tier: "D", rate: 60 }, { tier: "C", rate: 25 }, { tier: "B", rate: 15 }],
        3: [{ tier: "D", rate: 40 }, { tier: "C", rate: 35 }, { tier: "B", rate: 24 }, { tier: "A", rate: 1 }],
        4: [{ tier: "D", rate: 25 }, { tier: "C", rate: 35 }, { tier: "B", rate: 30 }, { tier: "A", rate: 10 }],
        5: [{ tier: "D", rate: 15 }, { tier: "C", rate: 29 }, { tier: "B", rate: 30 }, { tier: "A", rate: 20 }, { tier: "S", rate: 10 }, { tier: "Z", rate: 1 }],
        6: [{ tier: "D", rate: 12 }, { tier: "C", rate: 20 }, { tier: "B", rate: 20 }, { tier: "A", rate: 30 }, { tier: "S", rate: 12 }, { tier: "Z", rate: 6 }],
        7: [{ tier: "D", rate: 8.5 }, { tier: "C", rate: 15 }, { tier: "B", rate: 20 }, { tier: "A", rate: 25 }, { tier: "S", rate: 20 }, { tier: "Z", rate: 11 }, { tier: "GOD", rate: 0.5 }],
        8: [{ tier: "D", rate: 5 }, { tier: "C", rate: 9 }, { tier: "B", rate: 18 }, { tier: "A", rate: 25 }, { tier: "S", rate: 22 }, { tier: "Z", rate: 18 }, { tier: "GOD", rate: 3 }],
        9: [{ tier: "D", rate: 3.5 }, { tier: "C", rate: 9 }, { tier: "B", rate: 15 }, { tier: "A", rate: 23 }, { tier: "S", rate: 25 }, { tier: "Z", rate: 20 }, { tier: "GOD", rate: 4.5 }]
    };

    const rates = tierData[level];
    if (!rates) {
        tierDisplay.innerHTML = "";
        return;
    }

    tierDisplay.innerHTML = rates.map(r =>
        `<span class="chess-${r.tier.toLowerCase()}"><b>${r.tier}:</b> ${r.rate}%</span>`
    ).join(" | ");
}



function rollChampions() {
    const level = parseInt(document.getElementById("player-level").value);
    if (!level || level < 1 || level > 9) return;

    if (!currentRollLevels.has(level)) {
        if (currentRollLevels.size >= 2) {
            alert("Chỉ được dùng tối đa 2 cấp độ cùng lúc! Nhấn 'Hoàn tất' để reset.");
            return;
        }
        currentRollLevels.add(level);
    }

    if (!currentUserRef) return;

    currentUserRef.get().then(doc => {
        if (!doc.exists) return;
        const data = doc.data();
        const gold = data.gold || 0;
        const previousLevels = data.rollLevels || [];

        if (gold < 2) return;

        // Update rollLevels to contain max 2 unique recent levels
        const updatedLevels = [...new Set([level, ...previousLevels])].slice(0, 2);

        // Save updated gold and levels
        currentUserRef.update({
            gold: gold - 2,
            rollLevels: updatedLevels
        });

        // Display gold
        document.getElementById("gold-display").textContent = `Vàng: ${gold - 2}`;

        // Generate champions
        const rolled = Array.from({ length: 5 }, () => {
            const tier = getRandomTier(level);
            const pool = champions[tier];
            return { ...pool[Math.floor(Math.random() * pool.length)] };
        });

        displayChampions(rolled);
    });
}


function displayChampions(rolled) {
    const container = document.getElementById("champion-options");
    container.innerHTML = "";

    rolled.forEach(champ => {
        const card = document.createElement("div");
        card.className = "augment-card";
        const tier = champ.tier?.toLowerCase();
        card.classList.add(`card-tier-${tier}`);


        if (champ.tier === "Z") {
            card.classList.add("card-tier-z");
        }
        else if (champ.tier === "GOD") {
            card.classList.add("card-tier-god");
        }
        else if (champ.tier === "S") {
            card.classList.add("card-tier-s");
        }

        const img = document.createElement("img");
        img.src = champ.img;
        img.alt = champ.name;
        const tierClass = `chess-${champ.tier?.toLowerCase() || 'd'}`;
        img.className = `champ-img ${tierClass}`;

        const name = document.createElement("div");
        name.className = "augment-name";
        name.textContent = champ.name;

        const desc = document.createElement("div");
        desc.className = "augment-desc";
        desc.innerHTML = `Bậc: ${champ.tier}<br>Giá: ${champ.cost} vàng`;

        const buyBtn = document.createElement("button");
        buyBtn.textContent = "Mua";
        buyBtn.onclick = () => buyChampion(champ);

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(buyBtn);
        container.appendChild(card);
    });
}
function displayChampions(rolled) {
    const container = document.getElementById("champion-options");
    container.innerHTML = "";

    rolled.forEach((champ, index) => {
        const card = document.createElement("div");
        card.className = "augment-card";
        const tier = champ.tier?.toLowerCase();
        card.classList.add(`card-tier-${tier}`);

        const img = document.createElement("img");
        img.src = champ.img;
        img.alt = champ.name;
        img.className = `champ-img chess-${tier}`;

        const name = document.createElement("div");
        name.className = "augment-name";
        name.textContent = champ.name;

        const desc = document.createElement("div");
        desc.className = "augment-desc";
        desc.innerHTML = `Bậc: ${champ.tier}<br>Giá: ${champ.cost} vàng`;

        const buyBtn = document.createElement("button");
        buyBtn.textContent = "Mua";
        buyBtn.onclick = () => {
            buyChampion(champ);
            buyBtn.disabled = true; // ⛔ disable after buying
            buyBtn.textContent = "Đã mua";
        };

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(buyBtn);
        container.appendChild(card);
    });
}


function buyChampion(champ) {
    if (!currentUserRef) return;

    currentUserRef.get().then(doc => {
        if (!doc.exists) return;
        const data = doc.data();
        const gold = data.gold || 0;
        if (gold < champ.cost) return;

        currentUserRef.update({ gold: gold - champ.cost });
        boughtChamps.push(champ);
        displayBoughtChamps();
        currentUserRef.update({
            gold: gold - champ.cost,
            champs: boughtChamps
        });

        document.getElementById("gold-display").textContent = `Vàng: ${gold - champ.cost}`;
    });
}

function displayBoughtChamps() {
    const container = document.getElementById("bought-champions");
    container.innerHTML = "";

    boughtChamps.forEach((champ, i) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "inline-block";
        wrapper.style.margin = "6px";

        const img = document.createElement("img");
        img.src = champ.img;
        img.alt = champ.name;
        img.className = `champ-img chess-${champ.tier?.toLowerCase() || 'd'}`;
        img.title = champ.name;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "×";
        removeBtn.title = "Bán tướng";
        Object.assign(removeBtn.style, {
            position: "absolute",
            top: "-4px",
            right: "-4px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "16px",
            height: "16px",
            fontSize: "10px",
            lineHeight: "14px",
            padding: "0",
            cursor: "pointer",
            zIndex: "10"
        });

        removeBtn.addEventListener("click", () => sellChampion(i));

        wrapper.appendChild(img);
        wrapper.appendChild(removeBtn);
        container.appendChild(wrapper);
    });
}
function displayBoughtChamps() {
    const container = document.getElementById("bought-champions");
    container.innerHTML = "";

    boughtChamps.forEach((champ, i) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "inline-block";
        wrapper.style.margin = "6px";

        const img = document.createElement("img");
        img.src = champ.img;
        img.alt = champ.name;
        img.className = `champ-img chess-${champ.tier?.toLowerCase() || 'd'}`;
        img.title = champ.name;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "×";
        removeBtn.title = "Bán tướng";
        Object.assign(removeBtn.style, {
            position: "absolute",
            top: "-4px",
            right: "-4px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "16px",
            height: "16px",
            fontSize: "10px",
            lineHeight: "14px",
            padding: "0",
            cursor: "pointer",
            zIndex: "10"
        });

        removeBtn.addEventListener("click", () => sellChampion(i));

        wrapper.appendChild(img);
        wrapper.appendChild(removeBtn);
        container.appendChild(wrapper);
    });
}

function sellChampion(index) {
    const champ = boughtChamps[index];
    if (!champ || typeof champ.cost !== "number") return;

    const refundGold = getSellRefund(champ.cost);

    // Remove locally
    boughtChamps.splice(index, 1);
    displayBoughtChamps();

    // Update Firestore
    currentUserRef.get().then(doc => {
        if (!doc.exists) return;
        const data = doc.data();
        const gold = data.gold || 0;
        const currentChamps = data.champs || [];

        // Match champ by image + name to remove from Firestore
        const updatedChamps = currentChamps.filter(c =>
            !(c.name === champ.name && c.img === champ.img)
        );

        currentUserRef.update({
            gold: gold + refundGold,
            champs: updatedChamps
        }).then(() => {
            const display = document.getElementById("gold-display");
            if (display) display.textContent = `Vàng: ${gold + refundGold}`;
        });
    });
}





function finishRolling() {
    if (!currentUserRef) return;

    currentUserRef.get().then(doc => {
        if (!doc.exists) return;

        // 🧠 Don't re-save champs! They were already added during buyChampion()
        currentRollLevels.clear();
        window.location.href = "main.html";
    });
}


function exitToMain() {
    location.href = "main.html";
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUserRef = firebase.firestore()
            .collection("tables").doc("sharedTable")
            .collection("players").doc(user.uid);

        currentUserRef.get().then(doc => {
            if (doc.exists) {
                const gold = doc.data().gold || 0;
                document.getElementById("gold-display").textContent = `Vàng: ${gold}`;
            }
        });
    }
});
