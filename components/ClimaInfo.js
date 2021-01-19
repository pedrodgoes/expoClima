import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors} from '../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors

export default function ClimaInfo({currentClima}) {

    const {
        main: {temp},
        weather: [details],
        name
        } = currentClima

        const {icon, main, description} = details
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
   
        return (
        <View style={styles.climaInfo}>
            <Text style={styles.textSecundario}>{name}</Text>
            <Image style={styles.climaIcon} source={{uri: iconUrl}}/>
            <Text style={styles.textPrimario}>{temp} ºC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    climaInfo: {
        alignItems: 'center',
        borderColor: '#fff'
    },
    climaDescricao:{
        textTransform: 'uppercase'
    },
    climaIcon:{
        width: 120,
        height: 120
    },
    textPrimario:{
        fontSize: 50,
        color: '#fff'
    },
    textSecundario:{
        fontSize: 40,
        color: '#fff'
    },
})
