import { memo } from 'react';
import useSearchUser from '../../model/state/useSearchUser';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchList from '../SearchList/SearchList';
import useSearchBar from '../../model/state/useSearchBar';

const SearchUser = memo(() => {

    const {
        search,
        isSearch,
        searchBarEl,
        handleChangeSearch,
        handleCloseSearchPanel,
        handleOpenSearchPanel,
    } = useSearchBar()

    const {
        data,
        isLoading,
        prevDataLength
    } = useSearchUser(search)

    return (
        <React.Fragment>
            <SearchBar 
                search={search}
                handleChangeSearch={handleChangeSearch}
                handleOpenSearchPanel={handleOpenSearchPanel}
            />
            
            <SearchList 
                data={data}
                isLoading={isLoading}
                isSearch={isSearch}
                prevDataLength={prevDataLength}
                searchBarEl={searchBarEl}
                handleCloseSearchPanel={handleCloseSearchPanel}
            />
        </React.Fragment>
    )
})

export default SearchUser