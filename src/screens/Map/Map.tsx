import {StyleSheet, Text, View, Button, ActivityIndicator,SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Map({route}) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  
  const startLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    startLoading();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
         <Icon
        name="left"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.containerActivityIndicator}>

        {loading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <>
            <MapView
              initialRegion={{
                latitude: route.params.lat,
                longitude: route.params.lon,
                latitudeDelta:20,
                longitudeDelta:0.5
              }}
              style={{width: '100%', height: '100%'}}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerActivityIndicator: {
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
