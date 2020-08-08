const judgeVegetable = function (vegetables, metric) {

  let champion = vegetables[0][metric];
  let championIndex = 0;

  vegetables.forEach (function(element, index) {
    if (element[metric] > champion) {
      champion = element[metric];
      championIndex = index;  
    }
  });
  
  return vegetables[championIndex].submitter;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));