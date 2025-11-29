import { createUseStyles } from 'react-jss';

export default createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    gap: 30,
    fontFamily: 'KyivType Titling',
  },

  text: {
    fontSize: 24,
    fontWeight: 350,
    lineHeight: '100%',
    color: '#262424',
    '-webkit-text-stroke': '1px #680D0D',
  },

  rotate: {
    transform: 'rotate(-20deg)',
  },

  search: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Rubik Wet Paint',
    color: '#990000',
  },

  middleText: {
    fontSize: 30,
    whiteSpace: 'pre-wrap',
  },

  smallText: {
    fontSize: 16,
    textAlign: 'end',
  },

  bigText: {
    fontSize: 45,
    whiteSpace: 'nowrap',
  },

  searchInner: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  innerRight: {
    position: 'absolute',
    top: 0,
    left: 150,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
