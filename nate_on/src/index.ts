import {Controller_weather} from "./weather/controller_weather";
import express, { Request, Response, NextFunction } from 'express';
const app = express();
const port = process.env.PORT || 3011;

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const message = await new Controller_weather().getTodayWeather();
  res.json({message});
});

app.listen(port, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: ${port}🛡️
  ################################################
`);
});
