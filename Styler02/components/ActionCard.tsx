import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21
            </Text>
        </View>
        <Image source = {{
            uri:'https://cdn.hashnode.com/res/hashnode/image/upload/v1683052471872/a492b907-dbb4-414f-8173-729d995cdc13.png?w=800&h=420&fit=crop&crop=entropy&auto=compress,format&format=webp'
        }}
        style = {styles.cardImage}
        />
        <View style = {styles.bodyContainer} >
            <Text numberOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolor excepturi ea natus ipsam itaque unde harum cum suscipit culpa amet est quam dicta earum repellat explicabo, a quo cumque.
            </Text>
        </View>
        <View style = {styles.footerContainer} >
                <TouchableOpacity 
                // onPress={() => openWebsite('https://blog.aiherrera.com/the-perfect-starter-template-for-react-native-expo-tailwindsnativewind-react-native-paper-ui-and-prettier')}
                >
                    <Text style = {styles.socialLinks}>Read More</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => openWebsite('https://blog.aiherrera.com/the-perfect-starter-template-for-react-native-expo-tailwindsnativewind-react-native-paper-ui-and-prettier')}
                >
                    <Text style = {styles.socialLinks}>Follow Me</Text>
                </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        widht:350,
        height:300,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor:'#6A1B4D',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
          },
          shadowColor:'#333',
          shadowOpacity:0.4,
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'#FFF',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:100,
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLinks :{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    },


})