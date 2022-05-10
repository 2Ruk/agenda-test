import * as dotenv from 'dotenv';

dotenv.config();
export const serviceKey = process.env.serviceKey || ''
export const weatherApi = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'
export const nx = '60'
export const ny = '126'
