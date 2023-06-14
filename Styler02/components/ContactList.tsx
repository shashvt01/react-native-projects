import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid : 1,
            name:'Shashwat Verma',
            status:'I code, eat, sleep',
            imageUrl:'https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png'
        },
        {
            uid : 2,
            name:'Shashwat Verma',
            status:'I code, eat, sleep',
            imageUrl:'https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png'
        },
        {
            uid : 3,
            name:'Shashwat Verma',
            status:'I code, eat, sleep',
            imageUrl:'https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png'
        }
    ]

  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
        <ScrollView style = {styles.container} scrollEnabled= {false}
        >
            {contacts.map(({uid,name,status,imageUrl}) => (
                <View key={uid} style = {styles.userCard}>
                    <Image style = {styles.userImage} source ={{uri:imageUrl}}
                    />
                    <View>
                    <Text style = {styles.userName} >{name}</Text>
                    <Text style = {styles.userStatus} >{status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#FF6666',
        padding:8,
        borderRadius:10,
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:30,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF'
    },
    userStatus:{
        fontSize:12,
    }

})