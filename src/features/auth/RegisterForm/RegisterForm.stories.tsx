import type { Meta, StoryObj } from '@storybook/react';
import RegisterForm from './RegisterForm'
import Decorator from 'shared/config/storybook/decorator';

const meta = {
    title: 'features/auth/RegisterForm',
    component: RegisterForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof RegisterForm>;

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