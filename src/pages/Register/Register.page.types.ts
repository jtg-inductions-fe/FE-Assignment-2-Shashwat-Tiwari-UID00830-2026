export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    role: 'customer' | 'owner';
}
