import { UseGuards, applyDecorators } from '@nestjs/common';
import { ValidRoles } from '../interfaces';
import { RoleProtected } from './role-protected.decorator';
import { AuthGuard } from '@nestjs/passport';
import { UserRoleGuard } from '../guards/user-role/user-role.guard';

export function Auth(...roles: ValidRoles[]) {
  return applyDecorators(
    //! Cuando estamos dentro de un archivo ".decorator" no es necesario utilizar el @ para los decoradores.
    RoleProtected(...roles),
    UseGuards(AuthGuard(), UserRoleGuard),
  );
}
