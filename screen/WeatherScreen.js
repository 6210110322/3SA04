import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function WeatherScreen(){
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName){
        setLoaded(false);
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=31464faa5dc561c0fe0777b7d68a5230`

        try{
            const response = await fetch(API);
            if(response.status == 200){
                const data = await response.json();
                setWeatherData(data);
            }else{
                setWeatherData(null);
            }
            setLoaded(true);

        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('Songkhla');
        console.log(weatherData);
    }, [])

    if(!loaded){
        return(
            <View style={styles.container}>
                <ActivityIndicator color='gray' size={36} />
            </View>
        )
    }
    
    return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});