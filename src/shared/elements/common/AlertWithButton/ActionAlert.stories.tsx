import type { Meta, StoryObj } from '@storybook/react';
import ActionAlert from './ActionAlert'

const meta = {
    title: 'shared/common/ActionAlert',
    component: ActionAlert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
} satisfies Meta<typeof ActionAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseType: Story = {
    args: {
        alertText: "New alert wrapper with close action",
        color: 'success',
        type: 'close',
        open: true,
        onClose: () => {},
    },
    decorators: [
        
    ]
};

export const ActionType: Story = {
    args: {
        alertText: "New alert wrapper with custom action",
        color: 'info',
        type: 'function',
        open: true,
        actionFunc: () => {},
        buttonText: 'Perform'
    },
    decorators: [
        
    ]
};

export const Alert: Story = {
    args: {
        alertText: "Usual error alert with collapse animation",
        color: 'error',
        type: 'none',
        open: true
    },
    decorators: [
        
    ]
};