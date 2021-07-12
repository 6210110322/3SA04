import React, { useState } from 'react';
import { Text } from 'react-native';
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForcastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return(
        <Forecast {...forecastInfo} />
    )
}