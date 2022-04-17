import { useState } from "react";

function Books({itemsToRead}) {
    const [showText, setShowText] = useState(false);

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }


    return(
        <div className="listOfBooks">
            {itemsToRead.map((element => {
                const {id, book, author, genre, description, image, showMore} = element;
                return(
                    <div className="book-card" key={id}>
                        <img src={image} width="350px" height="500px" alt="books"/>

                        <div className="book-information">
                            <h3>{book}</h3>
                            <h4>by {author}</h4>
                            <p>{showMore ? description : description.substring(0, 170) + "...."}
                            <button className="change" onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button></p>
                        </div>
                    </div>
                    
                )
            }))}
        </div>
    )
}

export default Books;