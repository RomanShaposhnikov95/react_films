import './Raiting.css';
import {RiStarSFill, RiStarSLine} from "react-icons/all";



export const Raiting = (props) => {
    return (
        <div className='raitings'>
            <Stars color={props.valueFromSer > 0} onClick={props.onClick} value={1}/>
            <Stars color={props.valueFromSer > 1} onClick={props.onClick} value={2}/>
            <Stars color={props.valueFromSer > 2} onClick={props.onClick} value={3}/>
            <Stars color={props.valueFromSer > 3} onClick={props.onClick} value={4}/>
            <Stars color={props.valueFromSer > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

const Stars = (props) => {
    return (
        <span onClick={() => {props.onClick(props.value)}}>{props.color ? <RiStarSFill className='stars'/> : <RiStarSLine className='starsJust'/>}</span>
    )
}