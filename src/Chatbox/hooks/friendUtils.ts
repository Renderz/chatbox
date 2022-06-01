import { useState, useEffect, useMemo } from 'react';
import { createContainer } from 'unstated-next';
import UserUtils from './userUtils';
import type { Friend } from '../typings';

const useFriend = () => {
  const userUtils = UserUtils.useContainer();

  const [friends, setFriends] = useState<Friend[]>();

  const [activeId, setActiveId] = useState<string>();

  const activeFriend = useMemo(
    () => friends?.find((friend) => friend.id === activeId),
    [activeId, friends],
  );

  useEffect(() => {
    if (userUtils.activeId !== undefined) {
      setFriends(
        Array.from(Array(100)).map((r, i) => ({
          id: String(i),
          name: `用户${i}`,
        })),
      );
      setActiveId('1');
    } else {
      setFriends(undefined);
    }
  }, [userUtils.activeId]);

  return {
    friends,
    activeFriend,
    activeId,
    setActiveId,
  };
};

export default createContainer(useFriend);
