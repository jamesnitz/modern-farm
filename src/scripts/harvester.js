

export const harvestPlants = (plantsArray) => {
  const seedObjArray = []

  for (const plant of plantsArray) {
    let plantOutput = plant.output

    if (plant.type === "Corn") {
      plantOutput /= 2
    }

    for (let i = 0; i < plantOutput; i++) {
      seedObjArray.push(plant)
    }

  }
  return seedObjArray
}