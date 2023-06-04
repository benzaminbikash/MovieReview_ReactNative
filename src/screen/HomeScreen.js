import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Pressable
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { popular, upcoming, tv, family, documentary } from '../service'
import { SliderBox } from 'react-native-image-slider-box'
import { WIDTH, HEIGHT } from '../constants/Dimension'
import ListMovie from '../components/ListMovie'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const [populardata, setPopularData] = useState([])
  const [upcomingdata, setUpcomingData] = useState([])
  const [tvdata, setTVData] = useState([])
  const [familydata, setFamilyData] = useState([])
  const [documentarydata, setDocumentyData] = useState([])

  const fetchApi = async () => {
    try {
      //popular movie
      const response = await fetch(popular)
      const data = await response.json()
      if (data) {
        setPopularData(data.results)
      }
      //upcoming movie
      const upcome = await fetch(upcoming)
      const updata = await upcome.json()
      if (updata) {
        setUpcomingData(updata.results)
      }
      //tv data:
      const tvresponse = await fetch(tv)
      const newTv = await tvresponse.json()
      if (newTv) {
        setTVData(newTv.results)
      }
      //family data:
      const familyresponse = await fetch(family)
      const newfamily = await familyresponse.json()
      if (newfamily) {
        setFamilyData(newfamily.results)
      }
      //family data:
      const discoresponse = await fetch(documentary)
      const newdis = await discoresponse.json()
      if (newdis) {
        setDocumentyData(newdis.results)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])
  const imageSlider = populardata.map(
    item => `https://image.tmdb.org/t/p/w500/${item.poster_path}`
  )
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        {/* image slider */}
        <SliderBox
          images={imageSlider}
          autoplay={true}
          circleLoop={true}
          sliderBoxHeight={HEIGHT / 2}
          dotStyle={styles.dot}
        />

        <View style={{ marginBottom: 30 }}>
          <ListMovie item={populardata} title='Popular Movies' />
          <ListMovie item={tvdata} title='Popular TV Shows' />
          <ListMovie item={upcomingdata} title='Upcoming Movies' />
          <ListMovie item={familydata} title='Family Movies' />
          <ListMovie item={documentarydata} title='Documentary Movies' />
        </View>

        {/* popular Movie */}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 40,
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
          alignSelf: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          M
        </Text>
        <Feather
          name='search'
          size={20}
          color='white'
          onPress={() => {
            navigation.navigate('search')
          }}
        />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  main: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  dot: {
    height: 0
  }
})

export default HomeScreen
