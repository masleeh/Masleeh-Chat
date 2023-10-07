import type { Meta, StoryObj } from '@storybook/react';
import ShowPassword from './ShowPassword'

const meta = {
    title: 'shared/common/ShowPassword',
    component: ShowPassword,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ShowPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Password input'
    },
    decorators: [
        
    ]
};