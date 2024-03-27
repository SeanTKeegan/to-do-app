import 'material-icons/iconfont/material-icons.css';
export default function Favourite() {
    return (
        <div className="tooltip" data-tip="Add to Favourites">
            <button className="btn btn-ghost">
                <span className="material-icons">star</span>
            </button>
        </div>
    );
}