import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Form from "./Form/Form";

function Contacts (){

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <Form/>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;
