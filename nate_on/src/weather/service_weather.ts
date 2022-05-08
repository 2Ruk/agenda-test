import {Weather} from "./config_weather";
import axios from "axios";


export class Service_weather{

  async getTodayWeather(): Promise<string>{
    await this.getWeatherData();


    return 'a'
  }


  async getWeatherData(){
    const url = Weather.getTodayUrl();
    const {data} = await axios.get(url);
    const items = data.response.body.items.item
    for(let i=4; i<=10; i++){
      const filterItem = items.filter(v => v.category ==='POP' && v.fcstDate===`2022050${i}` )

      for(let item of filterItem){
        const day = item.fcstDate
        const time = item.fcstTime
        const value = item.fcstValue
        console.log({day,time,value})
      }

    }

  }
  todayRainInfo(data){

  }
}