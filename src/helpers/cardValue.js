import { VALUES } from '../constants';

import isNumeric from './isNumeric';

const nonNumeric = str => (str === VALUES.ACE ? 1 : 10);

export default str => (isNumeric(str) ? parseInt(str, 10) : nonNumeric(str));
