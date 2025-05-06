firebase.auth().onAuthStateChanged(user => {
    if (user) {
        checkJoinStatus();
        loadTable();
        loadPreviousTables();
    } else {
        firebase.auth().signInAnonymously();
    }
});
function handleRollAugment() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const playerRef = firebase.firestore()
        .collection("tables").doc("sharedTable")
        .collection("players").doc(user.uid);

    playerRef.set({ augmentRollCount: 0 }, { merge: true }).then(() => {
        location.href = "rollAugment.html";
    });
}


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
        img: "/images/environments/9.png"
    },
    {
        title: "Vô Diện Giới",
        desc: "Không có gì xảy ra",
        img: "/images/environments/8.png"
    },
    {
        title: "Hành Tinh Sadala",
        desc: "-1 ô tướng trong 2 vòng đấu để nhận 1 lõi A.<br>-2 ô tướng trong 3 vòng để nhận 1 lõi S.<br>-3 ô tướng trong 4 vòng đấu để nhận 1 lõi Z.",
        img: "/images/environments/10.png"
    },
];

function incrementAugmentRollCount(uid) {
    const ref = firebase.firestore().collection("tables").doc("sharedTable").collection("players").doc(uid);
    ref.update({
        augmentRollCount: firebase.firestore.FieldValue.increment(1)
    });
}

function incrementChampRollCount(uid) {
    const ref = firebase.firestore().collection("tables").doc("sharedTable").collection("players").doc(uid);
    ref.update({
        champRollCount: firebase.firestore.FieldValue.increment(1)
    });
}


function checkJoinStatus() {
    const user = firebase.auth().currentUser;
    const userId = user.uid;

    firebase.firestore().collection("tables").doc("sharedTable")
        .collection("players").doc(userId).get().then(doc => {
            if (doc.exists) {
                document.getElementById("join-table-btn").style.display = "none";
                document.getElementById("post-join-buttons").style.display = "block";
                document.getElementById("leave-table-btn").style.display = "inline-block";
            }
        });
}
function handleRollAugment() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const playerRef = firebase.firestore()
        .collection("tables").doc("sharedTable")
        .collection("players").doc(user.uid);

    playerRef.update({
        augmentRollCount: 0
    }).then(() => {
        location.href = "rollAugment.html";
    });
}


function handleRollChamp() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    // Clear previous rollChamp timer
    localStorage.removeItem("champRollStart");

    const playerRef = firebase.firestore().collection("tables").doc("sharedTable").collection("players").doc(user.uid);

    playerRef.update({
        champRollCount: firebase.firestore.FieldValue.increment(1)
    }).then(() => {
        location.href = "rollChamp.html";
    });
}

function incrementChampRollCount(uid) {
    const playerRef = firebase.firestore().collection("tables").doc("sharedTable").collection("players").doc(uid);
    playerRef.update({
        champRollCount: firebase.firestore.FieldValue.increment(1)
    });
}

function incrementAugmentRollCount(uid) {
    const playerRef = firebase.firestore().collection("tables").doc("sharedTable").collection("players").doc(uid);
    playerRef.update({
        augmentRollCount: firebase.firestore.FieldValue.increment(1)
    });
}


function getRandomTier() {
    const rand = Math.random();
    if (rand < 0.4) return "Z";
    else if (rand < 0.7) return "S";
    else return "A";
}

