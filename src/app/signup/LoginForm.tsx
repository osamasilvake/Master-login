import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const LoginForm = () => (
	<div className="flex justify-center items-center px-3 pt-16 pb-12 flex-col md:flex-row md:items-stretch">
		<div className="bg-white w-96  px-6 py-10 shadow-2xl rounded-l-lg">
			<h1 className="text-center pb-9 mt-2 text-3xl font-semibold">Login</h1>
			<form className="flex flex-col">
				<div className="flex justify-center gap-2 mb-8 mt-5">
					<a href="">
						<BsFacebook className="w-8 h-9 text-blue-900" />
					</a>
					<a href="">
						<AiFillTwitterCircle className="w-10 h-9 text-black" />
					</a>
				</div>
				<p className="text-center mb-4 mt-4 text-gray-500">our use your account</p>
				<input type="email" placeholder="Email" className="py-3 px-2 bg-slate-200" />
				<input type="password" placeholder="Password" className="mt-3 py-3 px-2 bg-slate-200" />
				<a href="" className="text-center py-5 text-gray-500">
					Forget your password?
				</a>
				<div className="flex justify-center">
					<button className="bg-custom-r py-2 rounded-3xl px-12 text-gray-50 hover:bg-indigo-400">Login</button>
				</div>
			</form>
		</div>
		<div className="bg-custom-red text-center  px-9 pt-10 pb-14 w-96 flex flex-col justify-center rounded-l-lg md:rounded-r-lg h-96 md:h-auto">
			<h1 className="mb-6 text-4xl text-white font-semibold">Login Form with Jsx</h1>
			<p className="text-white">
				This login form is created using pure HTML and CSS. For social icons, React-icons is used.
			</p>
		</div>
	</div>
);
export default LoginForm;
