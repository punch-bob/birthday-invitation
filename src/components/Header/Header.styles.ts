import { createUseStyles } from 'react-jss';

export default createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  number: {
    fontSize: 45,
    color: '#9f0001',
  },

  appeal: {
    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 20,

    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
  },

  invite: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});
