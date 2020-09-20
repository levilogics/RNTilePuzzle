const _ = require('lodash');

const defaultMatrix = [
  [
    {number: 0, isBlank: false},
    {number: 1, isBlank: false},
    {number: 2, isBlank: false},
  ],
  [
    {number: 3, isBlank: false},
    {number: 4, isBlank: false},
    {number: 5, isBlank: false},
  ],
  [
    {number: 6, isBlank: false},
    {number: 7, isBlank: false},
    {number: 8, isBlank: true},
  ],
];

const isBlank = (tile, matrix) => {
  const _tile = _.get(matrix, [
    _.get(tile, 'col') ?? -1,
    _.get(tile, 'row') ?? -1,
  ]);
  return _.get(_tile, 'isBlank') ?? false;
};

const win = (matrix) => {
  return true;
};

const leftTile = (tile) => {
  if (_.isEqual(tile, {row: 0, col: 0})) {
    return null;
  } else if (_.isEqual(tile, {row: 0, col: 1})) {
    return {row: 0, col: 0};
  } else if (_.isEqual(tile, {row: 0, col: 2})) {
    return {row: 0, col: 1};
  } else if (_.isEqual(tile, {row: 1, col: 0})) {
    return null;
  } else if (_.isEqual(tile, {row: 1, col: 1})) {
    return {row: 1, col: 0};
  } else if (_.isEqual(tile, {row: 1, col: 2})) {
    return {row: 1, col: 1};
  } else if (_.isEqual(tile, {row: 2, col: 0})) {
    return null;
  } else if (_.isEqual(tile, {row: 2, col: 1})) {
    return {row: 2, col: 0};
  } else if (_.isEqual(tile, {row: 2, col: 2})) {
    return {row: 2, col: 1};
  }
  return null;
};

const rightTile = (tile) => {
  if (_.isEqual(tile, {row: 0, col: 0})) {
    return {row: 0, col: 1};
  } else if (_.isEqual(tile, {row: 0, col: 1})) {
    return {row: 0, col: 2};
  } else if (_.isEqual(tile, {row: 0, col: 2})) {
    return null;
  } else if (_.isEqual(tile, {row: 1, col: 0})) {
    return {row: 1, col: 1};
  } else if (_.isEqual(tile, {row: 1, col: 1})) {
    return {row: 1, col: 2};
  } else if (_.isEqual(tile, {row: 1, col: 2})) {
    return null;
  } else if (_.isEqual(tile, {row: 2, col: 0})) {
    return {row: 2, col: 1};
  } else if (_.isEqual(tile, {row: 2, col: 1})) {
    return {row: 2, col: 2};
  } else if (_.isEqual(tile, {row: 2, col: 2})) {
    return null;
  }
  return null;
};

const topTile = (tile) => {
  if (
    _.isEqual(tile, {row: 0, col: 0}) ||
    _.isEqual(tile, {row: 0, col: 1}) ||
    _.isEqual(tile, {row: 0, col: 2})
  ) {
    return null;
  } else if (_.isEqual(tile, {row: 1, col: 0})) {
    return {row: 0, col: 0};
  } else if (_.isEqual(tile, {row: 1, col: 1})) {
    return {row: 0, col: 1};
  } else if (_.isEqual(tile, {row: 1, col: 2})) {
    return {row: 0, col: 2};
  } else if (_.isEqual(tile, {row: 2, col: 0})) {
    return {row: 1, col: 0};
  } else if (_.isEqual(tile, {row: 2, col: 1})) {
    return {row: 1, col: 1};
  } else if (_.isEqual(tile, {row: 2, col: 2})) {
    return {row: 1, col: 2};
  }
  return null;
};

const bottomTile = (tile) => {
  if (
    _.isEqual(tile, {row: 2, col: 0}) ||
    _.isEqual(tile, {row: 2, col: 1}) ||
    _.isEqual(tile, {row: 2, col: 2})
  ) {
    return null;
  } else if (_.isEqual(tile, {row: 1, col: 0})) {
    return {row: 2, col: 0};
  } else if (_.isEqual(tile, {row: 1, col: 1})) {
    return {row: 2, col: 1};
  } else if (_.isEqual(tile, {row: 1, col: 2})) {
    return {row: 2, col: 2};
  } else if (_.isEqual(tile, {row: 0, col: 0})) {
    return {row: 1, col: 0};
  } else if (_.isEqual(tile, {row: 0, col: 1})) {
    return {row: 1, col: 1};
  } else if (_.isEqual(tile, {row: 0, col: 2})) {
    return {row: 1, col: 2};
  }
};

/**
 * Return the index of the target tile.
 * @param tile
 * @param matrix
 * @returns {null|{col: number, row: number}}
 */
const getblankTile = (tile) => {
  console.log(self.rightTile(tile));
  console.log(self.isBlank(self.rightTile(tile)));
  if (self.isBlank(self.leftTile(tile))) {
    return self.topTile(tile);
  } else if (self.isBlank(self.rightTile(tile))) {
    return self.rightTile(tile);
  } else if (self.isBlank(self.topTile(tile))) {
    return self.topTile(tile);
  } else if (self.isBlank(self.bottomTile(tile))) {
    return self.bottomTile(tile);
  }
  return null;
};

const self = (module.exports = {
  defaultMatrix,
  win,
  getblankTile,
  leftTile,
  rightTile,
  topTile,
  bottomTile,
  isBlank,
});
