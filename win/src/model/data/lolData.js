module.exports.getBattleScore = (rank, rankScore) => {
  const rankArr = rank.split(' ');
  let battleScore = 0;
  const iRankScore = rankScore * 3;
  if (rankArr[0] === 'IRON') battleScore += 0;
  else if (rankArr[0] === 'BRONZE') battleScore += 100;
  else if (rankArr[0] === 'SILVER') battleScore += 200;
  else if (rankArr[0] === 'GOLD') battleScore += 400;
  else if (rankArr[0] === 'PLATINUM') battleScore += 600;
  else if (rankArr[0] === 'DIAMOND') {
    battleScore += 900;
    if (rankArr[1] === 'IV') battleScore += 83;
    else if (rankArr[1] === 'III') battleScore += 188;
    else if (rankArr[1] === 'II') battleScore += 311;
    else if (rankArr[1] === 'I') battleScore += 550;
    return battleScore;
  } else if (rankArr[0] === 'MATSER') {
    battleScore += 2000;
    battleScore += iRankScore;
    return battleScore;
  } else if (rankArr[0] === 'GRANDMASTER') {
    battleScore += 3000;
    battleScore += iRankScore;
    return battleScore;
  } else if (rankArr[0] === 'CHALLENGER') {
    battleScore = 5000 + iRankScore;
    return battleScore;
  }

  if (rankArr[1] === 'IV') battleScore += 10;
  else if (rankArr[1] === 'III') battleScore += 20;
  else if (rankArr[1] === 'II') battleScore += 30;
  else if (rankArr[1] === 'I') battleScore += 40;
  return battleScore;
};

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
  return object;
};

module.exports.champions = {
  '266': 'Aatrox',
  '103': 'Ahri',
  '84': 'Akali',
  '12': 'Alistar',
  '32': 'Amumu',
  '34': 'Anivia',
  '1': 'Annie',
  '523': 'Aphelios',
  '22': 'Ashe',
  '136': 'AurelionSol',
  '268': 'Azir',
  '432': 'Bard',
  '53': 'Blitzcrank',
  '63': 'Brand',
  '201': 'Braum',
  '51': 'Caitlyn',
  '164': 'Camille',
  '69': 'Cassiopeia',
  '31': 'Chogath',
  '42': 'Corki',
  '122': 'Darius',
  '131': 'Diana',
  '119': 'Draven',
  '36': 'DrMundo',
  '245': 'Ekko',
  '60': 'Elise',
  '28': 'Evelynn',
  '81': 'Ezreal',
  '9': 'Fiddlesticks',
  '114': 'Fiora',
  '105': 'Fizz',
  '3': 'Galio',
  '41': 'Gangplank',
  '86': 'Garen',
  '150': 'Gnar',
  '79': 'Gragas',
  '104': 'Graves',
  '120': 'Hecarim',
  '74': 'Heimerdinger',
  '420': 'Illaoi',
  '39': 'Irelia',
  '427': 'Ivern',
  '40': 'Janna',
  '59': 'JarvanIV',
  '24': 'Jax',
  '126': 'Jayce',
  '202': 'Jhin',
  '222': 'Jinx',
  '145': 'Kaisa',
  '429': 'Kalista',
  '43': 'Karma',
  '30': 'Karthus',
  '38': 'Kassadin',
  '55': 'Katarina',
  '10': 'Kayle',
  '141': 'Kayn',
  '85': 'Kennen',
  '121': 'Khazix',
  '203': 'Kindred',
  '240': 'Kled',
  '96': 'KogMaw',
  '7': 'Leblanc',
  '64': 'LeeSin',
  '89': 'Leona',
  '127': 'Lissandra',
  '236': 'Lucian',
  '117': 'Lulu',
  '99': 'Lux',
  '54': 'Malphite',
  '90': 'Malzahar',
  '57': 'Maokai',
  '11': 'MasterYi',
  '21': 'MissFortune',
  '62': 'MonkeyKing',
  '82': 'Mordekaiser',
  '25': 'Morgana',
  '267': 'Nami',
  '75': 'Nasus',
  '111': 'Nautilus',
  '518': 'Neeko',
  '76': 'Nidalee',
  '56': 'Nocturne',
  '20': 'Nunu',
  '2': 'Olaf',
  '61': 'Orianna',
  '516': 'Ornn',
  '80': 'Pantheon',
  '78': 'Poppy',
  '555': 'Pyke',
  '246': 'Qiyana',
  '133': 'Quinn',
  '497': 'Rakan',
  '33': 'Rammus',
  '421': 'RekSai',
  '58': 'Renekton',
  '107': 'Rengar',
  '92': 'Riven',
  '68': 'Rumble',
  '13': 'Ryze',
  '113': 'Sejuani',
  '235': 'Senna',
  '875': 'Sett',
  '35': 'Shaco',
  '98': 'Shen',
  '102': 'Shyvana',
  '27': 'Singed',
  '14': 'Sion',
  '15': 'Sivir',
  '72': 'Skarner',
  '37': 'Sona',
  '16': 'Soraka',
  '50': 'Swain',
  '517': 'Sylas',
  '134': 'Syndra',
  '223': 'TahmKench',
  '163': 'Taliyah',
  '91': 'Talon',
  '44': 'Taric',
  '17': 'Teemo',
  '412': 'Thresh',
  '18': 'Tristana',
  '48': 'Trundle',
  '23': 'Tryndamere',
  '4': 'TwistedFate',
  '29': 'Twitch',
  '77': 'Udyr',
  '6': 'Urgot',
  '110': 'Varus',
  '67': 'Vayne',
  '45': 'Veigar',
  '161': 'Velkoz',
  '254': 'Vi',
  '112': 'Viktor',
  '8': 'Vladimir',
  '106': 'Volibear',
  '19': 'Warwick',
  '498': 'Xayah',
  '101': 'Xerath',
  '5': 'XinZhao',
  '157': 'Yasuo',
  '83': 'Yorick',
  '350': 'Yuumi',
  '154': 'Zac',
  '238': 'Zed',
  '115': 'Ziggs',
  '26': 'Zilean',
  '142': 'Zoe',
  '143': 'Zyra',
};
