import type { Ref } from 'react';
import { useState, useImperativeHandle } from 'react';
import { createContainer } from 'unstated-next';
import type { ModalProps } from 'antd';
import type { RefType } from '../typings';

export default createContainer((ref?: Ref<RefType>) => {
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

  const modalProps: ModalProps = {
    visible,
    footer: null,
    onCancel: () => close(),
  };

  return {
    modalProps,
    visible,
    open,
    close,
  };
});
