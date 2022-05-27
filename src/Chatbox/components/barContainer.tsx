import React, { forwardRef } from 'react';
import BarModal from './barModal';
import { BarUtils } from '../hooks';
import type { Inner } from '../typings';

const BarContainer = forwardRef<Inner>((_props, ref) => {
  return (
    <BarUtils.Provider initialState={ref}>
      <BarModal />
    </BarUtils.Provider>
  );
});

export default BarContainer;
