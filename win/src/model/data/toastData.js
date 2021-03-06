const toastSchema = require('../schema/toastSchema');

const toastData = [
  {
    name: '3WinningStreak',
    title: '이 유저는 3연승 중입니다!',
    content: '이 문서의 주인 [name]님은 현재 3연승 중입니다!',
    img: '/assets/toast/fire.png',
    class: 'winlose',
  },
  {
    name: '4WinningStreak',
    title: '이 유저는 4연승 중입니다!',
    content:
      '이 문서의 주인 [name]님은 현재 4연승 중입니다! 5연승은 힘들 수 있습니다.',
    img: '/assets/toast/fire.png',
    class: 'winlose',
  },
  {
    name: '5WinningStreak',
    title: '이 유저는 5연승 중입니다!',
    content:
      '이 문서의 주인 [name]님은 현재 5연승 중입니다! 어쩌면 그 이상일 수 있습니다.',
    img: '/assets/toast/fire.png',
    class: 'winlose',
  },
  {
    name: 'unrank',
    title: '이 유저는 새싹입니다.',
    content:
      '이 문서의 주인 [name]님은 현재 언랭입니다. 아이언이 될수도 있고 챌린저도 될 수 있는 가능성이 있습니다!',
    img: '/assets/toast/unrank.png',
    class: 'rank',
  },
  {
    name: 'ghost',
    title: '이 유저는 있지만 없습니다.',
    content:
      '이 문서의 주인 [name]님은 유령입니다. 그가 최근에 간 라인도, 챔피언도, 게임도 찾을 수 없습니다...',
    img: '/assets/toast/ghost.png',
    class: 'ghost',
  },
  {
    name: 'simhae',
    title: '심해냄새가 납니다!',
    content:
      '이 문서의 주인 [name]님은 아이언, 브론즈에 거주하고 있을 확률이 높습니다. 심해냄새에 면역이 없다면 이 문서를 빠르게 나가십시오.',
    img: '/assets/toast/simhae.png',
    class: 'rank',
  },
  {
    name: 'silverGold',
    title: '이 유저의 실력은 일반인 수준 입니다.',
    content:
      '이 문서의 주인 [name]님은 실버, 골드에 거주하고 있을 확률이 높습니다. 평범한 일반인 입니다.',
    img: '/assets/toast/silverGold.png',
    class: 'rank',
  },
  {
    name: 'platinum',
    title: '이 유저는 플레티넘 티어 입니다.',
    content: '이 문서의 주인 [name]님은 플레티넘 티어 입니다.',
    img: '/assets/toast/pl.png',
    class: 'rank',
  },
  {
    name: 'diamond',
    title: '이 유저는 다이아몬드 티어 입니다.',
    content:
      '이 문서의 주인 [name]님은 다이아몬드 티어 입니다. 이 유저는 전국 상위 2.4%이내에 들어갑니다.',
    img: '/assets/toast/di.png',
    class: 'rank',
  },
  {
    name: 'master',
    title: '이 유저는 마스터 입니다.',
    content:
      '이 문서의 주인 [name]님은 마스터 입니다. 이 유저는 전국 상위 0.036%이내에 들어갑니다.',
    img: '/assets/toast/ma.png',
    class: 'rank',
  },
  {
    name: 'grandMaster',
    title: '이 유저는 그랜드 마스터 입니다.',
    content:
      '이 문서의 주인 [name]님은 그랜드 마스터 입니다. 이 유저는 전국 상위 0.033%이내에 들어갑니다.',
    img: '/assets/toast/gma.png',
    class: 'rank',
  },
  {
    name: 'challenger',
    title: '이 유저는 챌린저 입니다.',
    content:
      '이 문서의 주인 [name]님은 챌린저 입니다. 이 유저는 전국 상위 300명 안에 들어갑니다. 혹시라도 이 유저가 롤에 대해 말한다면 닥치고 들어야 합니다.',
    img: '/assets/toast/ch.png',
    class: 'rank',
  },
  {
    name: 'top',
    title: '이 유저는 탑신병자 입니다.',
    content:
      '이 문서의 주인 [name]님은 탑신병자 입니다. 정글 유저들은 이 유저를 조심해야 합니다.',
    img: '/assets/toast/top.png',
    class: 'position',
  },
  {
    name: 'jungle',
    title: '이 유저는 정글백정 입니다.',
    content:
      '이 문서의 주인 [name]님은 정글백정 입니다. 이 유저가 당신과 겸상하려 든다면 자리를 피하십시오.',
    img: '/assets/toast/jungle.png',
    class: 'position',
  },
  {
    name: 'mid',
    title: '이 유저는 미드라이너 입니다.',
    content: '이 문서의 주인 [name]님은 미드라이너 입니다. 근본이 존재합니다.',
    img: '/assets/toast/mid.png',
    class: 'position',
  },
  {
    name: 'ad',
    title: '이 유저는 원딜러 입니다.',
    content:
      '이 문서의 주인 [name]님은 원딜러 입니다. 이기적이며 서폿 없이 존재 할 수는 없습니다.',
    img: '/assets/toast/ad.png',
    class: 'position',
  },
  {
    name: 'sup',
    title: '이 유저는 서포터 입니다.',
    content:
      '이 문서의 주인 [name]님은 서포터 입니다. 소환사의 협곡에서 어머니와 같은 존재입니다.',
    img: '/assets/toast/sup.png',
    class: 'position',
  },
  {
    name: 'levelFifty',
    title: '이 유저는 롤을 즐기며 하고 있습니다.',
    content:
      '이 문서의 주인 [name]님은 아직 레벨이 50 미만입니다. 아직 즐기며 게임 중입니다.',
    img: '/assets/toast/happy.png',
    class: 'level',
  },
  {
    name: 'levelOnehundred',
    title: '이 유저에게 롤은 취미입니다.',
    content:
      '이 문서의 주인 [name]님은 레벨이 50 이상 입니다. 이 유저에게 롤은 건전한 취미입니다.',
    img: '/assets/toast/hobby.png',
    class: 'level',
  },
  {
    name: 'levelOnehundredFifty',
    title: '이 유저에게 롤이란 취미 그 이상입니다.',
    content:
      '이 문서의 주인 [name]님은 레벨이 150 이상입니다. 이제 롤은 이 유저에게 취미 그 이상의 의미를 가집니다.',
    img: '/assets/toast/angry.png',
    class: 'level',
  },
  {
    name: 'levelTwohundredFifty',
    title: '이 유저에게 롤은 곧 자신과 같습니다.',
    content:
      '이 문서의 주인 [name]님은 레벨이 250 이상입니다. 롤에 꽤나 많은 시간을 투자한 지박령일 확률이 높습니다.',
    img: '/assets/toast/levelGhost.png',
    class: 'level',
  },
  {
    name: 'levelThreehundred',
    title: '이 유저는 롤창입니다!',
    content:
      '이 문서의 주인 [name]님은 레벨이 300 이상입니다. 하지만 괜찮습니다. 이 세상에 더한 롤창들이 있습니다.',
    img: '/assets/toast/lolchang.png',
    class: 'level',
  },
  {
    name: 'levelFivehundred',
    title: '이 유저는 롤창 of 롤창 입니다!',
    content:
      '이 문서의 주인 [name]님은 레벨이 500 이상입니다. 고인물일 확률이 높습니다.',
    img: '/assets/toast/lolchang2.png',
    class: 'level',
  },
  {
    name: 'levelOneK',
    title: '이 유저에게 삶이란 롤입니다.',
    content:
      '이 문서의 주인 [name]님은 레벨이 1000 이상입니다. 이정도면 존경을 표하십시오.',
    img: '/assets/toast/simhae.png',
    class: 'level',
  },
  {
    name: 'soloRank',
    title: '이 유저는 솔랭전사 입니다.',
    content:
      '이 문서의 주인 [name]님은 솔랭전사 이거나 최근 솔랭을 즐겨했습니다.',
    img: '/assets/toast/soloRank.png',
    class: 'match',
  },
  {
    name: 'defalut',
    title: '이 유저는 일반게임을 즐겨합니다.',
    content:
      '이 문서의 주인 [name]님은 일반게임을 즐겨하는 유저이거나 최근 일반게임을 자주했습니다.',
    img: '/assets/toast/gamer.png',
    class: 'match',
  },
  {
    name: 'swordWind',
    title: '이 유저는 칼바람나락에 거주하고 있습니다.',
    content: '이 문서의 주인 [name]님은 칼바람 나락을 즐겨합니다.',
    img: '/assets/toast/swordWind.png',
    class: 'match',
  },
  {
    name: 'freeRank',
    title: '이 유저는 자랭전사 입니다.',
    content: '이 문서의 주인 [name]님은 자유랭크를 즐겨합니다.',
    img: '/assets/toast/freeRank.png',
    class: 'match',
  },
  {
    name: 'urf',
    title: '이 유저는 특별게임모드 유저입니다.',
    content: '이 문서의 주인 [name]님은 특별게임모드를 즐겨합니다.',
    img: '/assets/toast/urf.png',
    class: 'match',
  },
];

module.exports.saveToast = () => {
  const dataLength = toastData.length;
  const cnt = toastSchema
    .countDocuments({})
    .then((res) => {
      if (res !== dataLength) {
        console.log('data 크기가 달라 toastData 추가 중...');
        for (const item of toastData) {
          const toast = new toastSchema(item);
          toast.save();
        }
        console.log('data 추가 완료');
      } else {
        console.log('toastData 추가 없음.');
      }
    })
    .catch((e) => console.error(e));
};
