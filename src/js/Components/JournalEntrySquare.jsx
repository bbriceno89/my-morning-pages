import { useState, useEffect } from 'react';
import {getPosts} from "../../../api/posts"


const JournalEntrySquare = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
       getPosts(setPosts)
    }, []);

    const postItems = posts.map(post => 
        <li key={post.id}>
            <div className= "journal-entry">
                <h2 className="jounal-entry_title">{post.title}</h2>
                <h3 className="journal-entry_date">{post.created_date}</h3>
                    <div>
                        Topic:
                        <ul className="journal-entry_tags">{post.topic}</ul>
                    </div>
                    <p className="journal-entry_body">{post.body}</p>
            </div>
        </li>

    );

    return (
       <ul>
        {postItems}
       </ul>
    )
}

export default JournalEntrySquare