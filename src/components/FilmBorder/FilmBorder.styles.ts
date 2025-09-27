import { createUseStyles } from 'react-jss';

export const BLOCK_HEIGHT = 25;
export const BLOCK_GAP = 10;

const url =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E";

export default createUseStyles({
  filmBorder: {
    maxHeight: '100%',
    width: 45,
    display: 'flex',
    flexDirection: 'column',
    gap: BLOCK_GAP,
    padding: [10, 6],
    backgroundColor: '#2c2c2c',
    overflow: 'hidden',
  },

  block: {
    width: 33,
    height: BLOCK_HEIGHT,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
    backgroundImage: `url("${url}")`,
  },
});
