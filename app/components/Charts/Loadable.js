/**
 *
 * Asynchronously loads the component for Charts
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
