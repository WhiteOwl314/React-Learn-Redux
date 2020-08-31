import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Todos from '../components/Todos';
import {addTodo, toggleTodo} from "../modules/todos";

function TodosContainer() {
    //useSelector 에서 꼭 객체를 반환 할 필요 없음
    // 한 종류의값만 조회하고 싶으면 그냥 원하는 값만 바로 반환
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id =>
        dispatch(toggleTodo(id)),[dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;