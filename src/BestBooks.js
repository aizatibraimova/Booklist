
import { useState } from "react";
import { data } from "./data"


function BestBooks() {

    const [bestBooks, setBestBooks] = useState(0);
    const {bestSellers} = data[bestBooks]

    const previousBook = () => {
        setBestBooks((bestBooks => {
            bestBooks--;
            if (bestBooks < 0) {
                bestBooks = data.length -1;
            }
            return bestBooks;
        }))
    }

    const nextBook = () => {
        setBestBooks((bestBooks => {
            bestBooks++;
            if (bestBooks > data.length -1) {
                bestBooks = 0;
            }
            return bestBooks;
        }))
    }
    return(
        <div>
            <div className="cont">
                <h1>Best Books of 2021</h1>
            </div>

            <div className="cont">
            <h3>Goodreads Choice Awards 2021</h3>
            </div>

            <div className="cont">
                <img src={bestSellers} width="400px" height="600px" alt="books"/>
            </div>

            <div className="cont">
                <button className="change" onClick={previousBook}>Previous</button>
                <button className="change" onClick={nextBook}>Next</button>
            </div>
        </div>
    )
}

export default BestBooks;
