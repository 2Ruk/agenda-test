const Agenda = require("agenda");
const moment = require("moment");
const mongoConnectionString = "mongodb://127.0.0.1/agenda";
const agenda = new Agenda({ db: { address: mongoConnectionString } });


(async function () {
    await agenda.start();
    await agenda.every("3 seconds", "3seconds test");
    await agenda.every("5 seconds", "5seconds test");
})();

agenda.define("3seconds test", async (job) => {
    console.log('3초 '+new moment().format('yyyy-mm-dd-ss'))
});

agenda.define("5seconds test", async (job) => {
    console.log('5초 '+new moment().format('yyyy-mm-ddd-ss'))
});
