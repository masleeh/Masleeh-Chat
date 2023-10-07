import { memo } from 'react';
import useSearchUser from './utils/useSearchUser';
import React from 'react';
import SearchBar from './elements/SearchBar/SearchBar';
import SearchList from './elements/SearchList/SearchList';
import useSearchBar from './utils/useSearchBar';

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