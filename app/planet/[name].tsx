import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { planets } from '../../lib/planets';

export default function PlanetDetails() {
  const { name } = useLocalSearchParams();
  const planet = planets.find(p => p.name.toLowerCase() === String(name).toLowerCase());

  if (!planet) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Planet not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{planet.name}</Text>
      <Image source={planet.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.description}>{planet.description}</Text>
      <Text style={styles.coordinates}>
        Right Ascension: {planet.coordinates.rightAscension}
        {'\n'}
        Declination: {planet.coordinates.declination}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
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
    marginBottom: 20,
    color: '#333',
  },
  coordinates: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
