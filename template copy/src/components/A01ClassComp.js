import React from 'react'

class A01ClassComp extends React.Component {

    constructor(props) {
        // super: 부모 클래스 생성자
        // this를 사용할 수 있다
        super(props)
        this.comName = 'A01 Class Component'

        // 바인딩을 위한 변수. state 변수는 내장 변수명
        // view에서 사용할 변수 함수 등을 정의할 목적으로 정의
        // 값이 변경되면 화면 갱신도 리액트가 알아서 함.
        this.state = {
            className: 'A01 Class Component'
        }
    }

    render() {
        return (
            <>
                <h3>A01 Class Component</h3>
                <div>This is Class Component</div>
                <h4>state : {this.state.className}</h4>
            </>
        )
    }
}

export default A01ClassComp