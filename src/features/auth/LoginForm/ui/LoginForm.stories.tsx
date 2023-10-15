import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm'
import Decorator from 'shared/config/storybook/decorator';

const meta = {
    title: 'features/auth/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof LoginForm>;

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