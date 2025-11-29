import { createUseStyles } from 'react-jss';

export default createUseStyles({
  ideas: {
    position: 'relative',
    justifySelf: 'center',
    marginTop: 60,
    marginLeft: 20,
  },

  info: {
    fontWeight: 700,
    fontSize: 18,
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    color: '#6C0606',
  },

  dance: {
    position: 'absolute',
    zIndex: 10,
    top: -70,
    right: 0,
  },
});
