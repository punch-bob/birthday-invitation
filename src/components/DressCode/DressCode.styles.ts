import { createUseStyles } from 'react-jss';

export default createUseStyles({
  dressCode: {
    position: 'relative',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignSelf: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
    whiteSpace: 'pre-wrap',
    color: '#6C0606',
  },

  smallText: {
    extend: 'text',
    fontSize: 18,
  },

  wrapper: {
    marginBlock: 30,
    position: 'relative',
  },

  gentleman: {
    position: 'absolute',
    top: -30,
    right: 0,
  },

  lady: {
    position: 'absolute',
    top: -30,
    left: -20,
  },

  ladyAnnouncement: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  manyPeoples: {
    display: 'flex',
    alignItems: 'end',
  },

  police: {
    position: 'absolute',
    top: 20,
    right: 0,
    transform: 'rotate(9deg)',
  },

  policeText: {
    position: 'absolute',
    top: 50,
    left: 10,
    width: 220,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 840,
    whiteSpace: 'pre-wrap',
    color: '#6C0606',
  },
});
