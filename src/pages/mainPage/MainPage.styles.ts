import { createUseStyles } from 'react-jss';

export default createUseStyles({
  mainPage: {
    minHeight: '100%',
    maxWidth: 400,
    position: 'relative',
    margin: 'auto',
    top: 0,
    left: 0,
  },

  mainPageInner: {
    paddingBlock: 96,

    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
});
