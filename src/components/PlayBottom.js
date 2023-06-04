import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const PlayBottom = ({ handleModal }) => {
  return (
    <Pressable
      onPress={handleModal}
      style={{
        position: 'absolute',
        right: 20,
        top: -20,
        backgroundColor: '#4481FC',
        borderRadius: 100,
        padding: 10,
        elevation: 30
      }}
    >
      <AntDesign name='caretright' size={24} color='white' />
    </Pressable>
  )
}

export default PlayBottom
