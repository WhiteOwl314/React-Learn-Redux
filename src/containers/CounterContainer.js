import React from 'react';
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import Counter from '../components/Counter';
import {increase, decrease, setDiff} from "../modules/counter";

function CounterContainer() {
    //useSelector 는 리덕스 스토어의 상태를 조회하는 Hook
    //state 의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
    //객체를 만들면 리랜더링 됨 => 개별로 분리하여 최적화
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
        }),
        shallowEqual //두번째파라미터: equalityFn
        /*
            equalityFn? :(left: any, right: any) => boolean

            shallowEqual: 객체 안의 가장겉에 있는 값들을 모두 비교
        * */
    );

    //useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
    const dispatch = useDispatch();
    //각 액션들을 디스패치하는 함수들을 만드세요
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return(
        <Counter
            //상태와
            number={number}
            diff={diff}
            //액션을 디스패치 하는 함수들
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;