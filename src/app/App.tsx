import useGetUserData from 'shared/lib/getUserData.ts/useGetUserData'
import { AppRouter } from './providers/router'
import './styles/style.scss'
import { FallbackLoader } from 'widgets/app/FallbackLoader'

const App = () => {
    const { inited } = useGetUserData()

    return (
        inited ? <AppRouter /> : <FallbackLoader />
    )
}

export default App