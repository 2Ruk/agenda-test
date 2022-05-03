import axios from "axios";
import qs from "qs";
import con from "../config/config.js";

export class NateOn {
    constructor() {
    }
    async sendMenu(menu){
        try{
            const result = await axios({
                url: con.url,
                method: 'POST',
                data: qs.stringify({
                    content: menu
                })
            })
            console.log(result)
        }catch (e) {
            console.log(e)
        }

    }


}