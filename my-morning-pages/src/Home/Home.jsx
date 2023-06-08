import JournalEntrySquare from '../Components/JournalEntrySquare';
import './Home.css';

const Home =() => {

    const handleClick = async() => {
        const test = await fetch('/test',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then( res => res.json())

        console.log(test)
    }
    return (
    <section className='home'>
        <div className= 'home_journal-container'>
        <h1 className='home_header'> Welcome to your Morning Pages</h1>
        <div className='home_journal-list'>
        <JournalEntrySquare></JournalEntrySquare>
        </div>
        <button onClick={() => handleClick()}></button>
        </div>
    </section>
    )
}

export default Home;