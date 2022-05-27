import type { Ref } from 'react';
import { useState, useImperativeHandle } from 'react';
import { createContainer } from 'unstated-next';
import type { Inner } from '../typings';

export default createContainer((ref?: Ref<Inner>) => {
  const [visible, setVisible] = useState<boolean>(false);

  const open = (id?: string) => {
    console.log(id);
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return {
    visible,
    open,
    close,
  };
});
