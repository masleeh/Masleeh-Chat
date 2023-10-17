import useGetUserData from 'shared/lib/getUserData.ts/useGetUserData'
import './styles/style.scss'
import { FallbackLoader } from 'widgets/app/FallbackLoader'
import { AppRouterProvider } from './providers/router'

const App = () => {
    const { inited } = useGetUserData()

    return (
        inited ? <AppRouterProvider /> : <FallbackLoader />
    )
}

export default App