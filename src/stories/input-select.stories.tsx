import InputSelect from '@/components/input-select/input-select';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

/** Componente de campo de seleção. Elemento de formulário que permite a seleção
 * de um item dentre as opções de uma lista.
*/

const meta: Meta<typeof InputSelect> = {
    title: "Components/InputSelect",
    component: InputSelect,
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
        optionList: {
            description: "Lista de elementos disponíveis para seleção composta por objetos contendo" +
                "`description` e `value` <br> Propriedade Obrigatória."
        },
        onChange: {
            action: "change",
            description: "Função chamada ao selecionar um dos valores da lista." +
                "<br> Propriedade Obrigatória."
        },
        onBlur: {
            action: "blur",
            description: "Função chamada ao retirar foco do componente."
        }
    }
}

export default meta;

type Story = StoryObj<typeof InputSelect>;

export const Default: Story = {
    args: {
        optionList: [
            {
                description: "Sim",
                value: 1
            },
            {
                description: "Não",
                value: 0
            }
        ],
        label: "Selecione uma opção",
        onChange: action('change'),
        onBlur: action('blur'),
    }
}

export const Error: Story = {
    args: {
        optionList: [
            {
                description: "",
                value: 0
            },
            {
                description: "Masculino",
                value: 1
            },
            {
                description: "Feminino",
                value: 0
            },
            {
                description: "Não binário",
                value: 0
            }
        ],
        hasError: true,
        errorText: "Campo obrigatório",
        label: "Qual seu gênero?",
        onChange: action('change'),
        onBlur: action('blur'),
    }
}