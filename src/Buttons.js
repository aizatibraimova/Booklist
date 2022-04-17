function Buttons({filteredBooks}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filteredBooks("Historical fiction")}>Historical Fiction</button>
            <button className="change" onClick={() => filteredBooks("Dystopian")}>Dystopian Novel</button>
            <button className="change" onClick={() => filteredBooks("Romance novel")}>Romance Novel</button>
            <button className="change" onClick={() => filteredBooks('Autobiography')}>Autobiography</button>
            <button className="change" onClick={() => filteredBooks("Other")}>Mixed genre</button>
        </div>
    )
}

export default Buttons;