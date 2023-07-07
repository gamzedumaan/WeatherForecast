import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import MapButton from '../../components/MapButton/MapButton';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  const [weatherData, setWeatherData] = useState(null);
  const [country, setCountry] = useState('');

  function deleteData() {
    setWeatherData(null);
  }
  function AllWeather() {
    fetch(
      'https://api.weatherapi.com/v1/current.json?key=52fa619fc9ea4f53b5d134732230307&q=' +
        country +
        '&aqi=no',
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeatherData(data);
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconAndText}>
        <Icon name="left" size={24} color="black" />
        <Text style={styles.location_Text}>location</Text>
      </View>
      <View style={styles.input_Container}>
        <SearchInput
          callFunction={AllWeather}
          value={country}
          onChangeText={setCountry}
          text="Search"
        />
        <Icon2 onPress={deleteData} name="delete" size={24} color="black" />
        <MapButton
          onSelect={() =>
            navigation.navigate('Map', {
              lat: weatherData.location.lat,
              lon: weatherData.location.lon,
            })
          }
        />
      </View>

      {weatherData && (
        <View style={styles.main_Container}>
          <View style={styles.main}>
            <View style={{flex: 1}}>
              <View style={{marginTop: 10, marginLeft: 20}}>
                <Text style={styles.country}>
                  {weatherData.location.country}
                </Text>
                <Text style={styles.region}>{weatherData.location.region}</Text>
                <Text style={styles.localtime}>
                  {weatherData.location.localtime}
                </Text>
              </View>
              <View style={{marginTop: 15, marginLeft: 20}}>
                <Text style={styles.temp_c}>{weatherData.current.temp_c}</Text>
                <Text style={styles.temp_f}>{weatherData.current.temp_f}</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={styles.image}
                source={{uri: 'https:' + weatherData.current.condition.icon}}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  input_Container: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  location_Text: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    flex: 1,
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  main_Container: {
    alignItems: 'center',
    marginTop: '20%',
  },
  main: {
    height: '60%',
    width: '90%',
    backgroundColor: '#041523',
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 150,
  },
  country: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  region: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 5,
  },
  localtime: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
  },
  current: {
    color: '#fff',
    marginTop: 5,
  },
  temp_c: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  temp_f: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
});
