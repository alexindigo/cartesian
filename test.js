var assert = require('assert');
var cartesian = require('./');

var subjects = [

  // simple
  {
    input: ['A', 'B', 'C'],
    expected: [['A', 'B', 'C']]
  },

  // array of arrays
  {
    input: [
      ['A', 'B', 'C'],
      ['M'],
      ['X', 'Y'],
      'Z'
    ],
    expected: [
      [ 'A', 'M', 'X', 'Z' ],
      [ 'A', 'M', 'Y', 'Z' ],
      [ 'B', 'M', 'X', 'Z' ],
      [ 'B', 'M', 'Y', 'Z' ],
      [ 'C', 'M', 'X', 'Z' ],
      [ 'C', 'M', 'Y', 'Z' ]
    ]
  },

  // simple object
  {
    input: {a: 'A', b: 'B', c: 'C'},
    expected: [{a: 'A', b: 'B', c: 'C'}]
  },

  // object with arrays
  {
    input: {
      cdn: ['image1', 'image2'],
      path: '/dir',
      files: ['file1', 'file2', 'file3']
    },
    expected: [
      { cdn: 'image1', path: '/dir', files: 'file1' },
      { cdn: 'image1', path: '/dir', files: 'file2' },
      { cdn: 'image1', path: '/dir', files: 'file3' },
      { cdn: 'image2', path: '/dir', files: 'file1' },
      { cdn: 'image2', path: '/dir', files: 'file2' },
      { cdn: 'image2', path: '/dir', files: 'file3' }
    ]
  }
];


subjects.forEach(function(test)
{
  var product = cartesian(test.input);
  assert.deepEqual(product, test.expected);
});
