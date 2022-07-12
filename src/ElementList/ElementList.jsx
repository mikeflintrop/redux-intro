import {useSelector, useDispatch} from 'react-redux';

function ElementList() {
    // grab elementList from redux store
    const elementList = useSelector(store => store.elementList)

    return (
        <ul>
            {elementList.map((element, i) => (
                <li key={i}>{element}</li>
            ))}
        </ul>
    )
}

export default ElementList;