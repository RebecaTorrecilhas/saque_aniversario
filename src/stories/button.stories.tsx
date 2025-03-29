import Button from "@/components/button/button";
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

/** Componente de botão para a interação do usuário. */

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        label: {
            control: "text",
            description: "Conteúdo de texto do componente. <br> Propriedade Obrigatória.",
        },
        type: {
            control: { type: "select", options: ["button", "submit", "reset"] },
            description: "Tipo do botão.",
            defaultValue: { summary: "button" },
            table: {
                type: { summary: '"button" | "submit" | "reset"' },
            },
        },
        size: {
            control: { type: "select", options: ["sm", "md", "lg"] },
            description: "Tamanho do botão. <br> Propriedade Obrigatória.",
            defaultValue: { summary: "lg" },
            table: {
                type: { summary: '"sm" | "md" | "lg"' },
            },
        },
        color: {
            control: { type: "select", options: ["primary", "secondary"] },
            description: "Cor do botão. <br> Propriedade Obrigatória.",
            defaultValue: { summary: "primary" },
            table: {
                type: { summary: '"primary" | "secondary" | "danger"' },
            },
        },
        disabled: {
            control: { type: "boolean" },
            description: "Atributo do componente para a desabilitação do mesmo.",
            defaultValue: { summary: false },
        },
        onClick: {
            handleClick: {
                action: 'clicked',
            },
            description: "Atribui uma função ao clique de usuário sobre o componente. <br> Obrigatório.",
        },
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: "Confirmar",
        color: "primary",
        size: "lg",
        disabled: false,
        onClick: action('onClick'),
    }
}

export const Secondary: Story = {
    args: {
        label: "Cancelar",
        color: "secondary",
        size: "md",
        disabled: false,
        onClick: action('onClick'),
    }
}

export const Danger: Story = {
    args: {
        label: "Excluir",
        color: "danger",
        size: "sm",
        disabled: false,
        onClick: action('onClick'),
    }
}