import {Agenda} from "agenda";
import con from "./config/config.js";
import {NateOn} from "./service/nate_on.js";
const mongoConnectionString = "mongodb://127.0.0.1/agenda";
const agenda = new Agenda({ db: { address: mongoConnectionString } });


(async function () {
    await agenda.start();
    await agenda.every("5 seconds", con.lunchMenu);
})();

agenda.define(con.lunchMenu, async (job) => {
    const nate = new NateOn();
    await nate.sendMenu('Menu')
});
