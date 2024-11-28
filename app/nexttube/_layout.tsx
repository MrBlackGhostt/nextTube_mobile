
import React from 'react'
import { Stack } from 'expo-router'

const NextTubelayout = () => {
  return (
  <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name='searchBar' options={{headerShown: false }}/>
  </Stack>
  )
}

export default NextTubelayout