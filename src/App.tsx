import {useState} from "react";
import {ButtonAdd} from "./components/ButtonAdd/ButtonAdd";
import {Input} from "./components/Input/Input";
import {Button} from "./components/Button/Button";
import iconSelect from './assets/images/check.svg'
import iconDelete from './assets/images/trash.svg'
import {useDispatch, useSelector} from "react-redux";
import {todoAdd, todoDelete, todoSelect} from "./store/slices/todosSlice";
import {RootState} from "./store/store";

function App() {
    const [value, setValue] = useState<string | number>('')
    const dispatch = useDispatch()
    const items = useSelector((state: RootState) => state.todoReducer.items)

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const addValue = () => {
        if (value) {
            dispatch(todoAdd(
                {
                    id: Date.now(),
                    value: value,
                    completed: false
                })
            )
        }
        setValue('')
    }

    const selectValue = (id: number) => {
        dispatch(todoSelect(id))
    }

    const deleteValue = (id: number) => {
        dispatch(todoDelete(id))
    }

    return (
        <div className="container">
            <div className='home'>
                <h1 className="home-title">Список задач</h1>
                <div className='home-wrapper'>
                    <Input
                        onChange={handleValue}
                        value={value}
                    />
                    <ButtonAdd onClick={() => addValue()}>Добавить</ButtonAdd>
                </div>
                <div className='home-tasks'>
                    <p>Мои задачи</p>
                    <p>{items.length}</p>
                </div>
                <ul className='items'>
                    {
                        items.length ? items.map((item, index) => (
                            <li key={item.id} className='item'>
                                <p className={item.completed ? 'item-line' : ''}>{`${index + 1}. ${item.value}`}</p>
                                <div className='item-buttons'>
                                    {
                                        !item.completed && <Button onClick={() => selectValue(item.id)} className={'select'} icon={iconSelect}></Button>
                                    }
                                    <Button onClick={() => deleteValue(item.id)} className={'delete'} icon={iconDelete}></Button>
                                </div>
                            </li>
                        )) : <p className='empty'>Список задач пуст</p>
                    }
                </ul>
            </div>
        </div>
    )
}

export default App;
