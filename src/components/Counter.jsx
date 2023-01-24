import React, {useState} from "react";


const Counter = () => {
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState('text')

    const inc = () => {setLikes(likes+1)};
    const dec = () => setLikes(likes-1);
    return (

        <div>
            {/*<h1>{likes}</h1>*/}
            {/*<button onClick={inc}>Увеличить</button>*/}
            {/*<button onClick={dec}>Уменьшить</button>*/}
            <h1>{comment}</h1>
            <input
                type='text'
                value={comment}
                onChange={event => setComment(event.target.value)}
            />
        </div>
    );
};

export default Counter;