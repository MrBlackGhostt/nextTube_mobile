import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View className='flex-1 flex-row w-full bg-slate-500'>
        <TextInput
        className='bg-blue-500 h-[40] '
        // style={{height: "100%"}}
        placeholder="Type here to translate!"
        onChangeText={newText => {
            console.log("Text")
            // setText(newText)
        }}
        defaultValue={''}
      />
         <Ionicons name="search-sharp" size={32} color="gray" />
    </View>
  )
}

export default SearchBar

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