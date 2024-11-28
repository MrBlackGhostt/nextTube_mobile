import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = () => {
    console.log("navbar")
  return (
    <View className=' flex-row h-auto justify-between bg-red-500' >
        <Image style={styles.image}  source={require('../assets/images/logo1.webp')} />
        <View className='flex-row justify-around items-center '>
        <TextInput
        className='bg-blue-500 h-full'
        // style={{height: "100%"}}
        placeholder="Type here to translate!"
        onChangeText={newText => {
            console.log("Text")
            // setText(newText)
        }}
        defaultValue={''}
      />
        <Ionicons name="search-sharp" size={32} color="gray" />
      <Text>Navbar</Text>
        </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: "red"
    },
    image:{
    width: 40,
    height: 40,
    }
})