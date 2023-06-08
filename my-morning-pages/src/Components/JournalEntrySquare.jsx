


const JournalEntrySquare = () => {
    return (
        <div className= "journal-entry">
            <h2 className="jounal-entry_title">Title</h2>
            <h3 className="journal-entry_date">Create: Date</h3>
                <div>
                    Tags:
                    <ul className="journal-entry_tags">Tag1 tag2</ul>
                </div>
                <p className="journal-entry_body">Body ...</p>
        </div>
    )
}

export default JournalEntrySquare