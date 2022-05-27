import React, { useRef } from 'react';
import { Button } from 'antd';
import type { Inner } from '..';
import BarContainer from '..';

export default () => {
  const barRef = useRef<Inner>(null);

  return (
    <div>
      <Button type="primary" onClick={() => barRef.current?.open()}>
        测试
      </Button>
      <BarContainer ref={barRef} />
    </div>
  );
};
