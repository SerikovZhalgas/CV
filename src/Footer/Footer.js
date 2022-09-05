import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

function Footer (){

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Жалгас Сериков</h2>
            </div>
        </div>
    );
}

export default Footer;
