import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard():JSX.Element {
  return (
      <SafeAreaView>
          <Text style={styles.headingtext}>FlatCard</Text>
          <ScrollView showsHorizontalScrollIndicator={ false} horizontal={ true} style={styles.container}>
              <View style={[styles.card,styles.cardsElevated]}>
                  <Text>Tap</Text>
              </View>
              <View style={[styles.card,styles.cardsElevated]}>
                  <Text>Tap</Text>
              </View>
              <View style={[styles.card,styles.cardsElevated]}>
                  <Text>Tap</Text>
              </View>
              <View style={[styles.card,styles.cardsElevated]}>
                  <Text>Tap</Text>
              </View>
              <View style={[styles.card,styles.cardsElevated]}>
                  <Text>Tap</Text>
              </View>
              <View style={[styles.card,styles.cardsElevated]}>
                  <Text>Tap</Text>
              </View>
              <View style={[styles.card,styles.cardsElevated]}>
                  <Text>Tap</Text>
              </View>
          </ScrollView>
    </SafeAreaView>
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
        padding: 20,
        
        
    },
    card: {
        flex:1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin:8,
    },
    cardsElevated: {
        backgroundColor:'#ff9a2f'
    }
})