import {HeaderComponent} from "./Header.tsx";
import {ReactNode} from "react";

interface LayoutInterface {
    children: ReactNode
}

export const DefaultLayout = ({children}: LayoutInterface) => {
    return (
        <>
        <HeaderComponent />
            <div style={{marginTop: '5%'}}>
                {children}
            </div>
        </>
    );
};