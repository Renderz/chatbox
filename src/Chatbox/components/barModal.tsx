import React from 'react';
import { Modal } from 'antd';
import { BarUtils } from '../hooks';

const BarModal: React.FC = () => {
  const { visible } = BarUtils.useContainer();

  return <Modal visible={visible}>123</Modal>;
};

export default BarModal;
