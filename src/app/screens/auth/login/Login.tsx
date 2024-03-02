import { useState } from 'react';
import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

import { login } from '@/slices/auth/Auth.slice';
import { AppDispatch } from '@/store';

const Login = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setUsername('');
		setPassword('');
		try {
			await dispatch(login({ username, password }));
		} catch (error) {
			console.error('Login failed:', error);
		}
	};

	return (
		<div className="bg-gradient-to-t from-white to-indigo-400 pt-10 pb-12">
			<div className="py-5 px-10 mx-auto bg-white rounded-lg shadow-sm w-80 sm:w-96">
				<h2 className="my-10 text-center text-3xl font-bold text-gray-900">Login</h2>
				<form>
					<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
						Username
					</label>
					<input
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						id="username"
						name="username"
						type="text"
						placeholder="Type your email"
						className="mt-2 w-full rounded-md border border-purple-300 py-2 px-2 shadow-sm placeholder:text-gray-400 outline-none"
					/>

					<label htmlFor="password" className="block pt-5 text-sm font-medium text-gray-900">
						Password
					</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						id="password"
						name="password"
						type="password"
						placeholder="Type your password"
						required
						className="mt-2 w-full rounded-md border border-purple-300 py-2 px-2 shadow-sm placeholder:text-gray-400 outline-none"
					/>

					<div className="text-sm mt-3 text-end">
						<a href="/password" className="hover:text-indigo-300">
							Forgot password?
						</a>
					</div>

					<div className="pt-5">
						<button
							onClick={handleLogin}
							type="submit"
							disabled={!username.trim() || !password.trim()}
							className="text-center w-full rounded-3xl bg-indigo-400 px-3 py-2.5 font-semibold text-white hover:bg-indigo-500">
							Login
						</button>
					</div>
				</form>

				<div>
					<p className="mt-14 text-center text-sm text-gray-500">Our sign up using</p>
					<div className="flex justify-center gap-2 pt-4">
						<a href="/">
							<BsFacebook className="w-8 h-9 text-blue-800" />
						</a>
						<a href="/">
							<AiFillTwitterCircle className="w-9 h-9 text-blue-400" />
						</a>
						<a href="/">
							<AiFillGoogleCircle className="w-9 h-9 text-red-500" />
						</a>
					</div>
					<div className="text-center pt-16">
						<p className="text-gray-500 text-sm">Our sign up using</p>
						<button className="pt-4 text-gray-500 text-sm">Sign up</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