function joinTable() {
    const user = firebase.auth().currentUser;
    const userId = user.uid;
    const nameInput = document.getElementById("display-name");
    const userName = nameInput.value.trim() || "Người chơi";

    const tableRef = firebase.firestore().collection("tables").doc("sharedTable");

    // Always generate new tiers and environment on join
    const nextTiers = Array.from({ length: 6 }, () => getRandomTier());
    const selectedEnvironment = environments[Math.floor(Math.random() * environments.length)];

    // Set new values for all users
    tableRef.set({ tiers: nextTiers, environment: selectedEnvironment }, { merge: true }).then(() => {
        tableRef.collection("players").doc(userId).set({
            name: userName,
            augments: [],
            champs: [],
            gold: 10,
            nextTiers
        }, { merge: true }).then(() => {
            firebase.firestore().collection("users").doc(userId).set({
                name: userName,
                tables: firebase.firestore.FieldValue.arrayUnion("sharedTable")
            }, { merge: true });

            document.getElementById("join-table-btn").style.display = "none";
            document.getElementById("post-join-buttons").style.display = "block";
            document.getElementById("leave-table-btn").style.display = "inline-block";

            loadTable();
            loadPreviousTables();
        });
    });
}

function resetShopUsage() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const playerRef = firebase.firestore()
        .collection("tables").doc("sharedTable")
        .collection("players").doc(user.uid);

    playerRef.update({ shopUsed: false }).then(() => {
        location.href = "shop.html";  // Go to shop
    });
}


function leaveTable() {
    const user = firebase.auth().currentUser;
    const userId = user.uid;
    const tableRef = firebase.firestore().collection("tables").doc("sharedTable");

    tableRef.collection("players").doc(userId).delete().then(() => {
        return tableRef.collection("players").get();
    }).then(snapshot => {
        if (snapshot.empty) {
            tableRef.update({ tiers: firebase.firestore.FieldValue.delete() });
        }

        document.getElementById("join-table-btn").style.display = "inline-block";
        document.getElementById("post-join-buttons").style.display = "none";
        document.getElementById("leave-table-btn").style.display = "none";
        document.querySelector("#augment-table tbody").innerHTML = "";
    });
}

function updateGold(playerId, value) {
    const gold = parseInt(value);
    if (!isNaN(gold) && gold >= 0) {
        firebase.firestore().collection("tables").doc("sharedTable")
            .collection("players").doc(playerId).update({ gold });
    }
}

function loadPreviousTables() {
    const user = firebase.auth().currentUser;
    const userId = user.uid;
    const container = document.getElementById("previous-tables");
    if (!container) return;

    firebase.firestore().collection("users").doc(userId).get().then(doc => {
        const tables = doc.data()?.tables || [];
        if (tables.length === 0) {
            container.innerHTML = "Không có bảng nào đã tham gia.";
            return;
        }

        container.innerHTML = "";
        tables.forEach(table => {
            const btn = document.createElement("button");
            btn.innerText = `🔁 Tiếp tục bảng: ${table}`;
            btn.onclick = () => {
                alert(`Tính năng tiếp tục bảng '${table}' đang được phát triển.`);
            };
            container.appendChild(btn);
        });
    });
}
async function fetchAugmentStats() {
    const statsSnapshot = await firebase.firestore().collection("augmentStats").get();
    const stats = {};
    statsSnapshot.forEach(doc => {
        stats[doc.id] = doc.data();
    });
    return stats;
}
async function fetchItems() {
    const itemsSnapshot = await firebase.firestore().collection("items").get();
    const items = {};
    itemsSnapshot.forEach(doc => {
        items[doc.id] = doc.data();
    });
    return items;
}



