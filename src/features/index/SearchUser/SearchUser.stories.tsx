import type { Meta, StoryObj } from '@storybook/react';
import SearchUser from './SearchUser'

const meta = {
    title: 'features/index/SearchUser',
    component: SearchUser,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof SearchUser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
    decorators: [
        
    ]
};