import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screen/HomeScreen'
import DetailScreen from './screen/DetailScreen'
import SearchScreen from './screen/SearchScreen'

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none'
        }}
      >
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='detail' component={DetailScreen} />
        <Stack.Screen name='search' component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
