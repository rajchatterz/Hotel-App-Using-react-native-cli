import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View style={{padding:10}}>
          <Text style={styles.headingText}>Blog Card</Text>
          <View style={{padding:10,borderColor:'black',borderWidth:0.3,borderRadius:10}}>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingtext}>What's New in Javascript</Text>
                </View>
            </View>
            <Image
            source={{uri:'https://images.pexels.com/photos/4327576/pexels-photo-4327576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}}
            style={{ height:200}}
            />
            <Text>This is me hotesh here back to another video</Text>
            <TouchableOpacity onPress={()=>openWebsite('https://reactnative.dev/docs/network')}>
                <Text>Read More</Text>
            
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default ActionCard
const styles = StyleSheet.create({
    headingText: {
        
    },
    card: {
        
    },
    elevatedCard: {},
    headingContainer: {},
    headingtext:{}
})