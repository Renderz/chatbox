import React, { useRef } from 'react';
import { Button } from 'antd';
import type { RefType } from '..';
import BarContainer from '..';

export default () => {
  const barRef = useRef<RefType>(null);

  return (
    <div>
      <Button type="primary" onClick={() => barRef.current?.open()}>
        打开聊天框
      </Button>
      <BarContainer ref={barRef} />
    </div>
  );
};
