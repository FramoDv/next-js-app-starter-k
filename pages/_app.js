import ProtectedRoutes from "../containers/ProtectedRoutes";
import {Provider} from "react-redux";
import store from "../store"
import "../theme/bootstrap-grid.min.scss"

export default function App({Component, pageProps, router}) {

    return (
        <Provider store={store}>
            <ProtectedRoutes router={router}>
                <Component {...pageProps} />
            </ProtectedRoutes>
        </Provider>
    )
}