export const carClassData = [
  "Classic",
  "SUV",
  "Sedan",
  "Minivan",
  "Luxury",
  "Sport",
  "Coupe",
  "Supercar",
];
export const cylinderCount = [2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];

export const driveTypes = [
  "front-wheel drive (FWD)",
  "rear-wheel drive (RWD)",
  "all-wheel drive (AWD)",
];
export const fuelTypes = [
  "Diesel",
  "Petrol",
  "Hybrid",
  "Gas",
  "Biodiesel",
  "Petroleum",
];
export const carSeats = [3, 4, 5, 6, 7, 8, 9, 10];

const year = [];
for (let i = 1980; i <= 2023; i++) {
  year.push(i);
}

export const carYear = year;
export const carDataApi =  "https://5000-itsparasdev-carapi-qy1zu9h5d46.ws-us106.gitpod.io"