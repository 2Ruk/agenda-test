const axios = require('axios')
const qs =  require('qs')
const url = 'https://teamroom.nate.com/api/webhook/66cf5cda/A8IsUY4kqkeM83wPiCppaC9u'

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
