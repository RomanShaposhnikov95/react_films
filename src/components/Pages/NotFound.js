import './Pages.css'


export const NotFound = () => {
    return (
        <div className='notFound'>
            <h1 className='errorNum'>404</h1>
            <p className='errorDescription'>Page Not Found</p>
            <div className="backToGeneral">Back To General</div>
        </div>
    )
}