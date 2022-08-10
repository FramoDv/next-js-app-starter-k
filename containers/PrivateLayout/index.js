import {createUseStyles} from 'react-jss'
import {useDispatch} from 'react-redux'

const PrivateLayout = ({children}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>private layout</h1>
            {children}
        </div>
    )
}

export default PrivateLayout
