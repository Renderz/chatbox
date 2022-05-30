import type { Ref } from 'react';
import { useState, useImperativeHandle } from 'react';
import { createContainer } from 'unstated-next';
import type { ModalProps } from 'antd';
import type { RefType } from '../typings';

export default createContainer((ref?: Ref<RefType>) => {
  /**
   * @description 对话框显隐
   */
  const [visible, setVisible] = useState<boolean>(false);

  /**
   * @description 当前活动键值
   */
  const [activeKey, setActiveKey] = useState<string>();

  /**
   * @description 打开对话框
   * @param id 用户id
   */
  const open = (id?: string) => {
    console.log(id);
    setVisible(true);
  };

  /**
   * @description 关闭对话框
   */
  const close = () => {
    setVisible(false);
  };

  /**
   * @description 获取列表内用户未读信息条数, 若未提供则返回总条数
   * @param ids 用户id列表
   */
  const getUnReadAmount = (ids?: string[]) => {
    console.log('amount', ids, []);
  };

  /**
   * @description 清除列表内用户聊天记录，若未提供则清除所有记录
   * @param ids
   */
  const clear = (ids?: string[]) => {
    console.log('clear', ids, []);
  };

  /**
   * @description 发送信息
   * @param id 用户id
   * @param msg 消息内容
   */
  const send = (id: string, msg: string) => {
    console.log(id, msg);
  };

  /**
   * @description 可被外部ref调用的方法
   */
  useImperativeHandle(ref, () => ({
    open,
    close,
    send,
    getUnReadAmount,
    clear,
  }));

  /**
   * @description 点击用户区域
   * @param id
   */
  const handleClickItem = (id: string) => {
    setActiveKey(id);
  };

  const modalProps: ModalProps = {
    visible,
    footer: null,
    onCancel: () => close(),
  };

  return {
    activeKey,
    modalProps,
    visible,
    open,
    close,
    handleClickItem,
  };
});
