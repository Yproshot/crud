import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaPessoas( navigation, route) {
  
  const [pessoas, setPessoas] = useState([
    {
        "nome": "João",
        "idade": "19",
        "CPF": "123456789",
        "email": "joao@joao"
    },
    {
      "nome": "Maria",
      "idade" : "20",
      "CPF": "987654321",
      "email": "maria@maria"
    },
    {
      "nome": "Pedro",
      "idade": "21",
      "CPF": "123456789",
      "email": "pedro@pedro"
    }
  ])
  
  
  
  
  
  
    return (
    <View>
      <Text>ListaPessoas</Text>
    </View>
  )
}

const styles = StyleSheet.create({})