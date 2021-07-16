import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import WeatherScreen from './screen/WeatherScreen';

export default function App() {
  return (
    <View>
      <WeatherScreen />
      <StatusBar style="auto" />
    </View>
  );
}