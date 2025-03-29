import InputText from '@/components/input-text/input-text';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

/** Componente de campo de texto. Elemento de formulário que permite a inserção de um dado
 * pelo usuário.
*/

const meta: Meta<typeof InputText> = {
    title: "Components/InputText",
    component: InputText,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        name: {
            control: "text",
            description: "Nome do componente. <br> Propriedade Obrigatória.",
        },
        id: {
            control: "text",
            description: "Id do componente. <br> Propriedade Obrigatória.",
        },
        placeholder: {
            control: "text",
            description: "Texto que aparece como placeholder do componente." +
                "<br> Propriedade Obrigatória."
        },
        label: {
            control: "text",
            description: "Conteúdo de texto do componente. <br> Propriedade Obrigatória.",
        },
        required: {
            control: { type: "boolean" },
            description: "Propriedade do componente que define se o mesmo é obrigatório.",
            defaultValue: { summary: false },
        },
        hasError: {
            control: { type: "boolean" },
            description: "Propriedade do componente que define se o mesmo contém erro de validação.",
            defaultValue: { summary: false },
        },
        errorText: {
            control: "text",
            description: "Texto quando há erro na validação do campo de seleção.",
        },
        value: {
            control: "text",
            description: "Propriedade utilizada para determinar o valor do input do componente." +
                "<br> Propriedade Obrigatória."
        },
        maxlength: {
            control: "number",
            description: "Propriedade utilizada para determinar a quantida máxima de caracteres" +
                "inseridos no componente."
        },
        onChange: {
            action: "change",
            description: "Função chamada ao selecionar um dos valores da lista." +
                "<br> Propriedade Obrigatória."
        },
        onBlur: {
            description: "Função chamada ao retirar foco do componente."
        }
    }
}

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
    args: {
        id: "name",
        name: "name",
        label: "Qual seu nome?",
        placeholder: "Ex.: Guilherme Neves",
        onChange: action('change'),
    }
}

export const Error: Story = {
    args: {
        id: "age",
        name: "age",
        hasError: true,
        errorText: "Valor inválido",
        label: "Qual sua idade?",
        placeholder: "Ex.: 35",
        onChange: action('change'),
    }
}