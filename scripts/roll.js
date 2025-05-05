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
    ], // load your tier D champs
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
    ], // and so on
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
    ],
    dragonBall: [
        { name: "1 sao", cost: 0, tier: "dragonBall", img: "images/dragonballs/1.png" },
        { name: "2 sao", cost: 0, tier: "dragonBall", img: "images/dragonballs/2.png" },
        { name: "3 sao", cost: 0, tier: "dragonBall", img: "images/dragonballs/3.png" },
        { name: "4 sao", cost: 0, tier: "dragonBall", img: "images/dragonballs/4.png" },
        { name: "5 sao", cost: 0, tier: "dragonBall", img: "images/dragonballs/5.jpg" },
        { name: "6 sao", cost: 0, tier: "dragonBall", img: "images/dragonballs/6.png" },
        { name: "7 sao", cost: 0, tier: "dragonBall", img: "images/dragonballs/7.png" },
    ]
};
const augments = {
    A: [
        {
            name: "Đoàn Quân Ruy Băng Đỏ",
            desc: "Nhận (12/18/25) vàng trong vòng đấu này nhưng sẽ biến mất khi hết vòng.",
            img: "images/augments/1.jpg"
        },
        {
            name: "Thần Mèo Karin",
            desc: "Điểm sinh mệnh người chơi chỉ bị trừ điểm gốc, không bao gồm số khoảng cách tướng trong (3/2/1) vòng đấu.",
            img: "images/augments/2.webp"
        },
        {
            name: "Bay tự do",
            desc: "Bỏ qua vòng đấu này(vẫn được nhận vàng) nếu bạn vừa thua (vẫn cộng dồn chuỗi thua)",
            img: "images/augments/3.webp"
        },
        {
            name: "Học trò của Thần Hạc",
            desc: "Nhận 1 Tenshinhan. Tự động thắng ván đầu tiên khi sử dụng Tenshinhan, và, người chơi phải chơi Tenshinhan.",
            img: "images/augments/4.webp"
        },
        {
            name: "Quy Lão Trường Thọ",
            desc: "+(10/15/18) điểm sinh mệnh trong vòng đấu này, kết thúc vòng đấu 6, +15 điểm sinh mệnh cho bạn và +5 cho đối thủ",
            img: "images/augments/5.png"
        },
        {
            name: "Sức mạnh của Mẹ",
            desc: "Giới hạn cả 2 người chơi chỉ được sử dụng 3 tướng trong 2 vòng đấu tiếp theo.",
            img: "images/augments/6.jpg"
        },
        {
            name: "Sinh nhật Bulma",
            desc: "Nhận (5/8/15) vàng vòng đấu này, thêm 15 vàng vào đầu vòng 6.",
            img: "images/augments/7.webp"
        },
        {
            name: "Đậu Thần Senzu",
            desc: "Hồi điểm sinh mệnh cho người chơi 3/7/12(+1/2/4) mỗi vòng đấu.",
            img: "images/augments/8.webp"
        },
        {
            name: "Tầm nhìn của Thượng Đế",
            desc: "Nhận 1 tướng Bậc A vòng đấu này (bạn được chọn) nhưng sẽ mất trong 2 vòng tiếp theo, nhận 5/8/18 vàng.",
            img: "images/augments/9.webp"
        },
        {
            name: "Băng Pilaf",
            desc: "Nhận 5/7/10 golds. Bây giờ, bạn có thể nợ 5/8/12(+2/3/5/round) vàng. Nếu thắng, loại bỏ phần nợ. Nếu thua, +5 số nợ.",
            img: "images/augments/10.jpg"
        },
        {
            name: "Nhà Vô Địch của Đại Hội Võ Thuật",
            desc: "Nhận 12/15/22 vàng và 1/2/3 lượt đổi miễn phí",
            img: "images/augments/11.jpg"
        },
        {
            name: "Phù Thủy Độc Ác Babidi",
            desc: "Mỗi vòng đấu, bạn nhận được 1 hiệu ứng ngẫu nhiên của môi trường. Nhận 5/7/10 vàng.",
            img: "images/augments/12.webp"
        },
        {
            name: "3 kẻ đần của Vũ Trụ 9",
            desc: "Bất kì người chơi nào dùng 1 tướng để đánh bại 3 tướng, họ thắng luôn cả vòng đấu. Nhận 7/12/15 điểm sinh mệnh.",
            img: "images/augments/13.webp"
        },
        {
            name: "Kéo, Búa, Bao",
            desc: "Cả 2 người chơi ra sân với 1 tướng trong 2 vòng đấu. Nhận 6/9/12 vàng.",
            img: "images/augments/14.webp"
        },
        {
            name: "Lá chắn năng lượng",
            desc: "Nhận 25/35/50 điểm lá chắn (-7 mỗi vòng đấu) và biến mất sau 3/4/4 vòng đấu.",
            img: "images/augments/15.webp"
        },
        {
            name: "Máy hồi phục",
            desc: "Cả 2 người chơi nhận 1 nửa thiệt hại trong 2 vòng đấu. Nhận 7/10/12 điểm sinh mệnh.",
            img: "images/augments/16.webp"
        },
        {
            name: "Điều ước của Oolong",
            desc: "-30/25/20 điểm sinh mệnh để nhận 18/25/30 vàng hoặc -40/35/30 điểm sinh mệnh để nhận 25/30/35 vàng",
            img: "images/augments/17.webp"
        },
        {
            name: "Lời Hiệu Triệu Satan",
            desc: "Nhận 1 ấn ngẫu nhiên",
            img: "images/augments/18.webp"
        },
        {
            name: "Cha con Panzy",
            desc: "Nhận 1 Panzy, +3/5/12 vàng mỗi vòng khi có Panzy trong đội hình.",
            img: "images/augments/59.jpg"
        },

    ],
    S: [
        {
            name: "Lời Tiên Đoán của Cá Tiên Tri",
            desc: "Nhận 1 tướng bậc S ngẫu nhiên trong 2 vòng đấu",
            img: "images/augments/19.webp"
        },
        {
            name: "Thanh Kiếm Z Huyền Thoại",
            desc: "Nhận 1 Thanh kiếm Z. Người chơi được dùng vĩnh viễn, người chơi được hồi 5/7/10 điểm sinh mệnh mỗi vòng đấu, và gây thêm 5/10/12 sát thương với mỗi khoảng cách tướng.",
            img: "images/augments/20.webp"
        },
        {
            name: "Bông tai Potara",
            desc: "Bán 2 tướng A để nhận 1 tướng S, loại bỏ 4 tướng S (không có vàng) để nhận 2 tướng Z. Nhận 1 tướng S ngẫu nhiên ở vòng kế tiếp.",
            img: "images/augments/21.webp"
        },
        {
            name: "Thẩm Phán của Diêm Vương",
            desc: "Sau khi thua tất cả tướng, người chơi được chọn 3 tướng để xin Diêm Vương hồi sinh, Ngài ấy sẽ chọn 1 trong 3. Nhưng nếu vị tướng đó bại trận lần nữa, người chơi buộc phải bán.",
            img: "images/augments/23.webp"
        },
        {
            name: "Thượng tầng Khoa Học",
            desc: "+1 ô tướng, và + thêm 1 trong 2 vòng tiếp theo",
            img: "images/augments/24.jpg"
        },
        {
            name: "Giới Vương Quyền",
            desc: "Người chơi gây thêm 10/15/20(+5/8/12/vòng đấu) sát thương lên kẻ địch, nhưng mỗi vòng đấu, người chơi mất 5/7/10(+2/5/7/vòng đấu) điểm sinh mệnh.",
            img: "images/augments/25.webp"
        },
        {
            name: "Cơ thể Android",
            desc: "Người chơi không nhận thiệt hại từ đối phương trong 2 vòng đấu tiếp theo. Nhận 15/15/10 điểm sinh mệnh",
            img: "images/augments/26.webp"
        },
        {
            name: "Sự hi sinh của Goku",
            desc: "Nhận 1 Goku Base (Mid), khi người chơi bị hạ điểm sinh mệnh về 0, loại 5 tướng Goku khác nhau, và nhận 1 máu, 30 vàng, 1 ô tướng, và 1 tướng S ngẫu nhiên.",
            img: "images/augments/27.jpg"
        },
        {
            name: "Lưỡng Long Nhất Thể",
            desc: "Tất cả tướng Dung Hợp tốn 2 ô, và nếu người chơi dứt điểm tướng cuối cùng của đối phương bằng tướng dung hợp, gây gấp đôi sát thương. Nhận 1 Gotenks bây giờ và 1 Gogeta ở vòng 5",
            img: "images/augments/28.webp"
        },
        {
            name: "Phòng Tinh Thần và Thời Gian",
            desc: "Người chơi được chọn 1 tướng để nâng cấp, mỗi 2 vòng đấu sẽ được thăng cấp 1 bậc.",
            img: "images/augments/29.webp"
        },
        {
            name: "Gia đình Buu",
            desc: "Nhận 1 Majuub và 1 Majin Buu. 2 trong bất kì Majin Buu và Majuub trong đội hình được hồi sinh vào ô cuối, sau đó sẽ gây thêm 7/10/12 thiệt hại với mỗi mạng hạ gục.",
            img: "images/augments/30.jpg"
        },
        {
            name: "Vé khuyến mãi toàn cầu",
            desc: "Phí đổi lại = 1 vàng.<br>Phí mua tỉ lệ tướng = 5/4/3 vàng.<br>Phí mua ô tướng = 20/20/18 vàng.<br>Phí mua ô hàng chờ = 15 vàng.",
            img: "images/augments/31.png"
        },
        {
            name: "Tia Tử Thần",
            desc: "Nếu bạn thắng:<br> gây thêm 5 thiệt hại ở vòng 2, 3<br> gây thêm 10 thiệt hại ở vòng 4, 5<br> Gấp đôi thiệt hại khoảng cách tướng ở vòng 6+.",
            img: "images/augments/32.webp"
        },
        {
            name: "Nhà tiên tri Baba",
            desc: "Bạn được nhìn đội hình của đối phương, sau đó, điều chỉnh thứ tự 1(+1/2 vòng đấu)(tối đa 2) tướng của 2(+1/3 vòng đấu) ô đầu tiên với hàng chờ.<br> Nếu không có tướng ở hàng chờ, loại tướng khỏi đội hình.",
            img: "images/augments/33.webp"
        },
        {
            name: "Giải đấu Âm Giới",
            desc: "-2 ô tướng để gây gấp đôi sát thương đến cuối trận. Nhận 5/7/10 vàng.",
            img: "images/augments/34.webp"
        },
        {
            name: "Lời thách thức của Ma Nhân Vegeta",
            desc: "Người chơi ép đối phương chọn 1 tướng để đấu 1v1. Nếu người chơi thắng, phá hủy tướng bại trận, và hạ gục 1 tướng ngẫu nhiên. Nếu người chơi thua, phá hủy con tướng ấy.",
            img: "images/augments/35.jpeg"
        },
        {
            name: "Thiên tài bác học Hedo",
            desc: "Nhận Gamma 1 & 2, người chơi bị -3 ô tướng cho đến khi có Cell Max. Nhận 1 Cell Max ở vòng 6.<br>Mỗi vòng thắng người chơi được +3 vàng/khoảng cách tướng.",
            img: "images/augments/58.webp"
        },

    ],
    Z: [
        {
            name: "Biệt Đội Kiêu Hùng xuất hiện!!!",
            desc: "Trả 10 vàng. Nhận 1 Jiren, Toppo, Dyspo.<br>Jiren không thể biến hình đến hết vòng 3.",
            img: "images/augments/22.webp"
        },
        {
            name: "Sự bộc phát của Gohan!!",
            desc: "Nhận 1 Gohan (Siêu Anh Hùng), với mỗi vòng đấu thua, Gohan sẽ tiến hóa 1 bậc. Nếu đến vòng 6, khi đội bạn thua với Piccolo trong đội hình. Gohan sẽ hóa Thú. Nhận 25 vàng và 1 ô tướng khi sở hữu Gohan Thú.",
            img: "images/augments/36.webp"
        },
        {
            name: "Chúng ta phải giết chết hắn bằng đôi tay của người Saiyan!",
            desc: "Nhận 1 tướng Saiyan vòng đấu này và 1 tướng Saiyan bậc cao hơn ở vòng 4.<br> Hủy diệt đối phương khi điểm sinh mệnh của họ bằng hoặc thấp hơn 10/12/15(15/18/22 nếu người chơi kết liễu đối phương bằng tướng Saiyan).",
            img: "images/augments/37.jpg"
        },
        {
            name: "Điều ước cuối cùng của Goku",
            desc: "Khi người chơi thua, họ sẽ không, thay vào đó, nhận 1 Goku GT SSJ4(và phải sử dụng nó), 15 vàng, và 1 điểm sinh mệnh. Tới cuối trận, người chơi gây thêm 20 thiệt hại lên đối phương.",
            img: "images/augments/38.webp"
        },
        {
            name: "Thí nghiệm của Fu",
            desc: "Nếu điểm sinh mệnh của bạn thấp hơn, trao đổi với đối phương. Lần đầu đối phương bị hạ gục, nhận 1 điểm sinh mệnh.<br> Nếu điểm sinh mệnh của người chơi cao hơn, trao đổi và gây gấp đôi sát thương đến hết ván đấu, và nhận 15/20/30 vàng.",
            img: "images/augments/39.webp"
        },
        {
            name: "Frieza Hoàng Kim",
            desc: "Nhận 25/35/50 vàng. Lợi tức của người chơi được nhân đôi khi có 50+ vàng.",
            img: "images/augments/40.webp"
        },
        {
            name: "Đồng Quy Vô Tận",
            desc: "Hi sinh 50 điểm sinh mệnh, toàn bộ tướng, để gây 70 sát thương lên đối phương",
            img: "images/augments/41.webp"
        },
        {
            name: "Đây là sức mạnh thực sự của Vũ Trụ 7 và đó là niềm tin ư?",
            desc: "Nếu điểm sinh mệnh của người chơi bằng hoặc thấp hơn 25/30/35, nhận 25 vàng, 1 ô tướng và gây gấp 3 lần sát thương tới cuối trận",
            img: "images/augments/42.webp"
        },
        {
            name: "Mọi người, hãy truyền năng lượng cho tôi!",
            desc: "Người chơi chọn 1 tướng và loại bỏ phần còn lại. Tướng được chọn có thể được chơi đến khi hết ô tướng. Nhận 7/10/15 điểm sinh mệnh với mỗi tướng hạ gục, nhưng nhận gấp đôi sát thương nếu thua.",
            img: "images/augments/43.webp"
        },
        {
            name: "Thần Rồng Khói Đen",
            desc: "Lượng vàng hiện tại và lượng vàng kiếm được sẽ chuyển thành điểm sinh mệnh. Người chơi có thể sử dụng điểm sinh mệnh để mua bất cứ điều gì. +3/5/8 điểm sinh mệnh mỗi vòng đấu.",
            img: "images/augments/44.webp"
        },
        {
            name: "Hỗ trợ tài chính",
            desc: "Khóa lõi Thần Rồng Khói Đen.<br>Tất cả sát thương nhận vào được chuyển thành vàng.<br> Không còn được nhận lợi tức, và tất cả hiệu ứng hồi máu.",
            img: "images/augments/45.webp"
        },
        {
            name: "Ngọc Rồng Siêu Cấp",
            desc: "Hồi sinh toàn bộ tướng khi họ lần đầu bị hạ gục, nếu bị gục lần nữa, người chơi buộc phải bán chúng.",
            img: "images/augments/46.webp"
        },
        {
            name: "Hành tinh ngục tù",
            desc: "Cả 2 người chơi không thể mua tướng cho tới khi đối phương hạ gục bạn, hoặc trả 20/30/45 vàng. Nhận 10/15/20 vàng.",
            img: "images/augments/47.jpg"
        },
        {
            name: "Giải đấu Sức Mạnh",
            desc: "Người chơi cần hỏi đối phương có đồng ý tham gia lõi hay không.<br>Nếu có, cả 2 người chơi chọn ra 5 tướng (Cấm Chọn), người thua cuộc sẽ thua toàn bộ trò chơi.<br>Nếu họ không đồng ý, nhận 1 lượng đổi lại lõi miễn phí và +15/20/35 vàng.",
            img: "images/augments/48.webp"
        },
        {
            name: "Thần Hủy Diệt",
            desc: "Hủy diệt 1/1/2 ô tướng và 1/2/3 tướng ngẫu nhiên của đối phương, tuy nhiên, người chơi trả 10/15/20 vàng cho đối phương.",
            img: "images/augments/49.jpeg"
        },
        {
            name: "Bài huấn luyện của Thiên Sứ thực tập",
            desc: "Bạn được sử dụng tất cả tướng Z vòng đấu này. Sau đó chọn 1 tướng và loại bỏ các tướng còn lại.",
            img: "images/augments/50.webp"
        },
        {
            name: "Món quà của Whis",
            desc: "Hồi sinh 1(+1/vòng đấu, tối đa 3) tướng mỗi vòng đấu.",
            img: "images/augments/51.png"
        },
        {
            name: "Sự ban phước của Daishinkan",
            desc: "Nhận 10/15/18 vàng và 15/20/30 điểm lá chắn (-5/7/10 mỗi vòng), và, 3/2/2 vòng đấu tiếp theo, người chơi nhận 1 nửa sát thương. Người chơi được nhận 1 lõi S.",
            img: "images/augments/52.jpg"
        },
        {
            name: "Thánh địa của Zeno",
            desc: "Cả 2 người chơi chỉ còn 1 điểm sinh mệnh và không thể bị trừ. Tất cả tướng không thể được tái sử dụng khi bị hạ gục.<br>Khi 1 người chơi hết tướng, họ thua cả trận đấu.<br> Người chơi nhận 15 vàng và đối phương nhận 20 vàng.",
            img: "images/augments/53.webp"
        },
        {
            name: "Hộ vệ của Zeno",
            desc: "Người chơi không nhận sát thương trong 2 lần đầu tiên, và hồi máu dựa trên lượng sát thương nhận được.<br> Từ vòng 6, người chơi nhận gấp đôi sát thương.",
            img: "images/augments/54.webp"
        },
        {
            name: "Ta muốn xem nữa!",
            desc: "Nhận 3 ô tướng, nhưng nếu thua, -80 điểm sinh mệnh. Nhận 1 tướng A/S/Z và 20 vàng.",
            img: "images/augments/55.jpg"
        },
        {
            name: "Siêu Thần Saiyan",
            desc: "Nhận 1 Siêu Thần Saiyan Goku. Hồi 5 điểm sinh mệnh với mỗi mạng hạ gục và 50XP khi dành chiến thắng vòng đấu với SSG Goku. Lập tức hạ gục 1 tướng của kẻ địch lần đầu SSG Goku chạm trán mỗi 2 vòng.<br> Nhận 1 Siêu Thần Saiyan Vegeta ở round 4.",
            img: "images/augments/56.webp"
        },
        {
            name: "Ma Nhãn",
            desc: "+50 điểm sinh mệnh, người chơi gây thêm 10/15/20 sát thương mỗi vòng. Nhận 10/15/20 vàng.",
            img: "images/augments/57.png"
        },

    ]
};
const environments = [
    {
        title: "Trái Đất",
        desc: "Tất cả người chơi có 1 lượt đổi miễn phí mỗi vòng.",
        img: "/images/environments/1.png"
    },
    {
        title: "Hành Tinh Namek",
        desc: "Tất cả người chơi +5 điểm sinh mệnh mỗi vòng.",
        img: "/images/environments/2.png"
    },
    {
        title: "Hành tinh Vegeta",
        desc: "Tất cả người chơi có 6 ô tướng, và 4 ô chứa tướng.",
        img: "/images/environments/3.png"
    },
    {
        title: "Hành tinh Yardrat",
        desc: "+1 ấn ngẫu nhiên.",
        img: "/images/environments/4.png"
    },
    {
        title: "Hành Tinh Cereal",
        desc: "+1 trang bị.",
        img: "/images/environments/5.png"
    },
    {
        title: "Hành tinh của Giới Vương Bắc",
        desc: "Tất cả người chơi +3 vàng mỗi vòng.",
        img: "/images/environments/6.png"
    },
    {
        title: "Lâu Đài Của Beerus",
        desc: "Tất cả người chơi +50 exp mỗi vòng",
        img: "/images/environments/7.png"
    },
    {
        title: "Điểm vỡ thời gian",
        desc: "Bỏ qua vòng 3 và vòng 7 (vẫn nhận vàng)",
        img: "/images/environments/9.webp"
    },
    {
        title: "Vô Diện Giới",
        desc: "Không có gì xảy ra",
        img: "/images/environments/8.png"
    }
];

