import React, { forwardRef } from 'react';
import BarModal from './components/barModal';
import { PropsUtils, RefsUtils, ModalUtils, MessageUtils, UserUtils, FriendUtils } from './hooks';
import type { RefType, PropsType } from './typings';

const BarContainer = forwardRef<RefType, PropsType>((props, ref) => {
  return (
    <PropsUtils.Provider initialState={props}>
      <ModalUtils.Provider>
        <UserUtils.Provider>
          <FriendUtils.Provider>
            <MessageUtils.Provider>
              <RefsUtils.Provider initialState={ref}>
                <BarModal />
              </RefsUtils.Provider>
            </MessageUtils.Provider>
          </FriendUtils.Provider>
        </UserUtils.Provider>
      </ModalUtils.Provider>
    </PropsUtils.Provider>
  );
});

export * from './typings';

export default BarContainer;
