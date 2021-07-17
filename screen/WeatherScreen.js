import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import Weather from '../components/Weather';
import SearchBar from '../components/SearchBar';

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
            <View style={styles.load}>
                <ActivityIndicator color='gray' size={36} />
            </View>
        )
    }else if(weatherData === null){
        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../bg.jpg')} style={styles.background}>
                    <View>
                        <SearchBar fetchWeatherData={fetchWeatherData}/>
                    </View>
                    <View>
                        <Text>City not found! Please try again.</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
    
    return (
    <View>
        <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    background:{
        height: "100%",
        width: "100%"
    },
    load: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "80%"
    },
});