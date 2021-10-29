/**
 *
 * SidebarJs
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Sidebar from './Sidebar';

function SidebarJs() {
  return (
    <>
     <Sidebar />
     
    </>
  );
}

SidebarJs.propTypes = {};

export default memo(SidebarJs);
