import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProfileScreen() {
  return ( 
    <SafeAreaView className="flex-1 flex-row justify-center items-center">
      <Text className="text-lg">Profile Page </Text>
    </SafeAreaView>
  )
  
}