import { useCallback, useEffect, useState } from "react"


const useSearchBar = () => {
    const [search, setSearch] = useState("")
    const [isSearch, setIsSearch] = useState(false)
    const [searchBarEl, setSearchBarEl] = useState<HTMLElement | null>(null)

    const handleChangeSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        setIsSearch(event?.target.value ? true : false)
    }, [])

    const handleCloseSearchPanel = useCallback(() => setIsSearch(false), [])
    const handleOpenSearchPanel = () => {
        if (search) setIsSearch(true)
    }

    useEffect(() => {
        setSearchBarEl(document.getElementById("search_bar_el"))
    }, [])
    
    return {
        search,
        isSearch,
        searchBarEl,
        handleChangeSearch,
        handleCloseSearchPanel,
        handleOpenSearchPanel
    }
}

export default useSearchBar