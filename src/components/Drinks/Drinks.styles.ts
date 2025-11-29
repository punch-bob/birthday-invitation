import { createUseStyles } from 'react-jss';

export default createUseStyles({
  drinks: {
    alignSelf: 'center',
  },

  drinksInner: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: 18,
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    color: '#6C0606',
    fontWeight: 840,
  },

  list1: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  },

  list2: {
    display: 'flex',
    flexDirection: 'column',
  },

  list2Wrapper: {
    display: 'flex',
  },

  button: {
    alignSelf: 'center',
    width: 174,
    fontWeight: 840,
    fontStyle: 'normal',
    fontSize: 16,
    color: '#990000',
    paddingInline: 10,

    border: [3, 'solid', '#990000'],
    backgroundColor: 'transparent',
    borderRadius: 15,
  },

  disabled: {
    color: '#262424',
    borderColor: '#262424',
  },
});
