import {
  View,
  Text,
  Platform,
  StatusBar,
  TextInput,
  Pressable,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons'
import Card from '../components/Card'

const SearchScreen = () => {
  const [input, setInput] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const submit = async query => {
    const type = 'movie'
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${type}?query=${query}&api_key=f6ffd9944913182603bcb59dbab7c133`
      )
      const data = await response.json()
      setSearchResult(data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <TextInput
          value={input}
          onChangeText={e => setInput(e)}
          placeholder='search any movie'
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            paddingVertical: 6,
            width: '90%',
            borderRadius: 20,
            gap: 10,
            paddingHorizontal: 10
          }}
        />
        <Pressable onPress={() => submit(input)}>
          <EvilIcons name='search' size={30} color='black' />
        </Pressable>
      </View>
      {/* while data are available */}
      {searchResult && searchResult.length > 0 && (
        <View style={{ alignSelf: 'center', marginBottom: 143 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={searchResult}
            renderItem={({ item }) => <Card item={item} />}
          />
        </View>
      )}

      {!input && (
        <View style={{ marginHorizontal: 10 }}>
          <Text>Type something to search movie.</Text>
        </View>
      )}
    </View>
  )
}

export default SearchScreen
