import { config } from 'dotenv';

config();
const variables: Record<string, any> = { ...process.env };

export default variables;