import { useModel } from './useModel';

const Content = () => {
  const [user, setUser] = useModel('useUserInfo');
	const [count, inc, dec] = useModel('useCenter');
  return (
    <>
      <div>
        姓名:{user?.name}
        年龄:{user?.age}
				count:{count}
			</div>
      <button onClick={() => setUser((v) => ({ ...v, name: 'admin' }))}>
        设置用户名
      </button>
      <button onClick={() => setUser((v) => ({ ...v, age: v.age - 1 }))}>
        修改年龄
      </button>
			<button
				onClick={() => {
					inc();
				}}
			>
				inc
			</button>
			<button
				onClick={() => {
					dec();
				}}
			>
				dec
			</button>
    </>
  );
};

export default Content;
