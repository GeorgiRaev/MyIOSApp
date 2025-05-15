export type Planet = {
  name: string;
  image: any;
  description: {
    en: string;
    bg: string;
  };
  coordinates: {
    rightAscension: string;
    declination: string;
  };
  facts: string[];
};

export const planets: Planet[] = [
  {
    name: 'Mercury',
    image: require('../assets/planets/mercury.jpg'),
    description: {
      en: 'Mercury is the closest planet to the Sun and has no atmosphere.',
      bg: 'Меркурий е най-близката планета до Слънцето и няма атмосфера.',
    },
    coordinates: {
      rightAscension: '07h 39m 18s',
      declination: '+21° 13′ 00″',
    },
    facts: [
      'Average temperature: 167°C',
      'Distance from Sun: 57.9 million km',
      'Surface gravity: 3.7 m/s²',
    ],
  },
  {
    name: 'Venus',
    image: require('../assets/planets/venus.jpg'),
    description: {
      en: 'Venus has a thick atmosphere and is the hottest planet in the Solar System.',
      bg: 'Венера има гъста атмосфера и е най-горещата планета в Слънчевата система.',
    },
    coordinates: {
      rightAscension: '10h 43m 52s',
      declination: '+07° 33′ 15″',
    },
    facts: [
      'Average temperature: 464°C',
      'Distance from Sun: 108.2 million km',
      'Surface gravity: 8.9 m/s²',
    ],
  },
  {
    name: 'Earth',
    image: require('../assets/planets/earth.jpg'),
    description: {
      en: 'Our home planet, the only one known to support life.',
      bg: 'Нашата родна планета, единствената известна, която поддържа живот.',
    },
    coordinates: {
      rightAscension: '00h 00m 00s',
      declination: '+00° 00′ 00″',
    },
    facts: [
      'Average temperature: 15°C',
      'Distance from Sun: 149.6 million km',
      'Surface gravity: 9.8 m/s²',
    ],
  },
  {
    name: 'Mars',
    image: require('../assets/planets/mars.jpg'),
    description: {
      en: 'Mars is known as the Red Planet and may have had water in the past.',
      bg: 'Марс е известен като Червената планета и е възможно в миналото да е имал вода.',
    },
    coordinates: {
      rightAscension: '18h 48m 05s',
      declination: '-23° 29′ 30″',
    },
    facts: [
      'Average temperature: -63°C',
      'Distance from Sun: 227.9 million km',
      'Surface gravity: 3.7 m/s²',
    ],
  },
  {
    name: 'Jupiter',
    image: require('../assets/planets/jupiter.jpg'),
    description: {
      en: 'Jupiter is the largest planet in the Solar System and has many moons.',
      bg: 'Юпитер е най-голямата планета в Слънчевата система и има много луни.',
    },
    coordinates: {
      rightAscension: '00h 06m 30s',
      declination: '-00° 33′ 40″',
    },
    facts: [
      'Average temperature: -108°C',
      'Distance from Sun: 778.3 million km',
      'Surface gravity: 24.8 m/s²',
    ],
  },
  {
    name: 'Saturn',
    image: require('../assets/planets/saturn.jpg'),
    description: {
      en: 'Saturn is famous for its spectacular ring system.',
      bg: 'Сатурн е известен със своята впечатляваща система от пръстени.',
    },
    coordinates: {
      rightAscension: '21h 10m 40s',
      declination: '-16° 09′ 30″',
    },
    facts: [
      'Average temperature: -139°C',
      'Distance from Sun: 1.43 billion km',
      'Surface gravity: 10.4 m/s²',
    ],
  },
  {
    name: 'Uranus',
    image: require('../assets/planets/uranus.jpg'),
    description: {
      en: 'Uranus has a bluish color due to methane in its atmosphere.',
      bg: 'Уран има синкав цвят поради метана в атмосферата си.',
    },
    coordinates: {
      rightAscension: '02h 40m 20s',
      declination: '+15° 00′ 00″',
    },
    facts: [
      'Average temperature: -197°C',
      'Distance from Sun: 2.87 billion km',
      'Surface gravity: 8.7 m/s²',
    ],
  },
  {
    name: 'Neptune',
    image: require('../assets/planets/neptune.jpg'),
    description: {
      en: 'Neptune is the farthest known planet and has strong winds.',
      bg: 'Нептун е най-отдалечената известна планета и има силни ветрове.',
    },
    coordinates: {
      rightAscension: '23h 27m 00s',
      declination: '-05° 01′ 00″',
    },
    facts: [
      'Average temperature: -201°C',
      'Distance from Sun: 4.50 billion km',
      'Surface gravity: 11.0 m/s²',
    ],
  },
];
