import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar'

const meta = {
    title: 'shared/ui/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullnameDefault: Story = {
    args: {
        name: 'Matvey Masleenov',
    },
    decorators: [
        
    ]
};

export const OneSymbol: Story = {
    args: {
        name: 'Matvey',
        sx: {
            width: 52,
            height: 52
        }
    },
    decorators: [
        
    ]
};

export const EmptyString: Story = {
    args: {
        name: ''
    }
}