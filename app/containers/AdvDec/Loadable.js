/**
 *
 * Asynchronously loads the component for AdvDec
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
