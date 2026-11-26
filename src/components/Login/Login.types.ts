/**
 * This file contains all the types related to login component
 */

import { LoginFormValues } from '@/validations/loginValidations';

export interface LoginProps {
    onLogin: (data: LoginFormValues) => Promise<boolean>;
}
