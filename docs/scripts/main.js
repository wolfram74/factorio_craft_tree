console.log('fart noises')
console.log(items)

function graphTextGen(itemsObj){
  var edges = []
  for(itemID in itemsObj){
    // console.log(itemID, itemsObj[itemID].ingredients)
    itemsObj[itemID].ingredients.forEach((ingredient, index)=>{
      console.log(ingredient, index)
      console.log([ingredient, itemID])
      const candidateEdge = `${ingredient} --> ${itemID}\n`
      if(!edges.includes(candidateEdge)){
        edges.push(candidateEdge)
      }
    })
  }
  return 'graph TD\n'+edges.join('\n')+'time --> fun'
}

var insertSvg = function(svgCode, bindFunctions){
  graphElement.innerHTML = svgCode;
};

var graphElement = document.querySelector('#mainGraph')
// graphTextGen(items)

var graphDefinition = graphTextGen(items);
var graph = mermaidAPI.render('graphDiv', graphDefinition, insertSvg);
