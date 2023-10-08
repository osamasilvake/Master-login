/**
 * timeout the execution
 * @param delay
 * @returns
 */
export const timeout = (delay: number): Promise<unknown> => new Promise((res) => setTimeout(res, delay));
