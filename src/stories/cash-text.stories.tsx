import CashText from '@/components/cash-text/cash-text';
import type { Meta, StoryObj } from '@storybook/react';

/** Componente que mostra um valor monetário junto à um título. */

const meta: Meta<typeof CashText> = {
    title: "Components/CashText",
    component: CashText,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
            description: "Texto do componente. <br> Propriedade Obrigatória.",
        },
        value: {
            control: "number",
            description: "Valor em reais (R$) do componente. <br> Propriedade Obrigatória.",
        }
    }
}

export default meta;

type Story = StoryObj<typeof CashText>;

export const Default: Story = {
    args: {
        title: "Você pode receber até",
        value: 13455.27
    }
}