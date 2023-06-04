import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Card = ({ item }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={{ margin: 3, marginTop: 10 }}
      onPress={() => {
        navigation.navigate('detail', {
          id: item.id
        })
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
        }}
      />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 200,
    borderRadius: 20
  }
})

export default Card
