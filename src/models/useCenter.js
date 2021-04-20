import { useState } from 'react';

const useCenter = () => {
	const [count, setCount] = useState(1);
	const inc = () => {
		setCount((v) => v + 1);
	};
	const dec = () => {
		setCount((v) => v - 1);
	};
	return [count, inc, dec];
};

export default useCenter;
