export type Planet = {
    name: string;
    image: any;
    description: string;
    coordinates: {
      rightAscension: string; // в часове:минути:секунди
      declination: string;    // в градуси:минути:секунди
    };
  };
  
  export const planets: Planet[] = [
    {
      name: 'Mercury',
      image: require('../assets/planets/mercury.jpg'),
      description: 'Mercury is the closest planet to the Sun and has no atmosphere.',
      coordinates: {
        rightAscension: '07h 39m 18s',
        declination: '+21° 13′ 00″',
      },
    },
    {
      name: 'Venus',
      image: require('../assets/planets/venus.jpg'),
      description: 'Venus is similar in size to Earth but has a thick, toxic atmosphere.',
      coordinates: {
        rightAscension: '10h 43m 52s',
        declination: '+07° 33′ 15″',
      },
    },
    {
      name: 'Earth',
      image: require('../assets/planets/earth.jpg'),
      description: 'Our home planet, the only one known to support life.',
      coordinates: {
        rightAscension: '00h 00m 00s',
        declination: '+00° 00′ 00″',
      },
    },
    {
      name: 'Mars',
      image: require('../assets/planets/mars.jpg'),
      description: 'Mars is known as the Red Planet and may have had water in the past.',
      coordinates: {
        rightAscension: '18h 48m 05s',
        declination: '-23° 29′ 30″',
      },
    },
    {
      name: 'Jupiter',
      image: require('../assets/planets/jupiter.jpg'),
      description: 'Jupiter is the largest planet in the Solar System and has many moons.',
      coordinates: {
        rightAscension: '00h 06m 30s',
        declination: '-00° 33′ 40″',
      },
    },
    {
      name: 'Saturn',
      image: require('../assets/planets/saturn.jpg'),
      description: 'Saturn is famous for its spectacular ring system.',
      coordinates: {
        rightAscension: '21h 10m 40s',
        declination: '-16° 09′ 30″',
      },
    },
    {
      name: 'Uranus',
      image: require('../assets/planets/uranus.jpg'),
      description: 'Uranus has a bluish color due to methane in its atmosphere.',
      coordinates: {
        rightAscension: '02h 40m 20s',
        declination: '+15° 00′ 00″',
      },
    },
    {
      name: 'Neptune',
      image: require('../assets/planets/neptune.jpg'),
      description: 'Neptune is the farthest known planet and has strong winds.',
      coordinates: {
        rightAscension: '23h 27m 00s',
        declination: '-05° 01′ 00″',
      },
    },
  ];
  