async function loadTable() {
    const tbody = document.querySelector("#augment-table tbody");
    tbody.innerHTML = "";

    const tableRef = firebase.firestore().collection("tables").doc("sharedTable");

    // Fetch augment stats and items
    const [augmentStats, items] = await Promise.all([
        fetchAugmentStats(),
        fetchItems()
    ]);

    // Load environment
    const tableDoc = await tableRef.get();
    if (tableDoc.exists && tableDoc.data().environment) {
        const env = tableDoc.data().environment;
        const envHTML = `
            <div class="augment-hover-wrapper"
                onmouseenter="showDesc('env-tooltip')"
                onmouseleave="hideDesc('env-tooltip')">
                <img src="${env.img}" alt="${env.title}" width="80" height="80">
                <div class="augment-desc-hover" id="env-tooltip" style="left: 100px;">
                    <div class="tooltip-name tier-title-z">${env.title}</div>
                    <div class="tooltip-desc">${env.desc}</div>
                </div>
            </div>
        `;
        const envDisplay = document.getElementById("environment-display");
        if (envDisplay) envDisplay.innerHTML = envHTML;
    }

    // Load players
    const playersSnapshot = await tableRef.collection("players").get();
    playersSnapshot.forEach(doc => {
        const data = doc.data();
        const tr = document.createElement("tr");

        // Augments
        const augmentsHtml = (data.augments || []).map((aug, index) => {
            const tooltipId = `tooltip-${doc.id}-${index}`;
            const desc = (aug.desc || "").replace(/<br>/g, '\n');
            const stats = augmentStats[aug.name] || { win: 0, total: 0 };
            const winRate = stats.total ? Math.round((stats.win / stats.total) * 100) : null;

            let tierLabel = "D", tierClass = "tier-title-d";
            if (winRate >= 90) [tierLabel, tierClass] = ["Z", "tier-title-z"];
            else if (winRate >= 80) [tierLabel, tierClass] = ["S", "tier-title-s"];
            else if (winRate >= 60) [tierLabel, tierClass] = ["A", "tier-title-a"];
            else if (winRate >= 50) [tierLabel, tierClass] = ["B", "tier-title-b"];
            else if (winRate >= 30) [tierLabel, tierClass] = ["C", "tier-title-c"];
            else if (winRate != null) [tierLabel, tierClass] = ["D", "tier-title-d"];
            else[tierLabel, tierClass] = ["?", "tier-title-unknown"];

            const winRateInfo = winRate != null
                ? `<div class="${tierClass}">Tỉ lệ thắng: ${winRate}% (${tierLabel})</div>`
                : `<div class="tier-title-unknown">Chưa có dữ liệu</div>`;

            return `
                <div class="augment-hover-wrapper"
                    onmouseenter="showDesc('${tooltipId}')"
                    onmouseleave="hideDesc('${tooltipId}')">
                    <img src="${aug.img}" alt="${aug.name}" width="60" height="60">
                    <div class="augment-desc-hover" id="${tooltipId}">
                        <div class="tooltip-name ${tierClass}">${aug.name}</div>
                        <div class="tooltip-desc">${desc}</div>
                        ${winRateInfo}
                    </div>
                </div>
            `;
        }).join(" ");

        // Champions
        const champs = data.champs || [];
        const champImgs = champs.map(c => `<img src="${c.img}" class="champ-img chess-${c.tier?.toLowerCase() || 'd'}" title="${c.name}">`).join(" ");

        // Items
        const itemImgs = champs.map((c, i) => {
            if (!c.item) return "";
            const tooltipId = `item-tooltip-${doc.id}-${i}`;
            return `
                <div class="augment-hover-wrapper"
                    onmouseenter="showDesc('${tooltipId}')"
                    onmouseleave="hideDesc('${tooltipId}')">
                    <img src="${c.item.img}" class="item-img" title="${c.item.name}">
                    <div class="augment-desc-hover" id="${tooltipId}">
                        <div class="tooltip-name">${c.item.name}</div>
                        <div class="tooltip-desc">${c.item.desc}</div>
                    </div>
                </div>
            `;
        }).join(" ");



        // Dragon Balls
        const dragonImgs = champs.flatMap(c => (c.dragonBalls || []).map(db => `<img src="${db}" class="db-img" title="Ngọc rồng">`)).join("");

        const winButton = `<button onclick="recordWin('${doc.id}', '${data.name}')">${data.name} Thắng</button>`;
        const nextTiers = data.nextTiers ? data.nextTiers.join(", ") : "Không có";
        const gold = data.gold ?? 0;
        const levels = (data.rollLevels || []).join(" / ");
        // const levelText = levels ? `<small><b>Level(s):</b> ${levels}</small><br>` : "";

        const champRolls = data.champRollCount || 0;
        const augmentRolls = data.augmentRollCount || 0;
        const currentExp = data.omniExp || 0;
        const levelTable = [
            { lvl: 9, exp: 2000 },
            { lvl: 8, exp: 1600 },
            { lvl: 7, exp: 1200 },
            { lvl: 6, exp: 900 },
            { lvl: 5, exp: 700 },
            { lvl: 4, exp: 500 },
            { lvl: 3, exp: 350 },
            { lvl: 2, exp: 200 },
            { lvl: 1, exp: 100 }
        ];
        const currentLevel = levelTable.find(l => currentExp >= l.exp)?.lvl || 1;
        const levelText = `
    <small><b>Cấp độ hiện tại:</b> ${data.level ?? "1"}</small><br>
    <small><b>Kinh nghiệm hiện tại:</b> ${data.exp ?? "100"}</small><br>
    <small><b>Điểm sinh mệnh hiện tại:</b> ${data.hp ?? "120"}</small><br>
    ${levels ? `<small><b>Level(s):</b> ${levels}</small><br>` : ""}
`;

        const hpText = `<small><b></b></small><br>`;




        tr.innerHTML = `
            <td>
            <b>${data.name}</b><br>
            ${levelText}${hpText}
            

                <label>Vàng:</label>
                <input type="number" value="${gold}" min="0"
                    onchange="updateGold('${doc.id}', this.value)" style="width: 60px;"><br>
                <small><b>6 lõi sắp tới:</b> ${nextTiers}</small><br>
                <small>Đổi Tướng: ${champRolls} lần</small><br>
                <small>Đổi Lõi Sức Mạnh: ${augmentRolls} lần</small><br><br>
                ${winButton}
            </td>
            <td>${augmentsHtml}</td>
            <td>${champImgs}</td>
            <td>${itemImgs}</td>
            <td>${dragonImgs}</td>
        `;

        tbody.appendChild(tr);
    });
}





