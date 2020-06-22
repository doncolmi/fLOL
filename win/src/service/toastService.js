const toastSchema = require('../model/schema/toastSchema');

module.exports.getToastList = async (name) => {
    const toast = await toastSchema.findOne({ name : name });
    return toast;
}