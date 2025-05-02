firebase.auth().onAuthStateChanged(user => {
    if (user) {
        checkJoinStatus();
        loadTable();
        loadPreviousTables();
    } else {
        firebase.auth().signInAnonymously();
    }
});
const environments = [
    {
        title: "Trái Đất",
        desc: "Tất cả người chơi có 1 lượt đổi miễn phí mỗi vòng.",
        img: "/images/environments/1.webp"
    },
    {
        title: "Hành Tinh Namek",
        desc: "Tất cả người chơi +5 điểm sinh mệnh mỗi vòng.",
        img: "/images/environments/2.webp"
    },
    {
        title: "Hành tinh Vegeta",
        desc: "Tất cả người chơi có 6 ô tướng, và 4 ô chứa tướng.",
        img: "/images/environments/3.webp"
    },
    {
        title: "Hành tinh Yardrat",
        desc: "+1 ấn ngẫu nhiên.",
        img: "/images/environments/4.webp"
    },
    {
        title: "Hành Tinh Cereal",
        desc: "+1 trang bị.",
        img: "/images/environments/5.webp"
    },
    {
        title: "Hành tinh của Giới Vương Bắc",
        desc: "Tất cả người chơi + vàng mỗi vòng.",
        img: "/images/environments/6.webp"
    },
    {
        title: "Lâu Đài Của Beerus",
        desc: "Tất cả người chơi +50 exp mỗi vòng",
        img: "/images/environments/7.webp"
    },
    {
        title: "Điểm vỡ thời gian",
        desc: "Bỏ qua vòng 3 và vòng 7 (vẫn nhận vàng)",
        img: "/images/environments/9.webp"
    },
    {
        title: "Vô Diện Giới",
        desc: "Không có gì xảy ra",
        img: "/images/environments/8.webp"
    }
];

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

    tableRef.get().then(tableDoc => {
        let nextTiers, selectedEnvironment;
        if (tableDoc.exists) {
            const data = tableDoc.data();
            nextTiers = Array.isArray(data.tiers) ? data.tiers : Array.from({ length: 6 }, () => getRandomTier());
            selectedEnvironment = data.environment || environments[Math.floor(Math.random() * environments.length)];
        } else {
            nextTiers = Array.from({ length: 6 }, () => getRandomTier());
            selectedEnvironment = environments[Math.floor(Math.random() * environments.length)];
            tableRef.set({ tiers: nextTiers, environment: selectedEnvironment }, { merge: true });
        }

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

function loadTable() {
    const tbody = document.querySelector("#augment-table tbody");
    tbody.innerHTML = "";

    const tableRef = firebase.firestore().collection("tables").doc("sharedTable");

    // Load environment first
    tableRef.get().then(doc => {
        if (doc.exists && doc.data().environment) {
            const env = doc.data().environment;
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
            if (envDisplay) {
                envDisplay.innerHTML = envHTML;
            }
        }

        // Then load players
        tableRef.collection("players").get().then(snapshot => {
            snapshot.forEach(doc => {
                const data = doc.data();
                const tr = document.createElement("tr");

                // Augments
                const augmentsHtml = (data.augments || []).map((aug, index) => {
                    const tooltipId = `tooltip-${doc.id}-${index}`;
                    const desc = (aug.desc || "").replace(/<br>/g, '\n');
                    const winRate = aug.total ? Math.round((aug.win / aug.total) * 100) : null;
                    const displayTier = aug.tier || "A";

                    let titleClass = "";
                    if (displayTier === "Z") titleClass = "tier-title-z";
                    else if (displayTier === "S") titleClass = "tier-title-s";
                    else if (displayTier === "A") titleClass = "tier-title-a";

                    const extraInfo = winRate != null
                        ? `<div class="tooltip-winrate">Tỉ lệ thắng: ${winRate}%</div>`
                        : "";

                    return `
                        <div class="augment-hover-wrapper"
                            onmouseenter="showDesc('${tooltipId}')"
                            onmouseleave="hideDesc('${tooltipId}')">
                            <img src="${aug.img}" alt="${aug.name}" width="60" height="60">
                            <div class="augment-desc-hover" id="${tooltipId}">
                                <div class="tooltip-name ${titleClass}">${aug.name}</div>
                                <div class="tooltip-desc">${desc}</div>
                                ${extraInfo}
                            </div>
                        </div>
                    `;
                }).join(" ");

                // Champions
                const champsHtml = (data.champs || []).map(champ => {
                    const tierClass = `chess-${champ.tier?.toLowerCase() || 'd'}`;
                    const champImg = `<img src="${champ.img}" title="${champ.name}" class="champ-img ${tierClass}">`;
                    const itemImg = champ.item ? `<img src="${champ.item}" class="item-img" title="Trang bị">` : "";
                    const dragonImgs = (champ.dragonBalls || []).map(db => `<img src="${db}" class="db-img" title="Ngọc rồng">`).join("");

                    return `
                        <div style="display: inline-block; text-align: center; margin: 4px;">
                            ${champImg}<br>
                            ${itemImg}<br>
                            ${dragonImgs}
                        </div>
                    `;
                }).join(" ");


                const winButton = `<button onclick="recordWin('${doc.id}', '${data.name}')">${data.name} Thắng</button>`;
                const nextTiers = data.nextTiers ? data.nextTiers.join(", ") : "Không có";
                const gold = data.gold ?? 0;
                const levels = (data.rollLevels || []).join(" / ");
                const levelText = levels ? `<small><b>Level(s):</b> ${levels}</small><br>` : "";

                tr.innerHTML = `
                    <td>
                        ${data.name}<br>
                        ${levelText}<br>
                        ${winButton}<br>
                        <label>Vàng:</label>
                        <input type="number" value="${gold}" min="0"
                            onchange="updateGold('${doc.id}', this.value)" style="width: 60px;"><br>
                        <small><b>6 lõi sắp tới:</b> ${nextTiers}</small><br>
                        <b>Tướng đã mua:</b><br>${champsHtml}
                    </td>
                    <td>${augmentsHtml}</td>
                `;
                tbody.appendChild(tr);
            });
        });
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
