import { useEffect, useState, useMemo } from 'react';
import { createContainer } from 'unstated-next';
import PropsUtils from './propsUtils';
import { isEmptyArray } from '../utils';

const useUser = () => {
  const props = PropsUtils.useContainer();

  const [activeId, setActiveId] = useState<string>();

  const activeUser = useMemo(
    () => props?.users?.find((user) => user.id === activeId),
    [activeId, props?.users],
  );

  useEffect(() => {
    // 初始化
    if (!isEmptyArray(props?.users)) {
      setActiveId(props?.users?.[0].id);
    }
  }, [props?.users]);

  return {
    activeId,
    activeUser,
    setActiveId,
  };
};

export default createContainer(useUser);
