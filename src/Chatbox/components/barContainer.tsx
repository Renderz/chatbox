import React, { forwardRef } from 'react';
import BarModal from './barModal';
import { BarUtils } from '../hooks';
import type { RefType } from '../typings';

const BarContainer = forwardRef<RefType>((_props, ref) => {
  return (
    <BarUtils.Provider initialState={ref}>
      <BarModal />
    </BarUtils.Provider>
  );
});

export default BarContainer;
