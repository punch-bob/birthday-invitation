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

  leftBorder: {
    maxHeight: '100%',
    height: '100%',
    overflow: 'hidden',
    width: 'fit-content',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  rightBorder: {
    maxHeight: '100%',
    height: '100%',
    overflow: 'hidden',
    width: 'fit-content',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  mainPageInner: {
    marginInline: 63,
    paddingBlock: 50,

    display: 'flex',
    flexDirection: 'column',
    gap: 50,
  },
});
