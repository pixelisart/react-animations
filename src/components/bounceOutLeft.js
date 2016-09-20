import { translate3d } from '../utils';

const bounceOutLeft = {
  '20%': {
    opacity: 1,
    transform: translate3d('20px', 0, 0),
  },
  to: {
    opacity: 0,
    transform: translate3d('-2000px', 0, 0),
  },
};

export default bounceOutLeft;
