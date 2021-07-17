import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, Image } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Weather({ weatherData, fetchWeatherData }){
    const { weather,
            name,
            main: { temp, temp_min, temp_max, pressure, humidity }
        } = weatherData;
    const [{ main, description, icon }] = weather;

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../bg.jpg')} style={styles.background}>
                <View>
                    <SearchBar fetchWeatherData={fetchWeatherData}/>
                </View>

                <View style={styles.weatherbox}>
                    <View style={styles.weatherview}>
                        <Image source={{uri:"http://openweathermap.org/img/wn/"+icon+"@2x.png"}} style={styles.weatherimage} />
                        <View>
                            <Text style={styles.temptext}>{temp} °C</Text>
                            <Text style={styles.weathertext}>{main}</Text>
                            <Text style={styles.citytext}>{name}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infobox}>
                    <View style={styles.infoview}>
                        <Text style={styles.desctext}>It's {description}.</Text>
                        <Text style={styles.othertext}>• Max: {temp_max} °C</Text>
                        <Text style={styles.othertext}>• Min: {temp_min} °C</Text>
                        <Text style={styles.othertext}>• Humidity: {humidity} %</Text>
                        <Text style={styles.othertext}>• Pressure: {pressure} hPA</Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
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
    weatherbox:{
        height: "30%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        marginTop: "5%"
    },
    weatherview:{
        height: "80%",
        width: "90%",
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        alignItems: "center",
        flexDirection: 'row'
    },
    weatherimage:{
        height: "80%",
        width: "50%"
    },
    temptext:{
        fontSize: 30,
        marginLeft: "5%"
    },
    weathertext:{
        fontSize: 20,
        marginLeft: "5%"
    },
    citytext:{
        fontSize: 12,
        marginLeft: "5%",
        marginTop: "10%"
    },
    infobox:{
        height: "35%",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "4%"
    },
    infoview:{
        height: "80%",
        width: "90%",
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: 15
    },
    desctext:{
        fontSize: 20,
        marginLeft: "8%",
        marginTop: "5%"
    },
    othertext:{
        fontSize: 15,
        marginLeft: "12%",
        marginTop: "3%"
    },
  });