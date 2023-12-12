import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard():JSX.Element {
  return (
    <View>
          <Text style={styles.headingtext}>FlatCard</Text>
          <View style={styles.container}>
              <View style={[styles.card,styles.cardOne]}>
                  <Text>Red</Text>
              </View>
              <View style={[styles.card,styles.cardTwo]}>
                  <Text>Blue</Text>
              </View>
              <View style={[styles.card,styles.cradThree]}>
                  <Text>Green</Text>
              </View>
              
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding:20
    },
    card: {
        flex:1,
        height: 100,
        justifyContent: 'center',
        alignItems:'center',
        width: 100,
        borderRadius: 8,
        margin:8
    },
    cardOne: {
        backgroundColor:'#f86060'
    },
    cardTwo: {
        backgroundColor:'#ffc56f'
    },
    cradThree: {
        backgroundColor:'#98ff61'
    }
})