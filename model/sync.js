const db = require('./index');
const relate = require('./relation')

const sync = async () => {
    await relate();
    await db.sync({alter:true});
    console.log("Sync done");
}

sync();