const log = console.log;
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const axios = require('axios');

const test = require('../service/userService');
const mongo = require('../bin/mongoose');
require('dotenv').config();
mongo();

const userSchema = require('../model/userSchema');

const getMax = (list) => {
  const listSet = new Set([...list]);
  const listObj = {};
  for (const elem of listSet) {
    listObj[elem] = 0;
  }
  for (const elem of list) {
    listObj[elem]++;
  }
  let max = 0;
  let maxKey;
  for (const elem of listSet) {
    if (listObj[elem] > max) {
      max = listObj[elem];
      maxKey = elem;
    }
  }
  return maxKey;
};

const getQueue = (queue) => {
  if (queue === '420') return '솔랭';
  if (queue === '430') return '일겜';
  if (queue === '440') return '자랭';
  if (queue === '450') return '칼바람';
  if (queue === '900') return '우르프';
  if (queue === '910') return '초월';
  if (queue === '920') return '포로왕';
  if (queue === '1200') return '돌격 넥서스';
  if (queue === '1010') return '칼바람';
  return '기타게임';
};

const testUser = new userSchema({
  name: 'test',
  encryptedId: 'test',
  encryptedAccountId: 'test',
  level: 1,
  rankTier: 'test',
  rankScore: 1,
  win: 1,
  lose: 1,
  etc: 'test',
  recentMatch: 'test',
  recentChampion: 'test',
  recentWinLose: 'test',
});

describe('getUser', async function () {
  before(() => {
    testUser.save((err, res) => {
      if (err) return console.error(err);
      log(`document Save!`);
    });
  });

  it('getUserCheckName', async function () {
    const user = await test.getUser('물총총');
    assert.deepEqual(user.name, '물총총', 'user.name과 닉네임이 같은가?');
  });

  it('getUserCheckLevel', async function () {
    const user = await test.getUser('물총총');
    assert.isNumber(user.level);
  });

  it('getUserMongoCheckedId', function (done) {
    userSchema.countDocuments({ encryptedAccountId: 'test' }, (err, count) => {
      if (count > 0) {
        log(`count is ${count}!`);
        done();
      }
    });
  });

  it('getUserMongoModifiedDate', async function () {
    await userSchema.findOne(
      { encryptedAccountId: 'test' },
      'modifiedDate',
      (err, user) => {
        if (err) return handleError(err);
        const elapsed = Date.now() - user.modifiedDate.getTime() / 1000;
        assert.isBoolean(elapsed > 300);
      }
    );
  });

  it('getUserDBForSave', async function () {
    const Headers = {
      headers: {
        'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Riot-Token': process.env.KEY,
      },
    };
    console.log(Headers);
    const getUserLeagueAPI = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/c79th2qGCOVr_GiHEY7QjwYPh7OnrbpbN1yqrnqkCDlsimE`;
    const user = await axios.get(getUserLeagueAPI, Headers);
    const data = user.data[0];
    const getEtc = (user) => {
      const etc = [];
      if (user.veteran) res.push('veteran');
      if (user.inactive) res.push('inactive');
      if (user.freshBlood) res.push('freshBlood');
      if (user.hotStreak) res.push('hotStreak');
      return etc;
    };
    const leagueData = {
      rankTier: `${data.tier} ${data.rank}`,
      rankScore: `${data.leaguePoints}`,
      win: data.wins,
      lose: data.losses,
      etc: getEtc(data),
    };

    const getUserMatchAPI = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/PdPyA0zzPOH5nhA2YwRcv8nK7EXJdNbImMqkDVpZ23Q54ss?endIndex=30&beginIndex=0`;
    const getMatches = await axios.get(getUserMatchAPI, Headers);
    const Matches = [...getMatches.data.matches];
    const champions = [];
    const queue = [];
    const lane = [];
    const gameIds = [];
    for (const elem of Matches) {
      champions.push(elem.champion + '');
      queue.push(elem.queue + '');
      lane.push(elem.lane);
      if (gameIds.length < 5) gameIds.push(elem.gameId);
    }
    let recentWinLose = '';
    for (const id of gameIds) {
      const matchAPI = `https://kr.api.riotgames.com/lol/match/v4/matches/${id}`;
      const match = await axios.get(matchAPI, Headers);
      const teams = match.data.teams[0];
      if (teams.win === 'Win') {
        let winLose = false;
        for (let i = 0; i < 5; i++) {
          const member = match.data.participantIdentities[i].player.summonerName
            .replace(/(\s*)/g, '')
            .toLowerCase();
          if (member === '박정훈발때') {
            winLose = true;
          }
        }
        winLose ? (recentWinLose += 'W') : (recentWinLose += 'L');
      } else {
        let winLose = true;
        for (let i = 0; i < 5; i++) {
          const member = match.data.participantIdentities[i].player.summonerName
            .replace(/(\s*)/g, '')
            .toLowerCase();
          if (member === '박정훈발때') {
            winLose = false;
          }
        }
        winLose ? (recentWinLose += 'W') : (recentWinLose += 'L');
      }
    }

    console.log(recentWinLose);
  });

  after(() => {
    userSchema.deleteOne({ name: 'test' }, (err, res) => {
      if (err) return handleError(err);
      log(`Delete data!`);
    });
  });
});

