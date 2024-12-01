import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { store } from '../store'


const Videolayout = () => {
  return (
    <Provider store={store} >

  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='video' options={{headerShown: false }}/>
    
  </Stack>
    </Provider>
  )
}

export default Videolayout