const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14,
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const getNumFruit = fruit => {
  return sleep(1000).then(v => fruitBasket[fruit])
}

// getNumFruit('apple').then(num => console.log(num))


// control()

const fruitsToGet = ['apple', 'grape', 'pear'];

const forLoop = async _ => {
  console.log('Start')

  for (let index = 0; index < fruitsToGet.length; index++) {
    const fruit = fruitsToGet[index]
    const numFruit = await getNumFruit(fruit)
    console.log(numFruit)
  }

  console.log('End')
}

// forLoop();

const forEachLoop = _ => {
  console.log('Start')

  fruitsToGet.forEach(async fruit => {
    const numFruit = await getNumFruit(fruit)
    console.log(numFruit)
  })

  console.log('End')
}

// forEachLoop();

// const mapLoop = async _ => {
//   console.log('Start')

//   const numFruits = await fruitsToGet.map(async fruit => {
//     const numFruit = await getNumFruit(fruit)
//     return numFruit
//   })

//   console.log(numFruits)

//   console.log('End')
// }

const mapLoop = async _ => {
  console.log('Start')

  const promises = fruitsToGet.map(async fruit => {
    const numFruit = getNumFruit(fruit)
    return numFruit
  })

  const numFruits = await Promise.all(promises)
  console.log(numFruits)

  console.log('End')
}

mapLoop();


// const filterLoop = async _ => {
//   console.log('Start')

//   const moreThan20 = await fruitsToGet.filter(async fruit => {
//     const numFruit = await getNumFruit(fruit)
//     return numFruit > 20
//   })

//   console.log(moreThan20)
//   console.log('End')
// }

const filterLoop = async _ => {
  console.log('Start')

  const promises = fruitsToGet.map(fruit => getNumFruit(fruit))
  const numFruits = await Promise.all(promises)

  const moreThan20 = fruitsToGet.filter((fruit, index) => {
    const numFruit = numFruits[index]
    return numFruit > 20
  })

  console.log("numFruits: ", numFruits);
  console.log(moreThan20)
  console.log('End')
}

// filterLoop();