import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const planets = [
  { name: 'Mercury', image: require('../../assets/planets/mercury.jpg') },
  { name: 'Venus', image: require('../../assets/planets/venus.jpg') },
  { name: 'Earth', image: require('../../assets/planets/earth.jpg') },
  { name: 'Mars', image: require('../../assets/planets/mars.jpg') },
  { name: 'Jupiter', image: require('../../assets/planets/jupiter.jpg') },
  { name: 'Saturn', image: require('../../assets/planets/saturn.jpg') },
  { name: 'Uranus', image: require('../../assets/planets/uranus.jpg') },
  { name: 'Neptune', image: require('../../assets/planets/neptune.jpg') },
];

export default function HomeScreen() {
  const router = useRouter();

  const renderPlanetButton = (planet: typeof planets[number]) => (
    <TouchableOpacity
      key={planet.name}
      style={styles.button}
      onPress={() => router.push(`/planet/${planet.name}`)}
    >
      <Image source={planet.image} style={styles.image} />
      <Text style={styles.buttonText}>{planet.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {[0, 1, 2].map((row) => (
        <View key={row} style={styles.row}>
          {planets.slice(row * 3, row * 3 + 3).map(renderPlanetButton)}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    padding: 20,
    backgroundColor: '#d3d3d3',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 12,
    width: 100,
    height: 120,
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
});
