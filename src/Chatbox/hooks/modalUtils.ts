import { useState } from 'react';
import { createContainer } from 'unstated-next';
import type { ModalProps } from 'antd';

const useModal = () => {
  /**
   * @description 对话框显隐
   */
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * @description 打开modal
   */
  const open = () => {
    setVisible(true);
  };

  /**
   * @description 关闭modal
   */
  const close = () => {
    setVisible(false);
  };

  const modalProps: ModalProps = {
    visible,
    footer: null,
    onCancel: () => close(),
  };

  return {
    visible,
    modalProps,
    open,
    close,
  };
};

export default createContainer(useModal);
