import { View, Text,SafeAreaView, ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCard />
        <Text style={styles.headingtext}>Trending Places</Text>
        <FancyCards/>
        <FancyCards/>
        <FancyCards/>
        <FancyCards/>
        <FancyCards />
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal:8
},
})