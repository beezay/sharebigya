/**
 *
 * Asynchronously loads the component for Screener
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
