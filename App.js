import React, { useState } from 'react';
import { Text, View, Button, Image, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'chocolate'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 25,
        },
      }}
        initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title='Count'
          onPress={() => { setCount(c => c + 1) }}
        />
      ),
      headerLeft: () => (
        <Image
          source={require('../Include-Topics/assets/favicon.png')}
          style={{ height: '50px', width: '50px' }}
        />
      )
    })
  }, [navigation, setCount]);
  let data = {
    name: 'Neha',
    email: 'neha@gmail.com',
    age: '18',
    address: 'Chamba'
  }
  return (
    <>
      <ImageBackground source={require('../Include-Topics/assets/computerIMG.jpg')}
        style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '300px' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 50, padding: 20, color:'chocolate' }}>Home Screen</Text>
          <Text style={{ fontSize: 40, padding: 20, color:'#00f' }}>{count}</Text>
          <Button
            title='go to details'
            onPress={() => navigation.push('Details', data)}
          />
        </View>
      </ImageBackground>
      <Home />
    </>
  );
}

function DetailsScreen({ route }) {
  let data = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 50, padding: 20 }}>Details Screen</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{data.name}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{data.email}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{data.age}</Text>
      <Text style={{ fontSize: 30, fontStyle: 'italic' }}>{data.address}</Text>
    </View>
  );
}

export default App;
