import { createUseStyles } from 'react-jss';

export default createUseStyles({
  postScriptum: {
    alignSelf: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    color: '#680D0D',
    lineHeight: '24px',
  },

  money: {
    position: 'absolute',
    top: 155,
    left: 10,
    transform: 'rotate(6deg)',
  },
});