// Optional: Split augments by core tier if you have this data
const coreZ = augments.filter(a => a.tier === "Z");
const coreS = augments.filter(a => a.tier === "S");
const coreA = augments.filter(a => a.tier === "A");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("roll-button").addEventListener("click", rollBasedOnSelection);
});

function rollBasedOnSelection() {
    const rollType = document.getElementById("roll-type").value;
    const container = document.getElementById("roll-results");
    container.innerHTML = "";

    let rolled = [];

    if (rollType === "rollChamp") {
        const allTiers = ["D", "C", "B", "A", "S", "Z", "GOD"];
        const tier = allTiers[Math.floor(Math.random() * allTiers.length)];
        const pool = champions[tier];
        rolled = [{ ...pool[Math.floor(Math.random() * pool.length)] }];

    } else if (["D", "C", "B", "A", "S", "Z", "GOD"].includes(rollType)) {
        const pool = champions[rollType] || [];
        rolled = [{ ...pool[Math.floor(Math.random() * pool.length)] }];

    } else if (rollType === "dragonBall") {
        rolled = [{
            name: "Ngọc Rồng",
            tier: "dragonBall",
            cost: 0,
            img: `./images/dragonballs/${Math.ceil(Math.random() * 7)}.png`
        }];

    } else if (rollType === "augment") {
        const flatAugments = [...augments.A, ...augments.S, ...augments.Z];
        const aug = flatAugments[Math.floor(Math.random() * flatAugments.length)];
        rolled = [{ ...aug, cost: 0 }];

    } else if (rollType === "environment") {
        const env = environments[Math.floor(Math.random() * environments.length)];
        rolled = [{ name: env.title, desc: env.desc, tier: "environment", img: env.img, cost: 0 }];

    } else if (rollType === "coreZ") {
        const z = augments.Z[Math.floor(Math.random() * augments.Z.length)];
        rolled = [{ ...z }];

    } else if (rollType === "coreS") {
        const s = augments.S[Math.floor(Math.random() * augments.S.length)];
        rolled = [{ ...s }];

    } else if (rollType === "coreA") {
        const a = augments.A[Math.floor(Math.random() * augments.A.length)];
        rolled = [{ ...a }];
    }

    displayRollResults(rolled);
}

