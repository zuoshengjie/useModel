import { useState } from 'react';

const useUserInfo = () => {
  const [user, setUser] = useState({ name: '里斯', age: 15 });

  return [user, setUser];
};

export default useUserInfo;