function recordWin(winnerId, winnerName) {
    const tableRef = firebase.firestore().collection("tables").doc("sharedTable");
    const playersRef = tableRef.collection("players");

    playersRef.get().then(snapshot => {
        const players = [];
        const batch = firebase.firestore().batch();

        snapshot.forEach(doc => {
            const data = doc.data();
            const isWinner = doc.id === winnerId;

            const updatedAugments = (data.augments || []).map(aug => {
                const win = aug.win || 0;
                const total = aug.total || 0;
                const newWin = isWinner ? win + 1 : win;
                const newTotal = total + 1;

                const statsRef = firebase.firestore().collection("augmentStats").doc(aug.name);
                batch.set(statsRef, {
                    win: isWinner ? firebase.firestore.FieldValue.increment(1) : firebase.firestore.FieldValue.increment(0),
                    total: firebase.firestore.FieldValue.increment(1)
                }, { merge: true });

                return { ...aug, win: newWin, total: newTotal };
            });

            players.push({
                id: doc.id,
                name: data.name,
                result: isWinner ? "win" : "lose",
                augments: updatedAugments,
                champs: data.champs || [],
                gold: data.gold || 0
            });

            batch.delete(playersRef.doc(doc.id));
        });

        batch.update(tableRef, { tiers: firebase.firestore.FieldValue.delete() });
        return batch.commit().then(() => players);
    }).then(players => {
        return firebase.firestore().collection("matchHistory").add({
            winner: { id: winnerId, name: winnerName },
            timestamp: Date.now(),
            players
        });
    }).then(() => {
        alert(`${winnerName} đã Thắng! Trận đấu kết thúc.`);
        loadTable();
    });
}

// Tooltip
function showDesc(id) {
    const box = document.getElementById(id);
    if (box) box.style.display = "block";
}

