import jwt from 'jsonwebtoken';

export function generateJWT(payload: object): string {
  return jwt.sign(payload, process.env.JWT_SECRET || '', {
    expiresIn: '1h',
  });
}
