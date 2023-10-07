import { memo } from 'react';
import { SearchUsersServerRes } from '../../utils/useSearchUser';
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Skeleton } from '@mui/material';
import FoundUsers from '../FoundUsers/FoundUsers';

interface ISearchListProps {
    data: SearchUsersServerRes[];
    isSearch: boolean;
    isLoading: boolean;
    prevDataLength: number;
    searchBarEl: HTMLElement | null
    handleCloseSearchPanel: () => void;
}

const SearchList = memo(({
    data,
    isSearch,
    isLoading,
    prevDataLength,
    searchBarEl,
    handleCloseSearchPanel
}:ISearchListProps) => {

    return (
        <Popper
            open={isSearch}
            id="search-users-list"
            anchorEl={searchBarEl}
            transition
            sx={{ width: searchBarEl ? searchBarEl.offsetWidth : 400 }}
        >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin:
                            placement === 'bottom-start' ? 'left bottom' : 'left top',
                    }}
                >
                    <Paper sx={{ p: '0 8px', borderRadius: 2, width: '100%', mt: 1 }} elevation={4}>
                        <ClickAwayListener onClickAway={handleCloseSearchPanel}>
                            <MenuList>

                                {isLoading ? (
                                    Array(prevDataLength).fill(1).map((_: unknown, index: number) => (
                                        <MenuItem key={index}>
                                            <Skeleton  variant="rounded" width="100%" height={30} />
                                        </MenuItem>
                                    ))
                                ) : (
                                    <FoundUsers data={data} />
                                )}

                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
})

export default SearchList