import Header from '@/components/header/header';
import type { Meta, StoryObj } from '@storybook/react';

/** Componente de cabeçalho de página. Os elementos são fixos e não há propriedades 
 * a serem passadas. */

const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {}