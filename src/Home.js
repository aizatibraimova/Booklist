import { useState} from 'react';
import Books from './Books';
import Buttons from './Buttons';
import {data} from "./data";


function Home() {
const [books, setBooks] = useState(data)

const chosenBooks = (genre) => {
    const newBooks = data.filter(element => element.genre === genre)
    setBooks(newBooks)
}

return(
    <div>
    

        <Buttons filteredBooks = {chosenBooks}/>

        <div className='cont cover'>
        <h1>THE 15 MUST-READ BOOKS OF TIME </h1>
    </div>

        <Books itemsToRead = {books}/>

        
    </div>
)
}
export default Home;