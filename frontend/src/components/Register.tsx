import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // 实际注册逻辑会在这里处理
    console.log('注册:', username, password);
    alert('注册成功: 用户名: ' + username + ', 密码: ' + password);
  };

  return (
    <div>
      <h2>注册</h2>
      <form>
        <div>
          <label htmlFor="username">用户名:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">密码:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>
          注册
        </button>
      </form>
    </div>
  );
};

export default Register;
