import { createUseStyles } from 'react-jss';

export default createUseStyles({
  dressCode: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 15,
  },

  icon: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    border: [3, 'solid', '#9F0001'],
    marginBottom: 5,
  },
});
