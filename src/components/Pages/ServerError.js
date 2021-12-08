import './Pages.css'

const url = 'https://freefrontend.com/assets/img/500-error-page-html-templates/HTML-CSS-500-Internal-Error-Page.gif'

export const ServerError = () => {
    return (
        <div className='serverError'>
            <img className='serverErrorImg' src={url} alt=""/>
        </div>
    )
}