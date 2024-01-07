import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return 'I came from the Signup.tsx loader function!';
};

export const Component = () => {
	const data = useLoaderData() as string;

	return (
		<div>
			<h2>Signup</h2>
			<p>{data}</p>
		</div>
	);
};

Component.displayName = 'SignupPage';
