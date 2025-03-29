import TextFgtsCard from '@/components/text-fgts-card/text-fgts-card';
import type { Meta, StoryObj } from '@storybook/react';

/** Componente que mostra um título ao lado do texto informativo fixo sobre o saque de aniversário. */

const meta: Meta<typeof TextFgtsCard> = {
    title: "Components/TextFgtsCard",
    component: TextFgtsCard,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
            description: "Título do componente. <br> Propriedade Obrigatória.",
            defaultValue: "Texto padrão",
        }
    }
}

export default meta;

type Story = StoryObj<typeof TextFgtsCard>;

export const Default: Story = {
    args: {
        title: "Use uma grana que já é sua e saia do aperto.",
    }
}