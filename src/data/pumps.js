let pumps = [
  {
    id: 1,
    name: "Pump 1",
    type: "Centrifugal",
    area: "Area A",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "1000 GPM",
    offset: "5 sec",
    currentPressure: 150,
    minPressure: 120,
    maxPressure: 180,
    status: "Operational"
  },
  {
    id: 2,
    name: "Pump 2",
    type: "Submersible",
    area: "Area B",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "800 GPM",
    offset: "3 sec",
    currentPressure: 130,
    minPressure: 100,
    maxPressure: 160,
    status: "Operational"
  },
  {
    id: 3,
    name: "Pump 3",
    type: "Diaphragm",
    area: "Area C",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "600 GPM",
    offset: "2 sec",
    currentPressure: 110,
    minPressure: 80,
    maxPressure: 140,
    status: "Operational"
  },
  {
    id: 4,
    name: "Pump 4",
    type: "Rotary",
    area: "Area D",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "400 GPM",
    offset: "1 sec",
    currentPressure: 90,
    minPressure: 60,
    maxPressure: 120,
    status: "Operational"
  },
  {
    id: 5,
    name: "Pump 5",
    type: "Peristaltic",
    area: "Area E",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "200 GPM",
    offset: "0 sec",
    currentPressure: 70,
    minPressure: 40,
    maxPressure: 100,
    status: "Maintenance"
  },
  {
    id: 6,
    name: "Pump 6",
    type: "Centrifugal",
    area: "Area F",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "1200 GPM",
    offset: "6 ft",
    currentPressure: 170,
    minPressure: 140,
    maxPressure: 200,
    status: "Operational"
  },
  {
    id: 7,
    name: "Pump 7",
    type: "Submersible",
    area: "Area G",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "1000 GPM",
    offset: "4 sec",
    currentPressure: 150,
    minPressure: 120,
    maxPressure: 180,
    status: "Operational"
  },
  {
    id: 8,
    name: "Pump 8",
    type: "Diaphragm",
    area: "Area H",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "800 GPM",
    offset: "3 sec",
    currentPressure: 130,
    minPressure: 100,
    maxPressure: 160,
    status: "Maintenance"
  },
  {
    id: 9,
    name: "Pump 9",
    type: "Rotary",
    area: "Area I",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "600 GPM",
    offset: "2 sec",
    currentPressure: 110,
    minPressure: 80,
    maxPressure: 140,
    status: "Operational"
  },
  {
    id: 10,
    name: "Pump 10",
    type: "Peristaltic",
    area: "Area J",
    latitude: 34.0522,
    longitude: -118.2437,
    flowRate: "400 GPM",
    offset: "1 sec",
    currentPressure: 90,
    minPressure: 60,
    maxPressure: 120,
    status: "Offline"
  }
];

export const addNewPump = (newPump) => {
  const newId = Math.max(...pumps.map(p => p.id), 0) + 1;
  const pumpToAdd = { ...newPump, id: newId };
  pumps.push(pumpToAdd);
  return pumpToAdd;
};
export default pumps;