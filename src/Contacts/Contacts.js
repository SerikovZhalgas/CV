import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'

function Contacts (){

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
            </div>
        </div>
    );
}

export default Contacts;
