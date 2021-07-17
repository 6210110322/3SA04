import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, Image } from 'react-native';
import SearchBar from '../components/SearchBar';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default function Weather ({ weatherData }){
    const { weather } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        console.log(main);
    }, [weatherData])

    return(
        <SafeAreaView>
            <ImageBackground source={require('../bg.jpg')} style={styles.background}>
                <View>
                    <SearchBar />
                </View>

                <View style={styles.weatherbox}>
                    <View style={styles.weatherview}>
                        <Image source={{}} style={styles.weatherimage} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Height,
        width: Width
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
        flexDirection: 'row'
    },
    weatherview:{
        height: "80%",
        width: "90%",
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 15,
        alignItems: "center",
        flexDirection: 'row'
    }
  });