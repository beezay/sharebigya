/**
 *
 * Asynchronously loads the component for TreeMap
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
