function rotateImage(a) {
    
    // disclaimer: not constant memory
    // solution = [] 
    // start from the back 
    // grab the 0th element of each array << [] 
    // solution << []
    // grab the 1th element of each array << [] 
    // solution << []
    // grab the nth element of each array << [] 
    // solution << []
  
   let solution = []
   let row = a.length-1 // start fromt the bottom row
   let column = 0 // start from the front 
    for(column; column < a[0].length; column++){
    //   console.log('row', row) 
    //   console.log('column', column) 
      let newRow = []
      for(row; row >= 0; row--){
        // console.log('num', a[row][column])
        let num = a[row][column]
        // console.log('newRow', newRow)
        newRow.push(num)
      }
      row = a.length-1
    //   console.log('newRow', newRow)
      solution.push(newRow)
    }
    return solution
}
  
let a = [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]

console.log(rotateImage(a))