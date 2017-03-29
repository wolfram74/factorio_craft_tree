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
  stackInserter:{
    readable:'Stack Inserter',
    ingredients:['fastInserter', 'ironGearWheel', 'electronicCircuit', 'advancedCircuit']
  },
  fastInserter:{
    readable:'Fast Inserter',
    ingredients:['inserter', 'ironPlate', 'electronicCircuit']
  },
  advancedCircuit:{
    readable:'Advanced Circuit',
    ingredients:['electronicCircuit', 'copperCable', 'plastic']
  },
  filterInserter:{
    readable:'Filter Inserter',
    ingredients:['fastInserter', 'electronicCircuit']
  },
  steelPlate:{
    readable:'Steel Plate',
    ingredients:['ironPlate']
  },
  battery:{
    readable:'Battery',
    ingredients:['copperPlate', 'ironPlate', 'sulfuricAcid']
  },
  sulfuricAcid:{
    readable:'Sulfuric Acid',
    ingredients:['ironPlate', 'sulfur', 'water']
  },
  sulfur:{
    readable:'Sulfur',
    ingredients:['petroleumGas', 'water']
  },

}
