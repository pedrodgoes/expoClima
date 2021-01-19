import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../utils/index'
import {FontAwesome5, MaterialCOmmunityIcons, Entypo, Feather} from '@expo/vector-icons'

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors 

export default function ClimaDetails({currentClima, unitsSystem}) {

    const {
        main: {humidity, feels_like, temp_max},
        wind: {speed},
    } = currentClima

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} km/h` : `${Math.round(speed)} m/s`

    return (
        <View style={styles.climaDetails}>
            <View style={styles.climaDetailsRow} >
                <FontAwesome5 name='temperature-low' size={30} color="white"/>
            <View style={styles.texto} > 
                <Text>Sensação</Text>
                 <Text>Térmica</Text>
                <Text>{feels_like}°C</Text>                
            </View>
            
            </View>

            <View style={styles.climaDetailsRow} >
                <Entypo name='drop' size={30} color="white"/>
            <View style={styles.texto} > 
                <Text>Umidade</Text>
                <Text>do ar</Text>
                <Text>{humidity}%</Text>                
            </View>
            </View>

            <View style={styles.climaDetailsRow} >
                <Feather name='wind' size={30} color="white"/>
            <View style={styles.texto} > 
                <Text>Velocidade</Text>
                <Text>do vento</Text>
                <Text>{windSpeed}</Text>                
            </View>
            </View>

            <View style={styles.climaDetailsRow} >
                <Feather name='sun' size={30} color="white"/>
            <View style={styles.texto} > 
                <Text>Máxima</Text>
                <Text>de hoje</Text>
                <Text>{temp_max}°C</Text>                
            </View>
            </View>
  
        </View>
    )
}

const styles = StyleSheet.create({
    climaDetails: {
        borderWidth: 1,
        borderRadius: 3,
        color: 'white',
        flexDirection: 'column',
        height: '60%',
        width: '70%',
        paddingLeft: '3%',
        marginLeft: '12%',
        justifyContent: 'center',
        alignItems: 'baseline',
        borderWidth: 0
    },
    climaDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '15%',
        marginTop: '5%',
    },
    texto:{
        fontSize: 14,
        color: 'white',
        paddingLeft: 0,
        marginLeft: 0,
        
    }
})