const champion = {
  '266': '아트록스',
  '103': '아리',
  '84': '아칼리',
  '12': '알리스타',
  '32': '아무무',
  '34': '애니비아',
  '1': '애니',
  '523': '아펠리오스',
  '22': '애쉬',
  '136': '아우렐리온 솔',
  '268': '아지르',
  '432': '바드',
  '53': '블리츠크랭크',
  '63': '브랜드',
  '201': '브라움',
  '51': '케이틀린',
  '164': '카밀',
  '69': '카시오페아',
  '31': '초가스',
  '42': '코르키',
  '122': '다리우스',
  '131': '다이애나',
  '119': '드레이븐',
  '36': '문도 박사',
  '245': '에코',
  '60': '엘리스',
  '28': '이블린',
  '81': '이즈리얼',
  '9': '피들스틱',
  '114': '피오라',
  '105': '피즈',
  '3': '갈리오',
  '41': '갱플랭크',
  '86': '가렌',
  '150': '나르',
  '79': '그라가스',
  '104': '그레이브즈',
  '120': '헤카림',
  '74': '하이머딩거',
  '420': '일라오이',
  '39': '이렐리아',
  '427': '이블린',
  '40': '잔나',
  '59': '자르반 4세',
  '24': '잭스',
  '126': '제이스',
  '202': '진',
  '222': '징크스',
  '145': '카이사',
  '429': '칼리스타',
  '43': '카르마',
  '30': '카서스',
  '38': '카사딘',
  '55': '카타리나',
  '10': '케일',
  '141': '케인',
  '85': '케넨',
  '121': '카직스',
  '203': '킨드레드',
  '240': '클레드',
  '96': '코그모',
  '7': '르블랑',
  '64': '리신',
  '89': '레오나',
  '127': '리산드라',
  '236': '루시안',
  '117': '룰루',
  '99': '럭스',
  '54': '말파이트',
  '90': '말자하',
  '57': '마오카이',
  '11': '마스터 이',
  '21': '미스 포춘',
  '62': '오공',
  '82': '모데카이저',
  '25': '모르가나',
  '267': '나미',
  '75': '나서스',
  '111': '노틸러스',
  '518': '니코',
  '76': '니달리',
  '56': '녹턴',
  '20': '누누',
  '2': '올라프',
  '61': '오리아나',
  '516': '오른',
  '80': '판테온',
  '78': '뽀삐',
  '555': '파이크',
  '246': '키아나',
  '133': '퀸',
  '497': '라칸',
  '33': '람머스',
  '421': '렉사이',
  '58': '레넥톤',
  '107': '렝가',
  '92': '리븐',
  '68': '럼블',
  '13': '라이즈',
  '113': '세주아니',
  '235': '세나',
  '875': '세트',
  '35': '샤코',
  '98': '쉔',
  '102': '쉬바나',
  '27': '신지드',
  '14': '사이온',
  '15': '시비르',
  '72': '스카너',
  '37': '소나',
  '16': '소라카',
  '50': '스웨인',
  '517': '사일러스',
  '134': '신드라',
  '223': '탐 켄치',
  '163': '탈리야',
  '91': '탈론',
  '44': '타릭',
  '17': '티모',
  '412': '쓰레쉬',
  '18': '트리스타나',
  '48': '트런들',
  '23': '트린다미어',
  '4': '트위스티드 페이트',
  '29': '트위치',
  '77': '우디르',
  '6': '우르곳',
  '110': '바루스',
  '67': '베인',
  '45': '베이가',
  '161': '벨코즈',
  '254': '바이',
  '112': '빅토르',
  '8': '블라디미르',
  '106': '볼리베어',
  '19': '워윅',
  '498': '자야',
  '101': '제라스',
  '5': '신짜오',
  '157': '야스오',
  '83': '요릭',
  '350': '유미',
  '154': '자크',
  '238': '제드',
  '115': '직스',
  '26': '질리언',
  '142': '조이',
  '143': '자이라',
};
