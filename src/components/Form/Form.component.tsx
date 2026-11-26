/**
 * This file contains the stylings of the reusable Form component.
 */
import {
    FooterText,
    FormCard,
    PageRoot,
    Subtitle,
    Title,
} from '@/components/Form/Form.styles';
import { FormProps } from '@/components/Form/Form.types';

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
