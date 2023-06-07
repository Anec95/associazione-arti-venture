import { LoadingBase, LoadingSquare } from '../styledComponents/styledContacts'


function LoadingIcon() {

    return (
        <LoadingBase>
            <LoadingSquare
                numb={'1'}
            />
            <LoadingSquare
                numb={'2'}
            />
            <LoadingSquare
                numb={'3'}
            />
            <LoadingSquare
                numb={'4'}
            />
        </LoadingBase>
    )
}

export default LoadingIcon