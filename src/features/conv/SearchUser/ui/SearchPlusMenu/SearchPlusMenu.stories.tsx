import type { Meta, StoryObj } from '@storybook/react';
import SearchPlusMenu from './SearchPlusMenu'

const meta = {
    title: 'features/index/SearchUser/sub/SearchPlusMenu',
    component: SearchPlusMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof SearchPlusMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        
    },
    decorators: [
        
    ]
};