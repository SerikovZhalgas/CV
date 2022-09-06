import style from './Form.module.css'

function Form (){

    return (
        <div className={style.formBlock}>
                <input type="text" className={style.input}/>
                <input type="text" className={style.input}/>
                <textarea className={style.textarea}></textarea>
        </div>
    );
}

export default Form;
