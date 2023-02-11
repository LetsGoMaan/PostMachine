import React from 'react';
import classes from './Posts.module.css'

export type PostType = {
    id: string
    title: string
    body: string
}

 type PostsPropsType = {
    title: string
    posts: Array<PostType>
}

const Posts = (props:PostsPropsType) => {
    return (
        <div className={classes.posts}>
            <h3 className={classes.title}>{props.title}</h3>

            <ul >
                {props.posts.map((el) => {
                return (
                        <li><h5>{el.title}</h5><div>{el.body}</div></li>
                    )
                })
                }
            </ul>
        </div>
    );
};

export default Posts;