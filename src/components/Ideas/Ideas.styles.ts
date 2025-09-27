import { createUseStyles } from 'react-jss';

export default createUseStyles({
  ideas: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },

  info: {
    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 15,
    marginBottom: 10,
  },

  contact: {
    fontSize: 15,
    textAlign: 'center',
  },
});
