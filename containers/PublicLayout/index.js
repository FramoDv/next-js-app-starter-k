import {useDispatch} from 'react-redux'

const PublicLayout = ({children}) => {
    const dispatch = useDispatch()

    return (
        <main className="container">
            <small>public layout</small>
            {children}
        </main>
    )
}

export default PublicLayout
