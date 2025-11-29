import { createUseStyles } from 'react-jss';

export default createUseStyles({
  countdown: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    color: '#680D0D',
    lineHeight: '24px',
  },

  title: {
    fontSize: 20,
    fontWeight: 1000,
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    color: '#680D0D',
    lineHeight: '24px',
  },
});
