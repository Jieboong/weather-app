import React from "react";
import {View, Text, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions={
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#304352","#d7d2cc"],
        title:"Little Cloudy",
        subtitle:"Don't be cloudy yourself!",
    },
    ThunderStorm : {
        iconName: "weather-lightning",
        gradient: ["#141E30","#243B55"],
        title:"Thunder",
        subtitle: "just Don't Go OUTSIDE!!!"
    },
    Drizzle : {
        iconName: "weather-rainy",
        gradient: ["#525252","#3d72b4"],
        title: "Drizzling outside",
        subtitle: "rain in very little drops"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#185a9d","#43cea2"],
        title: "Raining",
        subtitle: "Don't forget you umbrella"
    } ,
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#2980B9","#6DD5FA","#FFFFFF"],
        title: "Snowing",
        subtitle: "Watch your step!"
    },
    Clear : {
        iconName: "weather-sunny",
        gradient: ["#f8b500","#fceabb"],
        title: "Clear",
        subtitle: "Good weather to be outside"
    },
    Haze : {
        iconName: "weather-hazy",
        gradient: ["#616161","#9bc5c3"],
        title:"Haze",
        subtitle: "Watchout when you're driving"
    },
    Mist : {
        iconName: "weather-fog",
        gradient: ["#757F9A","#D7DDE8"],
        title:"Mist",
        subtitle:"a little foggy"
    },
    Dust : {
        iconName: "weather-windy-variant",
        gradient: ["#3E5151","#DECBA4"],
        title : "Dusty",
        subtitle : "Don't forget to wear your mask"
    }
}

export default function Weather( {temp,condition} ){
    
    return <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
        <View style={styles.halfContainer}> 
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white"/>
        <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{...styles.halfContainer,...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "ThunderStorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems : 'center'
    },
    temp: {
        fontSize : 42,
        color:"white"
    },  
    halfContainer : {
        flex:1,
        justifyContent: 'center',
        alignItems : "center"
    },
    title: {
        color: "white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle: {
        fontWeight:"600",
        color : "white",
        fontSize:24

    },
    textContainer : {
        alignItems:"flex-start"
    }
})
