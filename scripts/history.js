firebase.firestore().collection("matchHistory")
    .orderBy("timestamp", "desc")
    .get().then(snapshot => {
        const container = document.getElementById("match-list");
        container.innerHTML = "";

        snapshot.forEach(doc => {
            const data = doc.data();
            const btn = document.createElement("button");
            const date = new Date(data.timestamp).toLocaleString();
            btn.innerText = `🏆 ${data.winner.name} - ${date}`;
            btn.onclick = () => showDetails(data);
            container.appendChild(btn);
        });
    });

function showDetails(data) {
    const detail = document.getElementById("match-details");
    const playersHtml = data.players.map(p => {
        const augHtml = (p.augments || []).map(a =>
            `<img src="${a.img}" title="${a.name}" width="50">`
        ).join(" ");
        return `<div style="margin:10px 0">
      <b>${p.name}</b> - ${p.result.toUpperCase()}<br>${augHtml}
    </div>`;
    }).join("");

    detail.innerHTML = `
    <h2>Kết quả: ${data.winner.name} thắng</h2>
    ${playersHtml}
  `;
}