function hideDesc(id) {
    const box = document.getElementById(id);
    if (box) box.style.display = "none";
}

document.getElementById("omniToggleBtn").onclick = () => {
    const modal = document.getElementById("omniModal");
    modal.style.display = modal.style.display === "none" ? "block" : "none";
};

function calculateOmni() {
    const r = parseInt(document.getElementById("omniRound").value);
    const g = parseInt(document.getElementById("omniGold").value);
    const exp = parseInt(document.getElementById("omniExp").value);
    const hp = parseInt(document.getElementById("omniHP").value);
    const win = parseInt(document.getElementById("omniWin").value);
    const lose = parseInt(document.getElementById("omniLose").value);
    const gap = parseInt(document.getElementById("omniGap").value);

    if (isNaN(r) || r < 1) return alert("Vui lòng nhập round >= 1");

    // Base values based on round
    const goldBase = [0, 5, 8, 12, 15, 22, 28][r - 1] || 35;
    const expBase = [100, 100, 100, 100, 150, 100, 150][r - 1] || 250;

    // Streak bonuses
    const winBonus = win >= 7 ? 25 : [0, 0, 2, 5, 10, 15, 20][win] || 0;
    const loseBonus = lose >= 7 ? 20 : [0, 0, 2, 5, 8, 12, 17][lose] || 0;

    // Interest from gold
    const interest = Math.floor(g / 10);

    // Damage calculation (from previous round)
    const dmgIndex = Math.max(0, r - 2);
    const baseDMG = [5, 8, 10, 12, 15, 18, 20][dmgIndex] || 20;
    const perGap = [1, 2, 3, 4, 5, 6, 8][dmgIndex] || 10;
    const totalDMG = baseDMG + perGap * (gap || 0);

    // Final stats
    const totalGold = g + goldBase + winBonus + loseBonus + interest;
    const totalExp = exp + expBase;
    const finalHP = hp - (gap > 0 ? totalDMG : 0);

    // Level mapping from exp
    const levelTable = [
        { lvl: 9, exp: 2000 }, { lvl: 8, exp: 1600 }, { lvl: 7, exp: 1200 },
        { lvl: 6, exp: 900 }, { lvl: 5, exp: 700 }, { lvl: 4, exp: 500 },
        { lvl: 3, exp: 350 }, { lvl: 2, exp: 200 }, { lvl: 1, exp: 100 }
    ];
    const newLevel = levelTable.find(l => totalExp >= l.exp)?.lvl || 1;

    // Display result
    document.getElementById("omniResult").innerHTML = `
      <b>💰 Tính Vàng:</b><br>
      +${goldBase} vàng cơ bản<br>
      +${winBonus} vàng chuỗi thắng<br>
      +${loseBonus} vàng chuỗi thua<br>
      +${interest} vàng lợi tức<br>
      👉 <b>Tổng vàng: ${totalGold}</b><br><br>

      <b>📚 Tính Kinh Nghiệm:</b><br>
      +${expBase} EXP<br>
      👉 <b>Tổng Kinh Nghiệm: ${totalExp}</b><br>
      👉 <b>Level mới: ${newLevel}</b><br><br>

      <b>❤️ Điểm sinh mệnh:</b><br>
      ${gap > 0 ? `-<b>${totalDMG}</b> điểm sinh mệnh<br>👉 Điểm sinh mệnh còn: <b>${finalHP}</b>` : `✅ Không có thiệt hại`}
    `;

    // Save to Firestore
    const user = firebase.auth().currentUser;
    if (!user) return;

    const playerRef = firebase.firestore()
        .collection("tables").doc("sharedTable")
        .collection("players").doc(user.uid);

    playerRef.update({
        gold: totalGold,
        exp: totalExp,
        level: newLevel,
        hp: finalHP
    }).then(() => {
        console.log("🎯 Omni stats updated in Firestore.");
        loadTable(); // Reflect updates on table immediately
    });
}



