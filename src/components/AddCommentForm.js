import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const resonse = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy: name, 
            text: commentText,
        }, {
            headers,
        });
        const updatedArticle = resonse.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }

    return (
        <>
            <div id="add-comment-form">
                <h3>Add a Comment</h3>
                {user && <p>You are posting as {user.email}</p>}
               
                    <textarea rows="4" columns ="50" value={commentText} 
                    onChange={e => setCommentText(e.target.value)}/>
               
                <button onClick={addComment}>Add Comment</button>
            </div>
        </>
    )
}

export default AddCommentForm;