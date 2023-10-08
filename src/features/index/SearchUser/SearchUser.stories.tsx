import { type Meta, type StoryObj } from '@storybook/react';
import SearchUser from './SearchUser'
import Decorator from 'shared/config/storybook/decorator';

const meta = {
    title: 'features/index/SearchUser/MainElement',
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
        (StoryComponent) => (
            <Decorator>
                <StoryComponent />
            </Decorator>
        )
    ]
};