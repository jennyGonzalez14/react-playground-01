import {
    getWeatherForecast 
} from "./DataRequester";


class MyBLStore {
   
 async loadWeatherForecast(){
    let res = await getWeatherForecast();

    console.log("Our result:", res);
 }   


}

const BLStore = new MyBLStore();
export default BLStore;