import React from 'react';
import UserSkill from "./UserSkill";
import Levels from "../../../models/Levels";
import skillHopeless from '../../../img/skill-houpless.jpg';
import skillBeginner from '../../../img/skill-beginner.jpg';
import skillExperienced from '../../../img/skill-experienced.jpg';
import skillSkilled from '../../../img/skill-skilled.jpg';
import skillMaster from '../../../img/skill-master.jpg';

class UserSkills extends React.PureComponent {
    render() {

        //ogolne na razie
        const iconSize = 64;
        //ustawienia dla HOPELESS, jako 0
        const iconSizeHopeless = 25;
        const colorHopeless = 'red';
        const imageHopeless = skillHopeless;
        const fontHopeless = 50;
        const nameHopeless = 'hopeless'
        //ustawienia dla BEGINNER, jako 0
        const iconSizeBeginner = 32;
        const colorBeginner = 'yellow';
        const imageBeginner = skillBeginner;
        const fontBeginner = 40;
        const nameBeginner = 'beginner'
        //ustawienia dla EXPERIENCED, jako 0
        const iconSizeExperienced = 48;
        const colorExperienced = 'blue';
        const imageExperienced = skillExperienced;
        const fontExperienced = 30;
        const nameExperienced = 'experienced'
        //ustawienia dla SKILLED, jako 0
        const iconSizeSkilled = 64;
        const colorSkilled = 'green';
        const imageSkilled = skillSkilled;
        const fontSkilled = 20;
        const nameSkilled = 'skilled'
        //ustawienia dla MASTER, jako 0
        const iconSizeMaster = 128;
        const colorMaster = 'violet';
        const imageMaster = skillMaster;
        const fontMaster = 10;
        const nameMaster = 'master'

        return (
            <div>
                <UserSkill size={iconSizeHopeless} title={colorHopeless} img={imageHopeless} font={fontHopeless} text={nameHopeless} />
                <UserSkill size={iconSizeBeginner} title={colorBeginner} img={imageBeginner} font={fontBeginner} text={nameBeginner} />
                <UserSkill size={iconSizeExperienced} title={colorExperienced} img={imageExperienced} font={fontExperienced} text={nameExperienced} />
                <UserSkill size={iconSizeSkilled} title={colorSkilled} img={imageSkilled} font={fontSkilled} text={nameSkilled} />
                <UserSkill size={iconSizeMaster} title={colorMaster} img={imageMaster} font={fontMaster} text={nameMaster} />
            </div>
        );
    }
}

export default UserSkills;