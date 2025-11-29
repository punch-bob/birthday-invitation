import { createUseStyles } from 'react-jss';

export default createUseStyles({
  lists: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },

  programList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: 16,
    fontWeight: 840,
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    color: '#6C0606',
  },

  time: {
    fontSize: 19,
    fontWeight: 840,
    color: '#6C0606',
  },

  floatLeft: {
    float: 'left',
    margin: [10, 10, 0, 0],
  },

  item: {
    width: 'fit-content',
  },

  itemText: {
    fontSize: 17,
    fontWeight: 500,
    color: '#6C0606',
  },

  programListWrapper: {
    width: 280,
  },

  announcementInner: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  cards: {
    position: 'absolute',
    top: 50,
    left: 265,
    transform: 'rotate(72deg) scaleX(-1)',
  },

  guitar: {
    top: 125,
    left: 235,
    position: 'absolute',
  },

  accordion: {
    position: 'absolute',
    top: 170,
    left: 150,
    transform: 'rotate(6deg)',
  },

  fortuneWheel: {
    position: 'absolute',
    top: 30,
    left: 230,
    transform: 'rotate(-12deg)',
  },

  cake: {
    position: 'absolute',
    top: 105,
    left: 155,
    transform: 'rotate(14deg)',
  },

  fortuneWheelAnnouncement: {
    position: 'absolute',
    left: 15,
    width: 220,
    display: 'flex',
  },
});
