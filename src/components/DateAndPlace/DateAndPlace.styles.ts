import { createUseStyles } from 'react-jss';

export default createUseStyles({
  dateAndPlace: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },

  date: {
    display: 'flex',
    gap: 25,
  },

  place: {
    display: 'flex',
    gap: 15,
  },

  paragraphTitle: {
    fontSize: 15,
  },

  paragraphInfo: {
    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 17,
  },
});
