const plants = []

export const addPlant = (seed) => {
  if (Array.isArray(seed)) {
    for (const singleSeed of seed ) {
      plants.push(singleSeed)
    }
  }
  else {
    plants.push(seed)
  }
}

export const usePlants = () => {
  return plants.slice()
}