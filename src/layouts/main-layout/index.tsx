import { Header } from "components/header"
import { PropsWithChildren } from "react"

import './index.scss';
import { Footer } from "components/footer";

interface MainLayoutProps extends PropsWithChildren {

}

export const MainLayout = (props: MainLayoutProps) => {
    return (
        <div className='main-layout'>
            <Header />
            <div className='main-layout-content'>
                {props.children }
            </div>
            <Footer />
        </div>
    )
}