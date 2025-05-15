import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

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
  const { theme } = useTheme();

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
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme === 'light' ? '#f0f0f0' : '#111' }]}>
      {[0, 1, 2].map((row) => (
        <View key={row} style={styles.row}>
          {planets.slice(row * 3, row * 3 + 3).map(renderPlanetButton)}
        </View>
      ))}

      <TouchableOpacity style={styles.quizButton} onPress={() => router.push('/quiz')}>
        <Text style={styles.quizText}>🧠 Test Your Knowledge</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 12,
    width: 100,
    height: 120,
    justifyContent: 'center',
    margin: 5,
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
  quizButton: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  quizText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
