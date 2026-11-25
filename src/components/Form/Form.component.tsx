/**
 * This file contains the stylings of the reusable Form component.
 */
import { FormProps } from '@/components/Form/Form.types';
import {
    FooterText,
    FormCard,
    PageRoot,
    Subtitle,
    Title,
} from '@/components/Form/styles';

export const FormComponent = ({
    title,
    subtitle,
    children,
    footer,
}: FormProps) => (
    <PageRoot>
        <FormCard>
            <Title variant="h3">{title}</Title>
            <Subtitle variant="body1">{subtitle}</Subtitle>
            {children}
            {footer && <FooterText variant="body2">{footer}</FooterText>}
        </FormCard>
    </PageRoot>
);
