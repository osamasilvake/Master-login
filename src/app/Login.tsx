import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const Login = () => (
	<div className="py-6 mt-10 mb-10 mx-auto w-96 bg-white rounded-lg px-10">
		<h2 className="my-10 text-center text-3xl font-bold  text-gray-900">Login</h2>
		<form>
			<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
				Username
			</label>
			<input
				id="email"
				name="email"
				type="email"
				placeholder="Type your email"
				className="mt-2 w-full rounded-md border border-purple-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
			/>

			<label htmlFor="password" className="block pt-5 text-sm font-medium text-gray-900">
				Password
			</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="Type your password"
				required
				className="mt-2 w-full rounded-md border border-purple-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400"
			/>

			<div className="text-sm mt-3 text-end">
				<a href="#" className="hover:text-indigo-300">
					Forgot password?
				</a>
			</div>

			<div className="pt-5">
				<button
					type="submit"
					className="text-center w-full rounded-3xl bg-indigo-400 px-3 py-2.5 font-semibold text-white hover:bg-indigo-500">
					Login
				</button>
			</div>
		</form>

		<p className="mt-14 text-center text-sm text-gray-500">Our sign up using</p>
		<div className="flex justify-center gap-2 pt-4">
			<a href="">
				<BsFacebook className="w-8 h-9 text-blue-800" />
			</a>
			<a href="">
				<AiFillTwitterCircle className="w-9 h-9 text-blue-400" />
			</a>
			<a href="">
				<AiFillGoogleCircle className="w-9 h-9 text-red-500" />
			</a>
		</div>
		<div className="text-center pt-16">
			<p className="text-gray-500 text-sm">Our sign up using</p>
			<button className="pt-4 text-gray-500 text-sm">Sign up</button>
		</div>
	</div>
);
export default Login;
