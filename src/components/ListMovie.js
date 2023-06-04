import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ListMovie = ({ title, item }) => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.titlemain}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item}
          renderItem={({ item, index }) => (
            <Pressable
              key={index}
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
          )}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  titlemain: {
    marginTop: 5,
    marginBottom: 10
  },
  title: { fontWeight: '900', fontSize: 17, marginHorizontal: 10 },
  image: {
    width: 120,
    height: 200,
    borderRadius: 20
  }
})
export default ListMovie
