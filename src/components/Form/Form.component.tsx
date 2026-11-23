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

const FormComponent = ({ title, subtitle, children, footer }: FormProps) => (
    <PageRoot>
        <FormCard>
            <Title variant="h3">{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
            {footer && <FooterText>{footer}</FooterText>}
        </FormCard>
    </PageRoot>
);

export default FormComponent;
