import type { Ref } from 'react';
import { useImperativeHandle } from 'react';
import { createContainer } from 'unstated-next';
import ModalUtils from './modalUtils';
import type { RefType } from '../typings';

const useRefs = (ref?: Ref<RefType>) => {
  const modalUtils = ModalUtils.useContainer();

  useImperativeHandle(ref, () => ({
    open: () => modalUtils.open(),
    close: () => modalUtils.close(),
  }));
};

export default createContainer(useRefs);
