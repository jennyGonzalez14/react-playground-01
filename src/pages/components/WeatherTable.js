import { useEffect } from "react"
import BLStore from "../../common/BLStore";

import { observer } from "mobx-react";

export const WeatherTable = observer(() => {
useEffect (() => {
    BLStore.loadWeatherForecast();
}, []);

})