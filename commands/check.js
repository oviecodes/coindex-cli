const KeyManager = require('../lib/keyManager')
const CryptoApi = require('../lib/cryptoApi')


const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager()
            const key = keyManager.getKey()

            const api = new CryptoApi(key)

            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur)

            console.log(priceOutputData)
        } catch (error) {
            console.log(error.message.red)
        }
    }
}

module.exports = check