import { RegisterFormValues } from '@/validations/registerValidations';

export interface RegisterProps {
    onRegister: (data: RegisterFormValues) => Promise<boolean>;
}
