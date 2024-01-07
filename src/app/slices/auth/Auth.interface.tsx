export interface AuthState {
	user: User | null;
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	loader: boolean;
}

interface User {
	sub: string;
	name: string;
	iat: number;
}
