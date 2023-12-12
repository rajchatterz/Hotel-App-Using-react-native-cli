import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
          <Text style={styles.headingtext}>Trending Places</Text>
          <View style={[styles.card,styles.cardElevated]}>
              <Image
                  source={{uri:'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg'} }
                  style={styles.cardImage}
              />
              <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>Taj Mahal</Text>
                  <Text style={styles.cardLabel}>Agra</Text>
                  <Text style={styles.Description}>Taj Mahal is the best architect in the ancient history</Text>
                  <Text style={styles.cardFooter}>12 min away</Text>
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
    card: {
        padding: 10,
        marginHorizontal: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor:'black'
        
    },
    cardElevated: {
        // borderColor: '#fffff',
        // color:'#fffff'
    },
    cardImage: {
        height: 200,
        width: 350,
        borderRadius: 10,
    },
    cardBody: {
        
    },
    cardTitle: {
        marginTop: 4,
        fontSize: 18,
        fontWeight:'900'
    },
    cardLabel: {
        marginVertical:5
    },
    Description: {},
    cardFooter: {
        marginTop:20
    }
})