const items = {
  ironOre:{
    readable:'Iron Ore',
    ingredients:[]
  },
  ironPlate:{
    readable:'Iron Plate',
    ingredients:['ironOre']
  },
  inserter:{
    readable:'Inserter',
    ingredients:['ironPlate', 'ironGearWheel', 'electronicCircuit']
  },
  ironGearWheel:{
    readable:'Iron Gear Wheel',
    ingredients:['ironPlate']
  },
  electronicCircuit:{
    readable:'Electronic Circuit',
    ingredients:['ironPlate', 'copperCable']
  },
  copperCable:{
    readable:'Copper Cable',
    ingredients:['copperPlate']
  },
}
