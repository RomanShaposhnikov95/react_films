import './AllFilms.css'
import {Film} from "../Film/Film";


export const AllFilms = () => {
    return (
        <div className='allFilms'>
            <div className="films">
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
                <Film/>
            </div>
            <div className="pagination">
                <span className='pageNum'>1</span>
                <span className='pageNum'>2</span>
                <span className='pageNum'>3</span>
                <span className='pageNum'>4</span>
                <span className='pageNum'>5</span>
                <span className='pageNum'>6</span>
                <span className='pageNum'>7</span>
                <span className='pageNum'>8</span>
                <span className='pageNum'>9</span>
            </div>
        </div>
    )
}