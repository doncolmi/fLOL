const toastSchema = require('../toastSchema');

const toastData = [
    {
        "name" : "3WinningStreak",
        "title" : "이 유저는 3연승 중입니다!",
        "content" : "이 문서의 주인 [name]은 현재 3연승 중입니다!",
        "img" : "/assets/toast/fire.png",
        "class" : "redToast",
    },
    {
        "name" : "4WinningStreak",
        "title" : "이 유저는 4연승 중입니다!",
        "content" : "이 문서의 주인 [name]은 현재 4연승 중입니다! 5연승은 힘들 수 있습니다.",
        "img" : "/assets/toast/fire.png",
        "class" : "redToast",
    },
    {
        "name" : "5WinningStreak",
        "title" : "⚠주의⚠ 이 유저는 5연승 중입니다!",
        "content" : "이 문서의 주인 [name]은 현재 5연승 중입니다! 어쩌면 그 이상일 수 있습니다.",
        "img" : "/assets/toast/fire.png",
        "class" : "redToast",
    },
    {
        "name" : "unrank",
        "title" : "이 유저는 새싹입니다.",
        "content" : "이 문서의 주인 [name]은 현재 언랭입니다. 아이언이 될수도 있고 챌린저도 될 수 있는 가능성이 있습니다!",
        "img" : "/assets/toast/unrank.png",
        "class" : "greenToast",
    },
    {
        "name" : "ghost",
        "title" : "⚠주의⚠ 이 유저는 있지만 없습니다.",
        "content" : "이 문서의 주인 [name]은 유령입니다. 그가 최근에 간 라인도, 챔피언도, 게임도 찾을 수 없습니다...",
        "img" : "/assets/toast/ghost.png",
        "class" : "blackToast",
    },
    {
        "name" : "simhae",
        "title" : "⚠주의⚠ 심해냄새가 납니다!",
        "content" : "이 문서의 주인 [name]은 아이언, 브론즈에 거주하고 있을 확률이 높습니다. 심해냄새에 면역이 없다면 이 문서를 빠르게 나가십시오.",
        "img" : "/assets/toast/simhae.png",
        "class" : "blueToast",
    },
    {
        "name" : "silverGold",
        "title" : "이 유저는 일반인 입니다.",
        "content" : "이 문서의 주인 [name]은 실버, 골드에 거주하고 있을 확률이 높습니다. 평범한 일반인 입니다.",
        "img" : "/assets/toast/silverGold.png",
        "class" : "greenToast",
    },
    {
        "name" : "platinum",
        "title" : "이 유저는 플레티넘 입니다.",
        "content" : "이 문서의 주인 [name]은 플레티넘 입니다.",
        "img" : "/assets/toast/pl.png",
        "class" : "blueToast",
    },
    {
        "name" : "diamond",
        "title" : "이 유저는 다이아 입니다.",
        "content" : "이 문서의 주인 [name]은 다이아 입니다. 이 유저는 전국 상위 2.4%이내에 들어갑니다.",
        "img" : "/assets/toast/di.png",
        "class" : "blueToast",
    },
    {
        "name" : "master",
        "title" : "이 유저는 마스터 입니다.",
        "content" : "이 문서의 주인 [name]은 마스터 입니다. 이 유저는 전국 상위 0.036%이내에 들어갑니다.",
        "img" : "/assets/toast/ma.png",
        "class" : "blueToast",
    },
    {
        "name" : "grandMaster",
        "title" : "이 유저는 그랜드 마스터 입니다.",
        "content" : "이 문서의 주인 [name]은 그랜드 마스터 입니다. 이 유저는 전국 상위 0.033%이내에 들어갑니다.",
        "img" : "/assets/toast/gma.png",
        "class" : "blueToast",
    },
    {
        "name" : "challenger",
        "title" : "이 유저는 챌린저 입니다.",
        "content" : "이 문서의 주인 [name]은 챌린저 입니다. 이 유저는 전국 상위 300명 안에 들어갑니다. 혹시라도 이 유저가 롤에 대해 말한다면 닥치고 들어야 합니다.",
        "img" : "/assets/toast/ch.png",
        "class" : "blueToast",
    },
    {
        "name" : "top",
        "title" : "⚠주의⚠ 이 유저는 탑신병자 입니다.",
        "content" : "이 문서의 주인 [name]은 탑신병자 입니다. 정글 유저들은 이 유저를 조심해야 합니다.",
        "img" : "/assets/toast/top.png",
        "class" : "redToast",
    },
    {
        "name" : "jungle",
        "title" : "⚠주의⚠ 이 유저는 정글백정 입니다.",
        "content" : "이 문서의 주인 [name]은 정글백정 입니다. 이 유저가 당신과 겸상하려 든다면 자리를 피하십시오.",
        "img" : "/assets/toast/jungle.png",
        "class" : "redToast",
    },
    {
        "name" : "mid",
        "title" : "이 유저는 미드라이너 입니다.",
        "content" : "이 문서의 주인 [name]은 미드라이너 입니다. 근본이 존재합니다.",
        "img" : "/assets/toast/mid.png",
        "class" : "blueToast",
    },
    {
        "name" : "ad",
        "title" : "⚠주의⚠ 이 유저는 원딜러 입니다.",
        "content" : "이 문서의 주인 [name]은 원딜러 입니다. 이기적이며 서폿 없이 존재 할 수는 없습니다.",
        "img" : "/assets/toast/ad.png",
        "class" : "redToast",
    },
    {
        "name" : "sup",
        "title" : "이 유저는 서포터 입니다.",
        "content" : "이 문서의 주인 [name]은 서포터 입니다. 소환사의 협곡에서 어머니와 같은 존재입니다.",
        "img" : "/assets/toast/sup.png",
        "class" : "blueToast",
    },
];

module.exports.saveToast = () => {
    const dataLength = toastData.length;
    const cnt = toastSchema.countDocuments({ })
        .then((res) => {
            if(res !== dataLength) {
                console.log("data 크기가 달라 toastData 추가 중...");
                for(const item of toastData) {
                    const toast = new toastSchema(item);
                    toast.save();
                }
                console.log("data 추가 완료");
            } else {
                console.log("toastData 추가 없음.")
            }
        })
      .catch((e) => console.error(e));
}