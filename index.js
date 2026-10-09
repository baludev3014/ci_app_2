const bcrypt = require("bcrypt")

const DATA = "JFJFR"

async function encrypt(){
    const data =  await bcrypt.hash(DATA,10)
    console.log(data)
}

encrypt()