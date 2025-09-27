import { createUseStyles } from 'react-jss';

export default createUseStyles({
  postScriptum: {
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
    alignItems: 'center',
    textAlign: 'center',
  },

  lightText: {
    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 20,
  },

  boldText: {
    fontSize: 20,
  },
});
