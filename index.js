module.exports = {
    isInitcap: function(sentence) {
        return /^[A-Z]/.test(sentence) && !/\s+[^A-Z]/g.test(sentence);
    }
};