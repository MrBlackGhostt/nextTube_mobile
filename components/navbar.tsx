import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

const Navbar = () => {
    console.log("navbar")
  return (
    <View className=' flex-row h-auto justify-between bg-red-500' >
        <Image style={styles.image}  source={require('../assets/images/logo3.png')} />
        <View className='flex-row justify-around items-center '>
            {/* Icon of the search bar to go to search screen  */}
            <Link href="/nexttube/searchBar">
            
        <Ionicons name="search-sharp" size={32} color="gray" />
            </Link>
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
    width: 50,
    height: 50,
    paddingLeft: 0,
    backgroundColor: 'blue'
    }
})