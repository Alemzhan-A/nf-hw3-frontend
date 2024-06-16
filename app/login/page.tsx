'use client';

import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-600">Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
