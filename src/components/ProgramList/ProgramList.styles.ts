import { createUseStyles } from 'react-jss';

export default createUseStyles({
  programList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
  },

  mainList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },

  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },

  mainCircle: {
    extend: 'circle',
    color: '#9F0001',
    fontFamily: 'Rubik Dirt',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 20,
    border: [3, 'solid', '#9F0001'],
    padding: [3, 9],
  },

  secondaryCircle: {
    minWidth: 25,
    height: 25,
    extend: 'circle',
    border: [1, 'solid', '#2c2c2c'],
  },

  listItem: {
    display: 'flex',
    gap: 15,
    alignItems: 'center',

    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 15,
  },

  secondaryItem: {
    extend: 'listItem',
    marginLeft: 20,
    whiteSpace: 'pre-wrap',
  },
});
