// shop.js
// Dependencies: champions and tierChances copied from rollChamp.js
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
        { name: "Legendary SSJ Broly (Z)", cost: 12, img: "images/champs/185.webp", tier: "Z" },
        { name: "Mastered Ultra Instinct Goku", cost: 12, img: "images/champs/186.webp", tier: "Z" },
        { name: "Jiren Full Power", cost: 12, img: "images/champs/187.webp", tier: "Z" },
        { name: "SSJ Broly Full Power (Super)", cost: 12, img: "images/champs/188.webp", tier: "Z" },
        { name: "Cell MAX", cost: 12, img: "images/champs/189.webp", tier: "Z" },
        { name: "Corrupted Fused Zamasu", cost: 12, img: "images/champs/190.webp", tier: "Z" },
    ],
    GOD: [
        { name: "Beast Gohan", cost: 15, img: "images/champs/184.webp", tier: "GOD" },
        { name: "Beerus", cost: 15, img: "images/champs/191.webp", tier: "GOD" },
        { name: "Whis", cost: 15, img: "images/champs/192.webp", tier: "GOD" },
        { name: "SSGSS Vegito", cost: 15, img: "images/champs/193.webp", tier: "GOD" },
        { name: "SSGSS Gogeta", cost: 15, img: "images/champs/194.webp", tier: "GOD" },
        { name: "SSJ4 Gogeta", cost: 15, img: "images/champs/195.webp", tier: "GOD" }
    ]
};
// shop.js
// shop.js
// Dependencies: champions and tierChances copied from rollChamp.js
// Assumes firebaseConfig.js is already loaded



// Firebase must already be initialized via firebaseConfig.js
const db = firebase.firestore();
let currentUser;

firebase.auth().onAuthStateChanged(user => {
    if (user) currentUser = user;
    else firebase.auth().signInAnonymously();
});

const items = [
    { img: "./images/items/1.webp", name: "Gậy Như Ý", desc: "Gây thêm 5 sát thương với mỗi khoảng cách tướng", weight: 11.57 },
    { img: "./images/items/2.webp", name: "Thanh Kiếm Dũng Sĩ", desc: "Hồi 5 điểm sinh mệnh với mỗi khoảng cách tướng.", weight: 11.57 },
    { img: "./images/items/3.webp", name: "Giáp Chiến Đấu", desc: "Giảm 40% sát thương nhận vào trong vòng đấu.", weight: 11.57 },
    { img: "./images/items/4.jpg", name: "Kẹo Majin Buu", desc: "Hồi 20 điểm sinh mệnh.", weight: 11.57 },
    { img: "./images/items/5.webp", name: "Máy đo chỉ số", desc: "Nhận 1 tướng có cùng Bậc với Bậc mạnh nhất của đối phương.", weight: 5 },
    { img: "./images/items/6.webp", name: "Máy dò Ngọc Rồng", desc: "Nhận 1 ngọc rồng ngẫu nhiên mà người chơi chưa sở hữu.", weight: 2 },
    { img: "./images/items/7.webp", name: "Viên con nhộng Capsule", desc: "+2 ô hàng chờ.", weight: 11.57 },
    { img: "./images/items/8.webp", name: "Máy phát sóng Blutz", desc: "Đổi tướng hiện tại lên tướng bậc cao hơn (trừ tướng GOD).", weight: 5 },
    { img: "./images/items/9.webp", name: "Buồng Bay của Frieza", desc: "Tạo 1 lớp khiên bảo vệ 1 tướng.", weight: 11.57 },
    { img: "./images/items/10.webp", name: "Súng năng lượng", desc: "Bắn 1 tướng ngẫu nhiên (trừ tướng bậc Z, God).", weight: 11.57 },
    { img: "./images/items/11.webp", name: "Máy du hành thời gian", desc: "Nhận tỉ lệ tướng cao hơn 1 bậc trong vòng đấu.", weight: 4 },
    { img: "./images/items/12.webp", name: "Quyền Trượng Thiên Thần", desc: "Nhận 1 bản sao chép của 1 tướng.", weight: 3 },
];



const dragonBalls = [
    "./images/dragonballs/1.png",
    "./images/dragonballs/2.png",
    "./images/dragonballs/3.png",
    "./images/dragonballs/4.png",
    "./images/dragonballs/5.png",
    "./images/dragonballs/6.png",
    "./images/dragonballs/7.png"
];
function getRandomItem() {
    const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
    let rand = Math.random() * totalWeight;

    for (let item of items) {
        if (rand < item.weight) return item; // return full item object
        rand -= item.weight;
    }

    return items[0]; // fallback
}


