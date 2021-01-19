import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import ClimaInfo from './components/ClimaInfo'
import {colors} from './utils/index'
import ReloadIcon from './components/ReloadIcon'
import ClimaDetails from './components/ClimaDetails'

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

const CLIMA_API_KEY = 'bc64287edf40521e4a46033cd5175c66'
const BASE_CLIMA_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentClima, setCurrentClima] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')

  useEffect(()=> {
    load()
  }, [unitsSystem])

  async function load(){
    setCurrentClima(null)
    setErrorMessage(null)
    
    try{
      let{status} = await Location.requestPermissionsAsync()

      if (status !== 'granted'){
        setErrorMessage('O app precisa de acesso ao local para coleta de dados')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords
      const climaUrl = `${BASE_CLIMA_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${CLIMA_API_KEY}`

      const response = await fetch(climaUrl)

      const result = await response.json()

      if (response.ok) {
        setCurrentClima(result)
      } else{
        setErrorMessage(result.message)
      }
    } catch (error){
      setErrorMessage(error.message)
    }
  }

  if(currentClima){
    const { main : {temp},
  } = currentClima

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ReloadIcon load={load}/>
          <View style={styles.main}>
            <ClimaInfo currentClima={currentClima}/>
        </View>
        <View style={styles.details}>
        <ClimaDetails currentClima={currentClima} unitsSystem={unitsSystem}/>
        </View>       
      </View>
      
    );
  } else{
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  main: {
    justifyContent: 'center',
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
    height: '50%',
    width: '60%',
    marginLeft: 5,
    borderWidth: 0
  },
  details:{
    justifyContent: 'center',
    borderColor: 'white',
    borderRadius: 3,
  }
});
