/**
 *
 * Asynchronously loads the component for TopBroker
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
