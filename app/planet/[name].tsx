import { useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { planets } from '../../lib/planets';

export default function PlanetDetails() {
  const { name } = useLocalSearchParams();
  const planet = planets.find(
    (p) => p.name.toLowerCase() === String(name).toLowerCase()
  );
  const { theme } = useTheme();

  useEffect(() => {
    if (!planet?.description) return;

    const speak = () => {
      Speech.stop();
      Speech.speak(planet!.description, {
        rate: 0.9,
        language: 'en',
      });
    };

    speak();

    return () => {
      Speech.stop();
    };
  }, [planet]);

  if (!planet) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Planet not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#f9f9f9' : '#000' },
      ]}
    >
      <Text
        style={[styles.title, { color: theme === 'light' ? '#000' : '#fff' }]}
      >
        {planet.name}
      </Text>
      <Image
        source={planet.image}
        style={styles.image}
        resizeMode="contain"
      />
      <Text
        style={[
          styles.description,
          { color: theme === 'light' ? '#333' : '#ccc' },
        ]}
      >
        {planet.description}
      </Text>
      <Text
        style={[
          styles.coordinates,
          { color: theme === 'light' ? '#555' : '#aaa' },
        ]}
      >
        Right Ascension: {planet.coordinates.rightAscension}
        {'\n'}
        Declination: {planet.coordinates.declination}
      </Text>
      <Text
        style={[
          styles.sectionTitle,
          { color: theme === 'light' ? '#222' : '#fff' },
        ]}
      >
        Facts:
      </Text>
      {planet.facts?.map((fact, index) => (
        <Text
          key={index}
          style={[
            styles.factItem,
            { color: theme === 'light' ? '#444' : '#ccc' },
          ]}
        >
          • {fact}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 8,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  coordinates: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  factItem: {
    fontSize: 16,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
});
