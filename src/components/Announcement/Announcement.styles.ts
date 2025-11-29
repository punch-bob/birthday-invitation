import { createUseStyles } from 'react-jss';

const url = '/birthday-invitation/src/components/assets/img/announcement.png';

export default createUseStyles({
  announcement: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundImage: `url("${url}")`,
    backgroundPosition: 'top center',
    backgroundSize: 'contain',
  },
});
