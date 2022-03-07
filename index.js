module.exports = {
    isInitCap: sentence => /^[A-Z]/.test(sentence) && !/\s+[^A-Z]/g.test(sentence),
    initCap: sentence => sentence.replace(/\b\w/g,(match=>match.toUpperCase())),
    trimSpace: sentence => sentence.replace(/\s+([?,.]|\s)\s*/gm, char => `${char.trim()} `).trim()
};