function displayRollResults(rolled) {
    const container = document.getElementById("roll-results");
    container.innerHTML = "";

    rolled.forEach(card => {
        const wrapper = document.createElement("div");
        wrapper.className = "augment-card";
        const tier = (card.tier || "d").toLowerCase();

        if (tier === "z") wrapper.classList.add("card-tier-z");
        else if (tier === "god") wrapper.classList.add("card-tier-god");
        else if (tier === "s") wrapper.classList.add("card-tier-s");
        else if (tier === "dragonball") wrapper.classList.add("card-tier-dragonball");
        else if (tier === "environment") wrapper.classList.add("card-tier-env");
        else if (["a", "b", "c", "d"].includes(tier)) wrapper.classList.add(`card-tier-${tier}`);

        const img = document.createElement("img");
        img.src = card.img;
        img.alt = card.name;
        img.className = `champ-img chess-${tier}`;

        const name = document.createElement("div");
        name.className = "augment-name";
        name.textContent = card.name;

        const desc = document.createElement("div");
        desc.className = "augment-desc";
        if (card.desc) {
            desc.innerHTML = card.desc.replace(/\n/g, "<br>");
        } else if (card.cost === 0) {
            desc.innerHTML = `Bậc: ${card.tier} <br> Giá: 0 vàng`;
        } else {
            desc.innerHTML = `Bậc: ${card.tier} <br> Giá: ${card.cost || 0} vàng`;
        }

        wrapper.appendChild(img);
        wrapper.appendChild(name);
        wrapper.appendChild(desc);
        container.appendChild(wrapper);
    });
}
