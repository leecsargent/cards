import { LABELS } from '../constants';

import { isNumeric } from './isNumeric';

const nonNumeric = str => LABELS[str];

export default str => (isNumeric(str) ? parseInt(str, 10) : nonNumeric(str));