async function generateShop() {
    const user = firebase.auth().currentUser;
    if (!user) return alert("Chưa đăng nhập!");

    const playerRef = firebase.firestore()
        .collection("tables").doc("sharedTable")
        .collection("players").doc(user.uid);

    const doc = await playerRef.get();
    if (doc.exists && doc.data().shopUsed) {
        alert("Bạn chỉ có thể hiện tướng 1 lần! Hãy quay lại và ấn 'Đi Chợ' để làm mới.");
        return;
    }

    // Mark as used
    await playerRef.update({ shopUsed: true });

    const round = parseInt(document.getElementById("round-select").value);
    const composition = getRoundComposition(round);
    const championsToShow = [];

    for (const tier in composition) {
        const count = composition[tier];
        const pool = champions[tier] || [];
        for (let i = 0; i < count; i++) {
            const champ = { ...pool[Math.floor(Math.random() * pool.length)] };
            champ.dragonBalls = getRandomDragonBalls();
            champ.item = getRandomItem();
            championsToShow.push(champ);
        }
    }

    displayShopChampions(championsToShow);
}



function getRandomDragonBalls() {
    const shuffled = [...dragonBalls].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.floor(Math.random() * 2) + 1); // 1 or 2 DBs
}

function getRandomDragonBalls() {
    const count = Math.random() < 0.8 ? 1 : 2;
    const result = [];
    const used = new Set();

    while (result.length < count) {
        const idx = Math.floor(Math.random() * dragonBalls.length);
        if (!used.has(idx)) {
            used.add(idx);
            result.push(dragonBalls[idx]);
        }
    }

    return result;
}

function getRoundComposition(round) {
    if (round == 1) return { D: 5, C: 4, B: 1 };
    if (round == 3) return { D: 4, C: 2, B: 3, A: 1 };
    if (round == 5) return { D: 2, C: 2, B: 3, A: 2, S: 1 };
    if (round == 7) return { D: 1, C: 1, B: 2, A: 3, S: 2, Z: 1 };
    if (round == 9) {
        return Math.random() < 0.7
            ? { D: 1, C: 1, B: 1, A: 3, S: 2, Z: 2 }
            : { D: 1, C: 1, B: 1, A: 3, S: 2, Z: 1, GOD: 1 };
    }
    return {};
}
function chooseChampion(champ) {
    const user = firebase.auth().currentUser;
    if (!user) return;

    // Add item and dragon balls to champion
    champ.item = getRandomItem();
    champ.dragonBalls = getRandomDragonBalls();

    const userRef = firebase.firestore()
        .collection("tables").doc("sharedTable")
        .collection("players").doc(user.uid);

    userRef.get().then(doc => {
        const existing = doc.exists && Array.isArray(doc.data().champs) ? doc.data().champs : [];
        const updated = [...existing, champ];

        userRef.update({ champs: updated }).then(() => {
            window.location.href = "main.html";
        });
    });
}
let shopAlreadyUsed = false;

firebase.auth().onAuthStateChanged(async user => {
    if (user) {
        currentUser = user;
        const doc = await db.collection("tables").doc("sharedTable")
            .collection("players").doc(user.uid).get();

        if (doc.exists && doc.data().shopUsed) {
            shopAlreadyUsed = true;
            const btn = document.getElementById("generate-btn");
            if (btn) {
                btn.disabled = true;
                btn.innerText = "Đã hiện tướng rồi!";
            }
        }
    } else {
        firebase.auth().signInAnonymously();
    }
});


async function generateShop() {
    if (shopAlreadyUsed) {
        alert("Bạn chỉ có thể hiện tướng 1 lần! Quay lại 'Đi Chợ' để làm mới.");
        return;
    }

    const user = firebase.auth().currentUser;
    if (!user) return alert("Chưa đăng nhập!");

    const playerRef = db.collection("tables").doc("sharedTable").collection("players").doc(user.uid);
    await playerRef.update({ shopUsed: true });
    shopAlreadyUsed = true;

    // Disable button visually
    const btn = document.getElementById("generate-btn");
    if (btn) {
        btn.disabled = true;
        btn.innerText = "Đã hiện tướng rồi!";
    }

    const round = parseInt(document.getElementById("round-select").value);
    const composition = getRoundComposition(round);
    const championsToShow = [];

    for (const tier in composition) {
        const count = composition[tier];
        const pool = champions[tier] || [];
        for (let i = 0; i < count; i++) {
            const champ = { ...pool[Math.floor(Math.random() * pool.length)] };
            champ.dragonBalls = getRandomDragonBalls();
            champ.item = getRandomItem();
            championsToShow.push(champ);
        }
    }

    displayShopChampions(championsToShow);
}

function chooseChampion(champ) {
    const user = firebase.auth().currentUser;
    if (!user) return;

    champ.item = champ.item || getRandomItem();
    champ.dragonBalls = champ.dragonBalls || getRandomDragonBalls();

    const userRef = db.collection("tables").doc("sharedTable").collection("players").doc(user.uid);
    userRef.get().then(doc => {
        const existing = doc.exists && Array.isArray(doc.data().champs) ? doc.data().champs : [];
        const updated = [...existing, champ];
        boughtChamps = updated;
        userRef.update({ champs: updated }).then(() => {
            displayBoughtChamps(); // Refresh the display
        });
    });
}

