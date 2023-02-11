import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import classes from "./AddForm.module.css"

type PropsAddFormType = {
    addPost: (title: string, body: string) => void
}

const AddForm = (props: PropsAddFormType) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setTitle(e.currentTarget.value)
    }

    const onChangeBodyHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setBody(e.currentTarget.value)

    }

    const OnClickHandler = () => {
        props.addPost(title, body)
        setBody('')
        setTitle('')
    }


    return (
        <div className={classes.wrapper}>
            <div className={classes.inputs}>
                <div className={classes.title}>Title:<input value={title} type="text" onChange={onChangeTitleHandler}/></div>
                <div>Body:<input value={body} type="text" onChange={onChangeBodyHandler}/></div>

            </div>
            <div className={classes.buttonWrapper}>
                <button className={classes.button} onClick={OnClickHandler}>+</button>
            </div>

        </div>
    );
};

export default AddForm;