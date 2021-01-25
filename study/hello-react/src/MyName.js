import React, {Component} from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
            </div>
        );
    }
}

MyName.defaultProps = {
    name: '기본이름'
};

export default MyName;

/*
import React from 'react';
const MyName = ({name}) => {
    return (
        <div>
            안녕하세요! 제 이름은 {name} 입니다.
        </div>
    );
};

// 위 코드와 같은 '함수형 컴포넌트' 
// 함수형 컴포넌트는 state와 lifeCycle이 빠져있다?

*/