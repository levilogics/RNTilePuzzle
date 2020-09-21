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
  if (+tile.col - 1 >= 0) {
    return {
      ...tile,
      col: +tile.col - 1,
    };
  } else {
    return null;
  }
};

const rightTile = (tile) => {
  if (+tile.col + 1 <= 2) {
    return {
      ...tile,
      col: tile.col + 1,
    };
  } else {
    return null;
  }
};

const topTile = (tile) => {
  if (+tile.row - 1 >= 0) {
    return {
      ...tile,
      row: tile.row - 1,
    };
  } else {
    return null;
  }
};

const bottomTile = (tile) => {
  if (+tile.row + 1 <= 2) {
    return {
      ...tile,
      row: tile.row + 1,
    };
  } else {
    return null;
  }
};

const getBlankTile = (tile, matrix) => {
  if (self.isBlank(self.leftTile(tile), matrix)) {
    return self.leftTile(tile);
  } else if (self.isBlank(self.rightTile(tile), matrix)) {
    return self.rightTile(tile);
  } else if (self.isBlank(self.topTile(tile), matrix)) {
    return self.topTile(tile);
  } else if (self.isBlank(self.bottomTile(tile), matrix)) {
    return self.bottomTile(tile);
  }
  return null;
};

const getContent = (tile, matrix) => {
  return _.get(matrix, [tile.row, tile.col]);
};

const moveTile = (from, target) => {};

const self = (module.exports = {
  defaultMatrix,
  win,
  getBlankTile,
  leftTile,
  rightTile,
  topTile,
  bottomTile,
  isBlank,
  getContent,
  moveTile,
});
