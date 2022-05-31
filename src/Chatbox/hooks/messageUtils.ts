import { useState, useEffect } from 'react';
import type { TextAreaProps } from 'antd/es/input';
import { createContainer } from 'unstated-next';
import { BarUtils } from '../hooks';

const useMessage = () => {
  const { activeKey } = BarUtils.useContainer();

  const [value, setValue] = useState<string>();

  /**
   * @description 清空输入框
   */
  const reset = () => {
    setValue(undefined);
  };

  /**
   * @description 发送信息(等待消息返回后清空)
   * @param id 用户id
   * @param msg 消息内容
   */
  const send = async (id: string, msg: string) => {
    // const response = await fetch
    // if(response.success)
    reset();
    console.log(id, msg);
  };

  /**
   * @description TextArea组件props
   */
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

  /**
   * @description activeKey切换清空输入框
   */
  useEffect(() => {
    reset();
  }, [activeKey]);

  return {
    send,
    value,
    textProps,
  };
};

export default createContainer(useMessage);
