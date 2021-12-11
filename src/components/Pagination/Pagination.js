import './Pagination.css';
import {Link, useParams} from "react-router-dom";



export const Pagination = ({ value, onChange, range }) => {
    const {category} = useParams()
    let pattern = null;

    switch (true) {
        case range < 7:
            pattern = [...new Array(range)].map((_, i) => i + 1);
            break;
        case value < 4:
            pattern = [1, 2, 3, 4, 5, "...", range];
            break;
        case value > range - 4:
            pattern = [1, "...", range - 4, range - 3, range - 2, range - 1, range];
            break;
        default:
            pattern = [1, "...", value - 1, value, value + 1, "...", range];
    }

    function changeNumber(n) {
        if (typeof n === "number" && n > 0 && n <= range) {
            onChange(n);
        }
    }

    return (
        <div className="container">
            {/*<button disabled={value <= 1} onClick={() => changeNumber(value - 1)}>*/}
            {/*    {"<"}*/}
            {/*</button>*/}
            {
                pattern.map((label, index) => {
                    if(label === '...') {
                        return <span key={index} className='dots'>{label}</span>
                    } else {
                        return <Link
                            to={`/films/${category}/${label}`}
                            key={index}
                            className={value === label ? "pageNum pageNumActive" : "pageNum"}
                            onClick={() => changeNumber(label)}
                        >
                            {label}
                        </Link>
                    }
                })
            }
            {/*<button disabled={value >= range} onClick={() => changeNumber(value + 1)}>*/}
            {/*    {">"}*/}
            {/*</button>*/}
        </div>
    )
}