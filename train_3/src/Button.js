import React from 'react';

export default function Button(props) {
    return React.createElement('button', { onClick: () => alert(props.label + '를 눌렀습니다.') }, props.label);
}