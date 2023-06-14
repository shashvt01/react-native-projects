import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View >
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card,styles.headingText, styles.cardElevated]} >
      <Image style = {styles.cardImage}
        source = {{
            uri :'data:image/jpeg;base64,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'
        }}
      />
      <View style = {styles.cardBody}>
        <Text style ={styles.cardTitle}>Name</Text>
        <Text style ={styles.cardLabel} >city</Text>
        <Text style ={styles.cardDescription} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laboriosam deleniti, tempore ullam reprehenderit illo iste quam aperiam perferendis, rem, veritatis suscipit sapiente perspiciatis! Fugiat esse asperiores totam explicabo rerum.</Text>
        <Text style ={styles.cardFooter} >Footer</Text>
      </View>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal:8,

    },
    card:{
        width:360,
        height:360,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:20
        // alignContent:'center'
        // margin:'auto'
    },
    cardElevated:{
        backgroundColor:"#FFFFFF",
        elavation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        width:360,
        marginLeft:-8,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4

    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:4
    },
    cardDescription:{
        color:'#000000',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1

    },
    cardFooter:{
        color:'#000000'
    },

    

})