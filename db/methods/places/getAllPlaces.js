const db = require('../../index.js')

const returnArray = o => {
    return Object.keys(o).map(k => o[k])
}

module.exports = () => returnArray(db['places'])
