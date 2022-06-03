import { StyleSheet, Text, View, Button, Alert, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import * as loginService from '../services/LoginService'

export default function Home(props) {
  const navigation = props.navigation

  const logoff = async () => {

    try {
      await loginService.logoff()
      navigation.replace("Login")
    } catch (error) {
      Alert.alert(error)
    }

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      //headerLeft: () => <Button title='+' onPress={() => navigation.navigate("CadastroPet")} />,
      headerRight: () => <Button title='Logoff' onPress={logoff} color='white' />
    })

  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}