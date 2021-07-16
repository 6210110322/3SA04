import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView } from 'react-native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

export default class Weather extends React.Component{
    render(){
        return(
            <SafeAreaView>
                <ImageBackground source={require('../bg.jpg')}style={styles.background}></ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: Height,
        width: Width
    },
    background:{
        height: "100%",
        width: "100%"
    }
  });