import React from 'react';


class UserSkill extends React.PureComponent {
    render() {

        const size = this.props.size;
        const title = this.props.title;
        const img = this.props.img;
        const font = this.props.font;
        const text = this.props.text;

        return (
            <div>
                <img src={img} alt="Plant image" width={size} height={size}></img>
                <p style={{ fontSize: font }}>Skill {text}</p>
                <p style={{ color: title }}>{text} description</p>
            </div >
        );
    }
}

export default UserSkill;