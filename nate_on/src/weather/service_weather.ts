import {Weather} from "./config_weather";
import axios from "axios";
import * as dayjs from "dayjs";
import {IWeatherMessage} from "../common/interface/weather";


export class Service_weather{

  async getTodayWeather(): Promise<void>{
    await this.getWeatherData()
  }


  async getWeatherData():Promise<void>{
    const url = Weather.getTodayUrl();
    const {data} = await axios.get(url);
    const items = data.response.body.items.item
    const todayString = dayjs(new Date()).format('YYYYMMDD')
    const filterItem = items.filter(v => v.category ==='POP' && v.fcstDate===`${todayString}` )
    const messageInfo: IWeatherMessage = {
      today: todayString,
      am:{
        text: '출근시간',
        idx: 0,
        value: [],
      },
      pm:{
        text: '퇴근시간',
        idx: 0,
        value: [],
      }
    }
    for(let item of filterItem){
      const time = Number(item.fcstTime)/100
      const value = Number(item.fcstValue);
      const joinWorkTime = 7<time && time < 10
      const leaveWorkTime = 17<time && time < 20

      if(joinWorkTime){
        // 출근시간
        messageInfo.am.idx++;
        messageInfo.am.value.push(value);
      }else if(leaveWorkTime){
        // 퇴근시간
        messageInfo.pm.idx++;
        messageInfo.pm.value.push(value);
      }
    }

    const todayIsRain = (messageInfo.pm.value.length ||  messageInfo.pm.value.length) ? '비가 온다는 소식!!':'비 확률이 없다는 소식!!';
    const sampleMessage = `
      ${todayIsRain} 
      ${messageInfo.today}날씨 정보 \n
      ${messageInfo.am.text} 
      ( •̀ ω •́ )✧
       08시-09시 ▶ ${messageInfo.am.value[0]} % 확률
       09시-10시 ▶ ${messageInfo.am.value[1]} % 확률
      ${messageInfo.pm.text} 
      ヾ(≧▽≦*)o
       18시-19시 ▶ ${messageInfo.pm.value[0]} % 확률
       19시-20시 ▶ ${messageInfo.pm.value[1]} % 확률
    `
    console.log(sampleMessage)
  }


}

