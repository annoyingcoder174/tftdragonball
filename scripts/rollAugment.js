firebase.auth().onAuthStateChanged(user => {
    if (user) {
        // User is signed in → load the page
        roll();
        document.getElementById("reroll-button").onclick = roll;
    } else {
        // No user → sign in anonymously
        firebase.auth().signInAnonymously()
            .then(() => {
                roll();
                document.getElementById("reroll-button").onclick = roll;
            })
            .catch(err => {
                alert("Không thể đăng nhập ẩn danh: " + err.message);
            });
    }
});


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
            desc: "Khi người chơi thua, họ sẽ không, thay vào đó, nhận 1 Goku GT SSJ4(và phải sử dụng nó), 30 vàng, và 1 điểm sinh mệnh. Tới cuối trận, người chơi gây thêm 20 thiệt hại lên đối phương.",
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
            desc: "Lượng vàng hiện tại và lượng vàng kiếm được sẽ chuyển thành điểm sinh mệnh. Người chơi có thể sử dụng điểm sinh mệnh để mua bất cứ điều gì. +2/4/6 điểm sinh mệnh mỗi vòng đấu.",
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

let rollCount = 0;
const maxRolls = 2;

function getRandomAugments(tier) {
    const pool = augments[tier];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function roll() {
    const tier = document.getElementById("tier-select").value;
    if (!tier) {
        alert("Vui lòng chọn bậc trước khi rút!");
        return;
    }

    if (rollCount >= maxRolls) {
        alert("Bạn đã hết lượt rút!");
        return;
    }

    const rolled = getRandomAugments(tier);
    const container = document.getElementById("augment-options");
    container.innerHTML = "";

    rolled.forEach(aug => {
        const card = document.createElement("div");
        card.className = "augment-card";

        const img = document.createElement("img");
        img.src = aug.img;
        img.alt = aug.name;
        img.className = "augment-img";

        const name = document.createElement("div");
        name.className = "augment-name";
        name.textContent = aug.name;

        const desc = document.createElement("div");
        desc.className = "augment-desc";
        desc.innerHTML = aug.desc;

        const rateEl = document.createElement("div");
        rateEl.className = "augment-rate";
        rateEl.textContent = "Đang tải dữ liệu...";

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(rateEl);
        container.appendChild(card);

        // Load winrate from global stats
        firebase.firestore().collection("augmentStats").doc(aug.name).get().then(doc => {
            if (doc.exists) {
                const data = doc.data();
                const win = data.win || 0;
                const total = data.total || 0;
                const winRate = total > 0 ? Math.round((win / total) * 100) : 0;

                let tierClass = "";
                let tierLabel = "";
                if (winRate >= 90) [tierLabel, tierClass] = ["Z", "tier-z"];
                else if (winRate >= 80) [tierLabel, tierClass] = ["S", "tier-s"];
                else if (winRate >= 60) [tierLabel, tierClass] = ["A", "tier-a"];
                else if (winRate >= 50) [tierLabel, tierClass] = ["B", "tier-b"];
                else if (winRate >= 30) [tierLabel, tierClass] = ["C", "tier-c"];
                else[tierLabel, tierClass] = ["D", "tier-d"];

                rateEl.textContent = `Tỉ lệ thắng: ${winRate}% (${tierLabel})`;
                rateEl.classList.add(tierClass);
            } else {
                rateEl.textContent = "Chưa có dữ liệu";
                rateEl.classList.add("tier-unknown");
            }
        });

        // Save selected augment with tier
        card.onclick = () => {
            const user = firebase.auth().currentUser;
            if (!user) return alert("Bạn chưa đăng nhập!");

            firebase.firestore().collection("tables").doc("sharedTable")
                .collection("players").doc(user.uid)
                .get().then(doc => {
                    if (!doc.exists) return;
                    const augments = doc.data().augments || [];
                    augments.push({ ...aug, tier }); // ← Save tier with augment
                    return firebase.firestore().collection("tables")
                        .doc("sharedTable").collection("players")
                        .doc(user.uid).update({ augments });
                })
                .then(() => location.href = "main.html");
        };
    });

    rollCount++;
    document.getElementById("roll-count").textContent = `Số lần rút còn lại: ${maxRolls - rollCount}`;
}

function exitToMain() {
    location.href = "main.html";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("roll-btn").onclick = roll;
});
