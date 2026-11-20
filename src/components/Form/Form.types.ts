/**
 * This file contains the type definitions of the FormComponent.
 */

import { ReactNode } from 'react';

export interface FormProps {
    title: string;
    subtitle: string;
    children: ReactNode;
    footer?: ReactNode;
}
