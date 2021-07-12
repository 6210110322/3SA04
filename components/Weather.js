import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForcastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return(
        <ImageBackground source={require('../bg.jpg')}style={styles.backdrops}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrops: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})