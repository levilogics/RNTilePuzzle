import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import * as GameEngine from '../lib/GameEngine';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('Tile 0,0 must not have a blank tile around.', () => {
  expect(
    GameEngine.getblankTile({row: 0, col: 0}, GameEngine.defaultMatrix),
  ).toBe(null);
});

test('Tile 2, 1 should have blank tile on its right at 2,2.', () => {
  expect(
    GameEngine.getblankTile({row: 2, col: 1}, GameEngine.defaultMatrix),
  ).toStrictEqual({
    row: 2,
    col: 2,
  });
});

test('Tile 2,2 should be blank', () => {
  expect(GameEngine.isBlank({row: 2, col: 2}, GameEngine.defaultMatrix)).toBe(
    true,
  );
});

test('Tile 2,1 is not blank', () => {
  expect(GameEngine.isBlank({row: 2, col: 1}, GameEngine.defaultMatrix)).toBe(
    false,
  );
});

test('Top of tile 0,0 is null.', () => {
  expect(GameEngine.topTile({row: 0, col: 0})).toBe(null);
});

test('Top of tile 0,1 is null.', () => {
  expect(GameEngine.topTile({row: 0, col: 1})).toBe(null);
});

test('Top of tile 0,2 is null.', () => {
  expect(GameEngine.topTile({row: 0, col: 2})).toBe(null);
});

test('Top of tile 1,0 is 0,0.', () => {
  expect(GameEngine.topTile({row: 1, col: 0})).toStrictEqual({
    row: 0,
    col: 0,
  });
});

test('Top of tile 1,1 is 0,1.', () => {
  expect(GameEngine.topTile({row: 1, col: 1})).toStrictEqual({
    row: 0,
    col: 1,
  });
});

test('Top of tile 1,2 is 0,2.', () => {
  expect(GameEngine.topTile({row: 1, col: 2})).toStrictEqual({
    row: 0,
    col: 2,
  });
});

test('Top of tile 2,0 is 1,0.', () => {
  expect(GameEngine.topTile({row: 2, col: 0})).toStrictEqual({
    row: 1,
    col: 0,
  });
});

test('Top of tile 2,1 is 1,1.', () => {
  expect(GameEngine.topTile({row: 2, col: 1})).toStrictEqual({
    row: 1,
    col: 1,
  });
});

test('Top of tile 2,2 is 1,2.', () => {
  expect(GameEngine.topTile({row: 2, col: 2})).toStrictEqual({
    row: 1,
    col: 2,
  });
});

//
// test('Left most tile of 0,0 must be null', () => {
//   expect(GameEngine.leftTile({row: 0, col: 0}, GameEngine.defaultMatrix)).toBe(
//     null,
//   );
// });
//
// const tile = {row: 0, col: 1};
// test('Right most tile of 0,0 must be null', () => {
//   expect(GameEngine.leftTile({row: 0, col: 0}, GameEngine.defaultMatrix)).toBe(
//     tile,
//   );
// });
