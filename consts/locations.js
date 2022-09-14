export default (locations = {
  CityCenter: {
    name: 'CityCenter',
    img: 'city_center.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 3.4,
        pitch: 0.09,
        goesTo: 'PopudrenkoPark',
      },
      {
        width: 50,
        height: 50,
        yaw: 6.44,
        pitch: 0.09,
        goesTo: 'KhmelnytskyPark',
      },
      {
        width: 50,
        height: 50,
        yaw: 7.96,
        pitch: 0.11,
        goesTo: 'FoodAvenue',
      },
    ],
  },
  KhmelnytskyPark: {
    name: 'KhmelnytskyPark',
    img: 'khmeln_park.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 19.2,
        pitch: 0.09,
        goesTo: 'CityCenter',
      },
    ],
  },
  PopudrenkoPark: {
    name: 'PopudrenkoPark',
    img: 'popudrenko_park.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 11.6,
        pitch: 0,
        goesTo: 'CityCenter',
      },
    ],
  },
  FoodAvenue: {
    name: 'PopudrenkoPark',
    img: 'food_avenue.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.5,
        pitch: 0.03,
        goesTo: 'CityCenter',
      },
      {
        width: 50,
        height: 50,
        yaw: 18.9,
        pitch: 0.02,
        goesTo: 'CatherineChurch',
      },
    ],
  },
  CatherineChurch: {
    name: 'CatherineChurch',
    img: 'kat_church.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.5,
        pitch: 0.01,
        goesTo: 'FoodAvenue',
      },
      {
        width: 50,
        height: 50,
        yaw: 17.36,
        pitch: 0,
        goesTo: 'Val',
      },
    ],
  },
  Val: {
    name: 'Val',
    img: 'val.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 10.1,
        pitch: 0.02,
        goesTo: 'CatherineChurch',
      },
    ],

  },
});
