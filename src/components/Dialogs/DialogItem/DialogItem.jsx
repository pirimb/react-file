import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={`${s.dialog} ${s.dialogMessage}`}>
        <img className={s.ava} src={props.src} alt='foto'/>
        <NavLink activeClassName={s.active} className={s.dialogLink} to={path}>
          {props.name}
        </NavLink>
      </div>
    );
}

export default DialogItem;