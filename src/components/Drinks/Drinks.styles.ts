import { createUseStyles } from 'react-jss';

const url =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E";

export default createUseStyles({
  drinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
  },

  info: {
    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 15,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  button: {
    alignSelf: 'center',
    width: 'fit-content',
    fontFamily: 'Rubik Dirt',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: 20,
    color: '#9F0001',
    paddingInline: 10,

    border: [3, 'solid', '#9F0001'],
    borderRadius: 15,
    backgroundColor: '#D9D9D9',
    backgroundImage: `url("${url}")`,
  },

  disabled: {
    color: '#505f79',
    borderColor: '#505f79',
  },
});
