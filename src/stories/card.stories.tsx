import Card from '@/components/card/card';
import type { Meta, StoryObj } from '@storybook/react';

/** Componente de card genérico.*/

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select", options: ["card-sm", "card-md", "card-lg"] },
            description: "Tamanho do card. <br> Propriedade Obrigatória.",
            table: {
                type: { summary: '"card-sm" | "card-md" | "card-lg"' },
            },
        },
        children: {
            description: "Aceita qualquer tipo de conteúdo, composto por componentes e/ou código HTML." +
                "<br> Propriedade Obrigatória."
        }
    }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Small: Story = {
    args: {
        size: "card-sm",
    }
}

export const Medium: Story = {
    args: {
        size: "card-md",
    }
}

export const Large: Story = {
    args: {
        size: "card-lg",
    }
}
