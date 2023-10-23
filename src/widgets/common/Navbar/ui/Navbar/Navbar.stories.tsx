import { type Meta, type StoryObj } from '@storybook/react';
import Navbar from './Navbar'
import Decorator from 'shared/config/storybook/decorator';
import { Container } from '@mui/material';
import { IStateSchema } from 'app/providers/store';

const meta = {
    title: 'widgets/common/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
    args: {
        
    },
    decorators: [
        (StoryComponent) => (
            <Container maxWidth="md">
                <Decorator>
                    <StoryComponent />
                </Decorator>
            </Container>
        )
    ]
};

const state: IStateSchema = {
    user: {
        userData: {
            user_id: 'asdfghjklzxv',
            username: 'Matvey Simonenkov',
            profile_pic: ''
        }
    },
    theme: {}
}

export const LoggedIn: Story = {
    decorators: [
        (StoryComponent) => (
            <Decorator initialState={state}>
                <Container maxWidth="md">
                    <StoryComponent />
                </Container>
            </Decorator>
        )
    ]
}