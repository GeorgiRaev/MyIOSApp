import { useLocalSearchParams } from 'expo-router';
import * as Speech from 'expo-speech';
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { planets } from '../../lib/planets';

export default function PlanetDetails() {
  const { name } = useLocalSearchParams();
  const planet = planets.find(
    (p) => p.name.toLowerCase() === String(name).toLowerCase()
  );
  const { theme } = useTheme();
  const { language } = useLanguage();

  const getDescription = () => {
    return planet?.description?.[language] || planet?.description?.en || '';
  };

  const speakDescription = () => {
    const text = getDescription();
    const voiceLang = language === 'bg' ? 'bg-BG' : 'en-US';

    Speech.stop();
    Speech.speak(text, {
      rate: 0.9,
      language: voiceLang,
    });
  };

  useEffect(() => {
    speakDescription();

    return () => {
      Speech.stop(); // ❗️ важен: синхронно спиране
    };
  }, [planet, language]);

  if (!planet) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Planet not found</Text>
      </View>
    );
  }

  const description = getDescription();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#f9f9f9' : '#000' },
      ]}
    >
      <Text style={[styles.title, { color: theme === 'light' ? '#000' : '#fff' }]}>
        {planet.name}
      </Text>

      <Image source={planet.image} style={styles.image} resizeMode="contain" />

      <Text style={[styles.description, { color: theme === 'light' ? '#333' : '#ccc' }]}>
        {description}
      </Text>

      <TouchableOpacity style={styles.speakButton} onPress={speakDescription}>
        <Text style={styles.speakText}>
          🔊 {language === 'bg' ? 'Прочети отново' : 'Speak again'}
        </Text>
      </TouchableOpacity>

      <Text style={[styles.coordinates, { color: theme === 'light' ? '#555' : '#aaa' }]}>
        Right Ascension: {planet.coordinates.rightAscension}
        {'\n'}
        Declination: {planet.coordinates.declination}
      </Text>

      <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#222' : '#fff' }]}>
        {language === 'bg' ? 'Факти' : 'Facts'}:
      </Text>

      {planet.facts?.map((fact, index) => (
        <Text
          key={index}
          style={[styles.factItem, { color: theme === 'light' ? '#444' : '#ccc' }]}
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
    marginBottom: 10,
  },
  speakButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  speakText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
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
