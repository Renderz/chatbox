import React, { useRef } from 'react';
import { Button } from 'antd';
import type { RefType } from '..';
import ChatBar from '..';

export default () => {
  const barRef = useRef<RefType>(null);

  return (
    <div>
      <Button type="primary" onClick={() => barRef.current?.open()}>
        打开聊天框
      </Button>
      <ChatBar ref={barRef} users={[{ id: 'a1', name: '江亦峰' }]} />
    </div>
  );
};
