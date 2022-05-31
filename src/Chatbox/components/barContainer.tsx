import React, { forwardRef } from 'react';
import BarModal from './barModal';
import { BarUtils, MessageUtils } from '../hooks';
import type { RefType } from '../typings';

const BarContainer = forwardRef<RefType>((_props, ref) => {
  return (
    <BarUtils.Provider initialState={ref}>
      <MessageUtils.Provider>
        <BarModal />
      </MessageUtils.Provider>
    </BarUtils.Provider>
  );
});

export default BarContainer;
