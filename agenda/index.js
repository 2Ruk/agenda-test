const axios = require('axios')
const qs =  require('qs')
const url = ''

class nateWebHook {
  constructor() {
  }
  async sendMenu(){
    const content = 'test'
    await axios({
      url: url,
      method: 'POST',
      data: qs.stringify({
        content
      })
    })
  }
}

(async () => {
  const nw = new nateWebHook()
  await nw.sendMenu()
})


// nateWebHook(.sendMenu()
