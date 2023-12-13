import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_Password : process.env.DEFAULT_PASSWORD,
  BECRYPT_SALT_ROUNDS : process.env.BECRYPT_SALT_ROUNDS
};
