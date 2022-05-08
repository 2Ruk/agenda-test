import {Controller_weather} from "./weather/controller_weather";
import axios from "axios";
import * as qs from "qs";

(async function() {

  try{
    const todayWeather = new Controller_weather().getTodayWeather();
    // const url = 'https://teamroom.nate.com/api/webhook/66cf5cda/A8IsUY4kqkeM83wPiCppaC9u';
    //
    // await axios({
    //   url: url,
    //   method: 'POST',
    //   data: qs.stringify({
    //     content:todayWeather
    //   })
    // })

  }catch (e) {

  }

})()