function displayBoughtChamps() {
    const container = document.getElementById("bought-champs");
    if (!container) return;
    container.innerHTML = "";

    boughtChamps.forEach((champ, index) => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.display = "inline-block";
        wrapper.style.margin = "6px";

        const img = document.createElement("img");
        img.src = champ.img;
        img.className = `champ-img chess-${champ.tier.toLowerCase()}`;
        img.title = champ.name;

        const sellBtn = document.createElement("button");
        sellBtn.textContent = "×";
        sellBtn.title = "Bán tướng";
        sellBtn.style.position = "absolute";
        sellBtn.style.top = "-4px";
        sellBtn.style.right = "-4px";
        sellBtn.style.background = "red";
        sellBtn.style.color = "white";
        sellBtn.style.border = "none";
        sellBtn.style.borderRadius = "50%";
        sellBtn.style.width = "16px";
        sellBtn.style.height = "16px";
        sellBtn.style.fontSize = "10px";
        sellBtn.style.lineHeight = "14px";
        sellBtn.style.padding = "0";
        sellBtn.style.cursor = "pointer";

        sellBtn.onclick = async () => {
            boughtChamps.splice(index, 1);
            const userRef = db.collection("tables").doc("sharedTable").collection("players").doc(currentUser.uid);
            await userRef.update({ champs: boughtChamps });
            displayBoughtChamps();
        };

        wrapper.appendChild(img);
        wrapper.appendChild(sellBtn);
        container.appendChild(wrapper);
    });
}


function displayShopChampions(champs) {
    const container = document.getElementById("shop-results");
    container.innerHTML = "";

    champs.forEach((champ, index) => {
        const card = document.createElement("div");
        card.className = "augment-card";
        card.classList.add(`card-tier-${champ.tier.toLowerCase()}`);
        card.style.cursor = "pointer";
        card.style.position = "relative";

        const img = document.createElement("img");
        img.src = champ.img;
        img.alt = champ.name;
        img.className = `champ-img chess-${champ.tier.toLowerCase()}`;

        const name = document.createElement("div");
        name.className = "augment-name";
        name.textContent = champ.name;

        const desc = document.createElement("div");
        desc.className = "augment-desc";
        desc.innerHTML = `Bậc: ${champ.tier}<br>Giá: ${champ.cost} vàng`;

        const dragonBallContainer = document.createElement("div");
        champ.dragonBalls.forEach(db => {
            const dbImg = document.createElement("img");
            dbImg.src = db;
            dbImg.alt = "Ngọc rồng";
            dbImg.style.width = "30px";
            dbImg.style.margin = "0 3px";
            dragonBallContainer.appendChild(dbImg);
        });

        // === ITEM TOOLTIP ===
        const itemObj = items.find(i => i.img === champ.item.img); // match by full object now
        const itemWrapper = document.createElement("div");
        itemWrapper.className = "augment-hover-wrapper";
        itemWrapper.style.display = "inline-block";

        const itemImg = document.createElement("img");
        itemImg.src = champ.item.img;
        itemImg.alt = "Vật phẩm";
        itemImg.className = "item-img";
        itemImg.style.width = "40px";

        const tooltip = document.createElement("div");
        tooltip.className = "augment-desc-hover";
        tooltip.innerHTML = `
            <div class="tooltip-name">${itemObj?.name || "Vật phẩm"}</div>
            <div class="tooltip-desc">${itemObj?.desc || ""}</div>
        `;
        tooltip.style.display = "none";
        tooltip.style.left = "60px";

        itemWrapper.onmouseenter = () => tooltip.style.display = "block";
        itemWrapper.onmouseleave = () => tooltip.style.display = "none";

        itemWrapper.appendChild(itemImg);
        itemWrapper.appendChild(tooltip);

        // === Assemble card ===
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(dragonBallContainer);
        card.appendChild(itemWrapper);

        // === Click to save ===
        // Select a champion from the shop and save to Firebase with full item and DB info
        card.onclick = async () => {
            if (!currentUser) return alert("Chưa đăng nhập!");
            const uid = currentUser.uid;
            const tableRef = db.collection("tables").doc("sharedTable");
            const playerRef = tableRef.collection("players").doc(uid);

            // Ensure the item contains full info
            const selectedItem = champ.item || getRandomItem();
            const selectedDragonBalls = champ.dragonBalls || getRandomDragonBalls();

            const selectedChamp = {
                name: champ.name,
                img: champ.img,
                tier: champ.tier,
                cost: champ.cost,
                item: {
                    img: selectedItem.img,
                    name: selectedItem.name,
                    desc: selectedItem.desc
                },
                dragonBalls: selectedDragonBalls
            };

            const playerDoc = await playerRef.get();
            const existing = playerDoc.exists && Array.isArray(playerDoc.data().champs)
                ? playerDoc.data().champs : [];

            await playerRef.update({
                champs: [...existing, selectedChamp]
            });

            window.location.href = "main.html";
        };

        container.appendChild(card);
    });
}

