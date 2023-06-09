import JournalEntrySquare from '../Components/JournalEntrySquare';
import { useEffect, useState } from 'react';
import {getQuote} from "../../../api/quotes";

const Home =() => {

    const [quote, setQuote] = useState([]);

    useEffect(() => {
       getQuote(setQuote)
    }, []);

    console.log("what is quote: ", quote);
    
    
    // const handleClick = async() => {
    //     const test = await fetch('/test',{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //     })
    //     .then( res => res.json())

    //     console.log(test)
    
    return (
        <section className='home'>
        <div className= 'home_journal-container'>
        <h1 className='home_header'> Welcome to your Morning Pages</h1>
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
        <div className='home_journal-list'>
        <JournalEntrySquare></JournalEntrySquare>
        </div>
        {/* <button onClick={() => handleClick()}>Get Quote</button> */}
        </div>
    </section>
    )
    }

export default Home;