module.exports.getBattleScore = (rank, rankScore) => {
  const rankArr = rank.split(' ');
  let battleScore = 0;
  const iRankScore = rankScore * 3;
  if(rankArr[0] === 'IRON') battleScore += 0;
  else if(rankArr[0] === 'BRONZE') battleScore += 100;
  else if(rankArr[0] === 'SILVER') battleScore += 200;
  else if(rankArr[0] === 'GOLD') battleScore += 400;
  else if(rankArr[0] === 'PLATINUM') battleScore += 600;
  else if(rankArr[0] === 'DIAMOND') {
    battleScore += 900;
    if(rankArr[1] === "IV") battleScore += 83;
    else if(rankArr[1] === "III") battleScore += 188;
    else if(rankArr[1] === "II") battleScore += 311;
    else if(rankArr[1] === "I") battleScore += 550;
    return battleScore;
  }
  else if(rankArr[0] === 'MATSER') {
    battleScore += 2000;
    battleScore += iRankScore;
    return battleScore;
  }
  else if(rankArr[0] === 'GRANDMASTER') {
    battleScore += 3000;
    battleScore += iRankScore;
    return battleScore;
  }
  else if(rankArr[0] === 'CHALLENGER') {
    battleScore = 5000 + iRankScore;
    return battleScore;
  }
  
  if(rankArr[1] === "IV") battleScore += 10;
  else if(rankArr[1] === "III") battleScore += 20;
  else if(rankArr[1] === "II") battleScore += 30;
  else if(rankArr[1] === "I") battleScore += 40;
  return battleScore;
}

module.exports.getQueue = (queue) => {
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

module.exports.setEtc = async (object) => {
  const etc = [];
  if (
    object.recentMatch === 'UNRANK' &&
    object.recentLane === 'UNRANK' &&
    object.recentChampion === 'UNRANK' &&
    object.recentWinLose === '' &&
    object.rankTier === 'UNRANK' &&
    object.win === 0 &&
    object.lose === 0
  ) {
    etc.push('ghost');
  } else if (object.rankTier === 'UNRANK') {
    etc.push('unrank');
  }

  if (object.rankTier.includes('IRON') || object.rankTier.includes('BRONZE')) {
    etc.push('simhae');
  } else if (
    object.rankTier.includes('SILVER') ||
    object.rankTier.includes('GOLD')
  ) {
    etc.push('silverGold');
  } else if (object.rankTier.includes('PLATINUM')) {
    etc.push('platinum');
  } else if (object.rankTier.includes('DIAMOND')) {
    etc.push('diamond');
  } else if (
    object.rankTier.includes('MATSER') &&
    !object.rankTier.includes('GRANDMASTER')
  ) {
    etc.push('master');
  } else if (object.rankTier.includes('GRANDMASTER')) {
    etc.push('grandMaster');
  } else if (object.rankTier.includes('CHALLENGER')) {
    etc.push('challenger');
  }

  if (object.recentLane === 'MID') {
    etc.push('mid');
  } else if (object.recentLane === 'TOP') {
    etc.push('top');
  } else if (object.recentLane === 'BOT') {
    etc.push('ad');
  } else if (object.recentLane === 'SUPPORT') {
    etc.push('sup');
  } else if (object.recentLane === 'JUNGLE') {
    etc.push('jungle');
  }

  if (object.recentWinLose === 'WWWWW') {
    etc.push('5WinningStreak');
  } else if (object.recentWinLose.substring(0, 4) === 'WWWW') {
    etc.push('4WinningStreak');
  } else if (object.recentWinLose.substring(0, 3) === 'WWW') {
    etc.push('3WinningStreak');
  }

  if (object.level > 29 && object.level < 50) {
    etc.push('levelFifty');
  } else if (object.level >= 50 && object.level < 150) {
    etc.push('levelOnehundred');
  } else if (object.level >= 150 && object.level < 250) {
    etc.push('levelOnehundredFifty');
  } else if (object.level >= 250 && object.level < 300) {
    etc.push('levelTwohundredFifty');
  } else if (object.level >= 300 && object.level < 500) {
    etc.push('levelThreehundred');
  } else if (object.level >= 500 && object.level < 1000) {
    etc.push('levelFivehundred');
  } else if (object.level >= 1000 && object.level < 5000) {
    etc.push('levelOneK');
  }

  if (object.recentMatch === '솔랭') {
    etc.push('soloRank');
  } else if (object.recentMatch === '일겜') {
    etc.push('defalut');
  } else if (object.recentMatch === '자랭') {
    etc.push('freeRank');
  } else if (object.recentMatch === '칼바람') {
    etc.push('swordWind');
  } else if (object.recentMatch !== 'UNRANK' && object.recentMatch) {
    etc.push('freeRank');
  }

  object.etc = etc;
  console.log(etc);
  return object;
};

module.exports.champions = {
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