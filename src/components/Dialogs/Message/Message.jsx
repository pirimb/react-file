import s from './../Dialogs.module.css';


const Message = (props) => {

    return (
        <div>
            <div className={`${s.message} ${s.dialogMessage}`}>{props.message}</div>
        </div>
    );
}

export default Message;