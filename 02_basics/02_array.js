const marvel_hero=["thor","iron","spider"]
const dc_hero=["super","flash","bat"]
// marvel_hero.push(dc_hero)

// console.log(marvel_hero);

// console.log(marvel_hero[3][2]);


const myn1=marvel_hero.concat(dc_hero)
console.log(myn1);


const all_hero=[...dc_hero,...marvel_hero]
console.log(all_hero);



//methods

// // isArray =check it is array or not 
//  from = it convert into array from string
//   array.of  =  it also convert into array
//   flat= it convert into array