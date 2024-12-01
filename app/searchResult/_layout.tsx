import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { store } from '../store'

const SearchResultlayout = () => {
  return (
    <Provider store={store}>
    <Stack>
        <Stack.Screen name='searchResult' options={{headerShown: false}} />
    </Stack>
    </Provider>
  )
}

export default SearchResultlayout