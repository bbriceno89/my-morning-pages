import { useState, useCallback } from "react"
import { createPost } from "../../../api/posts";

const Create = () => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = useCallback(() => {
    const postBody = {
        title,
        topic,
        created_date: new Date().toLocaleString("en-US", {hour12: false}),
        body,
    };
    createPost(postBody);
  });

  return (
    <section className="create">
      <form className="create_fields" onSubmit={(e) => handleSubmit(e)}>
        <div className="topic">
          <label htmlFor="title">Title</label>
          <input onChange={e => setTitle(e.target.value)} className="text-background" name="title" />
        </div>
        <div className="topic">
          <label htmlFor="topic">Topic</label>
          <input onChange={e => setTopic(e.target.value)} className="text-background" name="topic" />
        </div>
        <div>
        <label htmlFor="Body"> Write </label>
        <input onChange={e => setBody(e.target.value)} className="journalEntry_label" name="body" />
        <button className="button" type="submit">
          Create
        </button>
        </div>
      </form>
    </section>
  );
};

export default Create;
