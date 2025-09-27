import { createUseStyles } from 'react-jss';

const url =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E";

export default createUseStyles({
  countdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
  },

  bannerWrapper: {
    position: 'relative',
    minHeight: 60,
  },

  banner: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    opacity: 1,
    height: 64,
    visibility: 'visible',
    transition: 'all 0.5s ease-in-out',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    color: '#D9D9D9',
    backgroundColor: '#9F0001',
    backgroundImage: `url("${url}")`,
    borderRadius: 25,
  },

  secretBanner: {
    position: 'absolute',
    width: '100%',
    minHeight: 200,
    top: 0,
    left: 0,
    padding: 20,
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
    border: [3, 'solid', '#9F0001'],
    opacity: 0,
    visibility: 'hidden',
    borderRadius: 25,
    transition: 'all 0.5s ease-in-out',
  },

  timerFinished: {
    '&$banner': {
      visibility: 'hidden',
      opacity: 0,
    },

    '&$secretBanner': {
      opacity: 1,
      visibility: 'visible',
    },
  },

  timerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    textAlign: 'center',
  },

  timerTitle: {
    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 20,
  },

  timer: {},
});
