import React, { useState, useEffect, useContext, useMemo, useRef } from 'react';

export const ModelContext = React.createContext({});

export const initModel = (dispatcher) => {
  return (namespace, func) => {
    dispatcher.models = {
      ...dispatcher.models,
      [namespace]: func,
    };
  };
};

export class Dispatcher {
  callbacks = {};

  data = {};

  models = {};

  update = (namespace) => {
    (this.callbacks[namespace] || []).forEach((callback) => {
      try {
        const data = this.data[namespace];
        callback(data);
      } catch (e) {
        callback(undefined);
      }
    });
  };
}

export const useModel = (namespace) => {
  const dispatcher = useContext(ModelContext);
  const [state, setState] = useState(() => dispatcher.data[namespace]);

  useEffect(() => {
    const { callbacks } = dispatcher;
    const len = callbacks[namespace]?.length || 0;
    // 使用useModel的地方添加至callbacks 每次更新时执行callbacks数组
    dispatcher.callbacks[namespace] = [
      ...(callbacks[namespace] || []),
      setState,
    ];
    return () => {
      dispatcher.callbacks[namespace].splice(len, 1);
      dispatcher.callbacks[namespace] = [...dispatcher.callbacks[namespace]];
    };
  }, [namespace]);

  return state;
};


export const HookModel = ({ namespace, hook, update }) => {
	const updateRef = useRef(update);

	const data = hook();

	useMemo(() => {
		updateRef.current(data);
	}, []);

	useEffect(() => {
		// 每次更新时触发update 更新所有 namespace的model
		updateRef.current(data);
	});

	return <></>;
};
