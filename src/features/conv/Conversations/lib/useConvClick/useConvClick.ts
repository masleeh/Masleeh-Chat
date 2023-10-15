import { useNavigate } from "react-router-dom"


const useConvClick = () => {
    const navigate = useNavigate()
    const handleConvClick = (conv_id: string) => {
        navigate(`/conv/${conv_id}`)
    }

    return {
        handleConvClick
    }
}

export default useConvClick