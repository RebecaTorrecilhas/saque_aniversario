import App from '@/app/app';
import Form from '@/components/form/form';
import type { Meta, StoryObj } from '@storybook/react';

/** Componente de formulário para preenchimento de dados.*/

const meta: Meta<typeof Form> = {
    title: "Components/Form",
    component: Form,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
    }
};

export default meta;

const Template = () => (
    <App>
        <Form />
    </App>
);

export const Default: StoryObj<typeof Form> = {
    render: Template,
    decorators: [
        (Story) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Story />
            </div>
        ),
    ],
};