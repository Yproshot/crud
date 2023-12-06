import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListaPessoas from './ListaPessoas'
import FormPessoas from './FormPessoas'

const Stack = createStackNavigator()
export default function StackPessoas() {
  return (
     <Stack.Navigator>
        <Stack.Screen name="ListaPessoas" component={ListaPessoas} />
        <Stack.Screen name="FormPessoas" component={FormPessoas} />
     </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})