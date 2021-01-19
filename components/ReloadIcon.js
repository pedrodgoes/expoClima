import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function ReloadIcon ({load}) {

        return (
            <View style={styles.reloadIcon}>
                <Ionicons onPress={load} 
                name="reload" size={24}
                color="white" />
            </View>
        )
    }

    const styles = StyleSheet.create ({
        reloadIcon:{
            position: 'absolute',
            top: '7%',
            right:'4%',
        }
    })
