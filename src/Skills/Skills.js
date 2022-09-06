import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills (){

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои скиллы</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Подробное описание навыка'}/>
                    <Skill title={'CSS'} description={'Подробное описание навыка'}/>
                    <Skill title={'React'} description={'Подробное описание навыка'}/>
                    <Skill title={'Redux'} description={'Подробное описание навыка'}/>
                    <Skill title={'NodeJS'} description={'Подробное описание навыка'}/>
                    <Skill title={'Git'} description={'Подробное описание навыка'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
