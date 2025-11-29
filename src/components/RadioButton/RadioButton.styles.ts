import { createUseStyles } from 'react-jss';

export default createUseStyles({
  input: {
    appearance: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
    minWidth: 20,
    minHeight: 20,
    outline: 'none',
    transition: '0.1s all ease-in-out',
    margin: 0,
    border: [4, 'solid', '#680D0D'],

    '&:checked': {
      border: [10, 'solid', '#680D0D'],
    },
  },

  label: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingBlock: 2,
  },

  isDisabled: {
    cursor: 'default',
  },

  content: {
    fontWeight: 500,
    fontSize: 14,
    color: '#6C0606',
    marginLeft: 12,
  },
});
