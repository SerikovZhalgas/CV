import style from './DistantWork.module.css'
import styleContainer from './../common/styles/Container.module.css'

function DistantWork (){

    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удалнной работы</h2>
            </div>
        </div>
    );
}

export default DistantWork;
