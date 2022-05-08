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
        text: '오전',
        idx: 0,
        value: 0,
      },
      pm:{
        text: '오후',
        idx: 0,
        value: 0,
      }
    }
    for(let item of filterItem){
      const time = Number(item.fcstTime)/100
      const value = Number(item.fcstValue)
      if(time < 12){
        // 오전
        messageInfo.am.idx++;
        messageInfo.am.value += value;

      }else{
        // 오후
        messageInfo.pm.idx++;
        messageInfo.pm.value += value;
      }
    }
    messageInfo.am.value =  messageInfo.am.value /  messageInfo.am.idx
    messageInfo.pm.value =  messageInfo.pm.value /  messageInfo.pm.idx
    const sampleMessage = `
      오늘 ( ${messageInfo.today} ) 비가 오나요? ^_^\n
      ${messageInfo.am.text} : ${messageInfo.am.value} % 확률
      ${messageInfo.pm.text} : ${messageInfo.pm.value} % 확률
    `
    console.log(sampleMessage)
  }
}