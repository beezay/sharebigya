/**
 *
 * Asynchronously loads the component for HeatMap
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
