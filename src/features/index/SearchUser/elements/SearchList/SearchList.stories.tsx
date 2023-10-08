import { type Meta, type StoryObj } from '@storybook/react';
import SearchList from './SearchList'
import Decorator from 'shared/config/storybook/decorator';

const meta = {
    title: 'features/index/SearchUser/sub/SearchList',
    component: SearchList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {

    },
    decorators: [
        (StoryComponent) => (
            <Decorator>
                <StoryComponent />
            </Decorator>
        )
    ]
} satisfies Meta<typeof SearchList>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
    {
        user_id: '123456',
        username: 'masleeh',
        profile_pic: ''
    },
    {
        user_id: '1234567',
        username: 'katya',
        profile_pic: ''
    },
    {
        user_id: '12345678',
        username: 'gribochek',
        profile_pic: ''
    },
    {
        user_id: '123456789',
        username: 'hahaha228',
        profile_pic: ''
    },
]

export const Primary: Story = {
    args: {
        data: data,
        isSearch: true,
        isLoading: false,
        prevDataLength: 0,
        searchBarEl: null,
        handleCloseSearchPanel: () => {}
    }
};

export const FetchingData: Story = {
    args: {
        data: data,
        isSearch: true,
        isLoading: true,
        prevDataLength: 4,
        searchBarEl: null,
        handleCloseSearchPanel: () => {}
    },
};

export const NothingFound: Story = {
    args: {
        data: [],
        isSearch: true,
        isLoading: false,
        prevDataLength: 4,
        searchBarEl: null,
        handleCloseSearchPanel: () => {}
    },
};