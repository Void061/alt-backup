const dev = process.env.NODE_ENV !== 'production';
const {NEXT_PUBLIC_API_URL} = process.env;

export const baseUrlServer = dev ? 'http://localhost:3000/api' : NEXT_PUBLIC_API_URL;