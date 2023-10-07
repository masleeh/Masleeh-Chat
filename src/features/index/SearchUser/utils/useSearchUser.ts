import { isAxiosError } from "axios";
import { useCallback, useEffect, useMemo, useState } from "react"
import useDebounce from "shared/hooks/useDebounce";
import $api from "shared/lib/axiosApi/axiosApi";

export type SearchUsersServerRes = {
    username: string;
    user_id: string;
    profile_pic: string;
}

const useSearchUser = (search: string) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const clearError = () => setError('')

    const [data, setData] = useState<SearchUsersServerRes[]>([])
    const prevDataLength = useMemo(() => data.length > 0 ? data.length : 1, [data])

    const debouncedValue = useDebounce(search)

    const searchUserByUserName = useCallback(async () => {
        if (!search) return setData([])
        setIsSuccess(false)
        setIsLoading(true)
        try {
            const response = await $api.post('/user/search', {
                username: search
            })
            setData(response.data)
            setIsLoading(false)
            setIsSuccess(true)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            if (isAxiosError(error)) {
                return setError(error.response!.data.message ?? 'Unknown error')
            } else {
                return setError('Unknown error')
            }
        }
    }, [search])

    useEffect(() => {
        searchUserByUserName()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    return {
        isLoading,
        error,
        clearError,
        isSuccess,
        data,
        prevDataLength,
    }
}

export default useSearchUser