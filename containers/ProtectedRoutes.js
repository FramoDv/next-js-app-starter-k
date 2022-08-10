import {useSelector} from "react-redux";
import {PUBLIC_ROUTES} from "../utilities/constants";
import {selectAccessToken} from "../store/slices/user";
import {getAppTheme} from "../theme";
import {ThemeProvider} from "react-jss";
import {selectTheme} from "../store/slices/app";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }) => {
    const themeName = useSelector(selectTheme)
    //Identify authenticated user
    const accessToken = useSelector(selectAccessToken);

    //pathIsProtected Checks if path exists in the unprotectedRoutes routes array
    let pathIsProtected = Object.values(PUBLIC_ROUTES).indexOf(router.pathname) === -1;

    if (isBrowser() && !accessToken && pathIsProtected) {
        router.push(PUBLIC_ROUTES.login);
    }

    return <ThemeProvider theme={getAppTheme({ name: themeName })}>
        {children}
    </ThemeProvider>
};

export default ProtectedRoute;