import * as bcrypt from 'bcryptjs';

/*
* Al final no se usa el motivo es pq al no poder
* escribir al Json no tiene sentido hacer un log
* que cifre las claves ya q no se pueden crea cuentas
* */

export function hashPassword(plainPassword: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainPassword, salt);
}

export function validatePassword(plainPassword: string, hashedPassword: string): boolean {
  return bcrypt.compareSync(plainPassword, hashedPassword);
}

