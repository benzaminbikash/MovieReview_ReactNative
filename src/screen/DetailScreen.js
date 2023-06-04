import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
  Modal,
  Pressable
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HEIGHT } from '../constants/Dimension'
import { Rating } from 'react-native-ratings'
import dateFormat from 'dateformat'
import PlayBottom from '../components/PlayBottom'
import Video from 'react-native-video'
import { AntDesign } from '@expo/vector-icons'
// At the top where our imports are...
import VideoPlayer from 'react-native-video-controls'

const DetailScreen = () => {
  const route = useRoute()
  const id = route.params.id
  const navigation = useNavigation()

  const [item, setItem] = useState([])
  const fetchApi = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f6ffd9944913182603bcb59dbab7c133`
    )
    const data = await response.json()
    if (data) {
      setItem(data)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [id])
  const [visibleModal, setVisibleModal] = useState(false)
  const handleModal = () => {
    setVisibleModal(!visibleModal)
  }
  return (
    <>
      <ScrollView style={styles.main}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            zIndex: 10,
            top: 15,
            left: 10
          }}
        >
          <AntDesign name='leftcircle' size={24} color='white' />
        </Pressable>
        {item && (
          <View>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              }}
              style={{ height: HEIGHT / 2.5 }}
            />
            <View>
              <PlayBottom handleModal={handleModal} />
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '800',
                  fontSize: 20,
                  marginTop: 10
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 10,
                  marginTop: 5
                }}
              >
                {item.genres &&
                  item.genres.map((item, index) => (
                    <View key={index}>
                      <Text>{item.name}</Text>
                    </View>
                  ))}
              </View>
              <View style={{ marginTop: 4 }}>
                {item.vote_average && (
                  <Rating
                    ratingCount={5}
                    imageSize={28}
                    startingValue={item.vote_average / 2}
                    readonly
                  />
                )}
              </View>
              <Text style={{ marginTop: 5, marginHorizontal: 10 }}>
                {item.overview}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 5
                }}
              >
                {'Release Date: ' +
                  dateFormat(item.release_date, 'mmmm d yyyy')}
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
      <Modal animationType='slide' visible={visibleModal}>
        <Pressable
          onPress={handleModal}
          style={{
            alignSelf: 'center',
            marginTop: 20,
            backgroundColor: 'black',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20
          }}
        >
          <Text style={{ color: 'white' }}>Cancel</Text>
        </Pressable>
      </Modal>
    </>
  )
}
const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff'
  }
})

export default DetailScreen
