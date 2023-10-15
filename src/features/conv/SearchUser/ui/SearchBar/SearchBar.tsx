import { InputBase, Paper } from '@mui/material';
import { memo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import SearchPlusMenu from '../SearchPlusMenu/SearchPlusMenu';

interface ISearchBarProps {
    search: string;
    handleChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOpenSearchPanel: () => void;
}

const SearchBar = memo(({
    search,
    handleChangeSearch,
    handleOpenSearchPanel
}:ISearchBarProps) => {
    const {t} = useTranslation(["conversations"])

    return (
        <Paper 
            elevation={4} 
            sx={{ 
                p: "8px 24px", 
                borderRadius: 6,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 1 
            }}
            id="search_bar_el"
        >
            <SearchIcon color="primary" fontSize="medium"/>
            <InputBase 
                sx={{ width: '100%' }}
                placeholder={t("search_placeholder")}
                value={search}
                onChange={handleChangeSearch}
                onClick={handleOpenSearchPanel}
            />

            <SearchPlusMenu />
        </Paper>
    )
})

export default SearchBar