import type { AppProps } from 'next/app'
import HeaderComponent from '../components/common/header'
import 'antd/dist/antd.css'
import '../styles/globals.scss'
import { UserProvider } from '../contexts/userContext'

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <UserProvider>
            <HeaderComponent />
            <main>
                <Component {...pageProps} />
            </main>
        </UserProvider>
    </>
}

export default MyApp
