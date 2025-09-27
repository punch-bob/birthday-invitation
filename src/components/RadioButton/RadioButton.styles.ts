import { createUseStyles } from 'react-jss';

export default createUseStyles({
  input: {
    appearance: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
    minWidth: 18,
    minHeight: 18,
    outline: 'none',
    transition: '0.1s all ease-in-out',
    margin: 0,
    border: [3, 'solid', '#2c2c2c'],

    '&:checked': {
      border: [5, 'solid', '#9F0001'],
    },
  },

  label: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingBlock: 5,
  },

  isDisabled: {
    cursor: 'default',
  },

  content: {
    fontFamily: 'Sansation',
    fontWeight: 300,
    fontStyle: 'normal',
    fontSize: 15,
    marginLeft: 15,
  },
});
