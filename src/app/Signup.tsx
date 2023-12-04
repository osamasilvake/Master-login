import loginimage from './loginimage.png';
const Signup = () => (
	<div className="flex flex-col justify-center items-center pt-20 md:items-stretch  md:flex-row">
		<div className="bg-white flex w-96 py-10">
			<form className="flex flex-col py-12 mx-auto">
				<h2 className="text-center pb-5 text-3xl">Sign up</h2>
				<p className="text-center pb-6">Enter your credentials to signup</p>
				<input type="text" placeholder="username" className="rounded-md outline-none px-2 py-1 bg-slate-100 w-64" />
				<input
					type="password"
					placeholder="password"
					className="mt-4 w-64 rounded-md outline-none px-2 border-0 py-1 bg-slate-100"
				/>
				<button className="bg-black text-white py-1 mt-4 rounded-md">Signup</button>
				<p className="text-center pt-7 text-sm">
					Not registred?
					<a href="" className="text-blue-600">
						Create any account
					</a>
				</p>
			</form>
		</div>
		<div className="w-96">
			<img src={loginimage} alt={loginimage} className="h-full" />
		</div>
	</div>
);
export default Signup;
