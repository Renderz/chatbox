import { useState, useEffect } from 'react';
import type { TextAreaProps } from 'antd/es/input';
import { createContainer } from 'unstated-next';
import { BarUtils } from '../hooks';

const useMessage = () => {
  const { activeKey } = BarUtils.useContainer();

  const [value, setValue] = useState<string>();

  /**
   * @description 发送信息
   * @param id 用户id
   * @param msg 消息内容
   */
  const send = (id: string, msg: string) => {
    console.log(id, msg);
  };

  const textProps: TextAreaProps = {
    value,
    onChange: (e) => setValue(e.target.value),
    onPressEnter: (e) => {
      e.preventDefault();
      const isNewLine = e.ctrlKey || e.metaKey;

      if (isNewLine) {
        setValue(`${value || ''}\n`);
      } else if (activeKey !== undefined && value?.trim() !== undefined && value.trim() !== '') {
        send(activeKey, value);
      }
    },
    placeholder: 'Enter发送',
  };

  useEffect(() => {
    setValue(undefined);
  }, [activeKey]);

  return {
    send,
    textProps,
  };
};

export default createContainer(useMessage);
