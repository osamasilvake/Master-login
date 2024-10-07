// Error404.test.tsx
import '@testing-library/jest-dom'; // Import to extend Vitest with jest-dom matchers like toHaveTextContent

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Error404 from './Error404'; // Adjust the import path as necessary

describe('Error404 Component', () => {
	it('renders the Error 404 message', () => {
		render(<Error404 />);

		// Check if the heading is in the document
		const heading = screen.getByRole('heading', { level: 1 });
		expect(heading).toHaveTextContent('Error 404');
	});
});
