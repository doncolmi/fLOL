const searchSchema = require('../model/schema/searchSchema');

module.exports.getTodayFirstUser = async () => {
  try {
    const today = new Date();
    const todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    const todayFirstUser = await searchSchema.findOne({ date: todayString });
    if (!todayFirstUser) {
      console.log('아직 등록된 유저 없음');
      return {
        ogName: '오늘 검색 된 유저가 없습니다.',
        level: '지금 검색하시면 ',
        rankTier: ' 등록됩니다.',
      };
    }
    return todayFirstUser;
  } catch (e) {
    console.log(e);
    return {
      ogName: '오늘 검색 된 유저가 없습니다.',
      level: '지금 검색하시면 ',
      rankTier: ' 등록됩니다.',
    };
  }
};

module.exports.isTodayFirstUser = async (today) => {
  const todayFirstUser = await searchSchema.count({ date: today });
  return todayFirstUser > 0;
};

module.exports.saveTodayFirstUser = async (data) => {
  try {
    console.log(data);
    const item = {
      ogName: data.ogName,
      level: data.level,
      rankTier: data.rankTier,
      recentChampion: data.recentChampion,
      date: data.date,
    };
    const todayFirstUser = new searchSchema(item);
    await todayFirstUser.save();
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
