const Create = () => {
    const handleSubmit = (e) => {
        alert('submitted')
    }
    return (
        <section className="create">
            <form className="create_fields" onSubmit={(e) => handleSubmit(e)}>
                <div className="tags">
                    <label htmlFor="title">Title</label>
                    <input className="text-background" name="title" />
                </div>
                <div className="tags">
                    <label htmlFor="tags">Tags</label>
                    <input className="text-background" name="tags" />
                </div>
                <label className="journalEntry_label" htmlFor="JournalEntry">Make a new Entry</label>
                <textarea className="journalEntry text-background" name="JournalEntry"></textarea>
                <button className="button" type="submit">Create</button>
            </form>
        </section>
    )
}

export default Create;