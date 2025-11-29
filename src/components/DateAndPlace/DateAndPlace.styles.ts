import { createUseStyles } from 'react-jss';

export default createUseStyles({
  dateAndPlaceWrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    color: '#6C0606',
  },

  dateAndPlace: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
  },

  bold: {
    extend: 'text',
    fontWeight: 700,
  },

  rightAlign: {
    width: '100%',
    textAlign: 'right',
  },
});
