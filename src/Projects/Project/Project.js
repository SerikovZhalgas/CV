import style from './Project.module.css'

function Project (props){

    return (
        <div className={style.project}>
            <div className={style.img}>
                <a href="" className={style.button}>Посмотреть</a>
            </div>
            <div className={style.projectDescription}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default Project;
