import { useContext, useEffect, useState, useReducer } from 'react';
import { FiPlus } from 'react-icons/fi'
import { TitleContainer, Title, Form, Label, Button, GroupContainer, Text } from './styles';
import Group from './../Group';

import api from './../../utils/api';
import { Context } from './../../utils/AuthContext';
import { socket } from './../../utils/socketIo';

const groupTaskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, ...action.payload];
        case 'EDIT':
            return state.map(item => item.id === action.payload[0].id ? action.payload[0] : item);
        default:
            throw new Error();
    }
}

export default function GroupTask() {
    const { user, setDataActivated } = useContext(Context);
    const [groupName, setGroupName]  = useState();
    const [groups, dispatch] = useReducer(groupTaskReducer, []);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        socket.on('addGroup', content => {
            dispatch({ type: 'ADD', payload: [content]})
        })

        socket.on('editGroup', content => {
            dispatch({ type: 'EDIT', payload: [content]})
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        (async () => {
            const { data } = await api.get(`/task-groups/${user.id}`);
            dispatch({type: 'ADD', payload: data.group_task});
          })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addGroupTask = async () => {
        try{
            await api.post('/task-group', { user_id: user.id, title_group_task: groupName });
        } catch(err) {
            console.log(err);
        }
    }

    const handleActiveIndex = (index, item) => {
        setActiveIndex(index);
        setDataActivated(item);
    }

    return (
        <>
            <TitleContainer>
                <Title>Grupos de Tarefas</Title>
                <Form>
                    <Label>
                        <input type="text" placeholder="Nome do Grupo" onChange={(e) => setGroupName(e.target.value)} />
                        <Button onClick={addGroupTask}>
                            <FiPlus color="#FFF" size={20}/>
                        </Button>
                    </Label>
                    
                </Form>
            </TitleContainer>
            <GroupContainer>
                <Text>Todos os grupos</Text>
                {groups.length > 0 ? groups.map((item, index) => (
                    <Group key={index} data={item} isActive={activeIndex === index} onClick={() => handleActiveIndex(index, item)} />
                )) : <h4>Nenhum grupo encontrado</h4>}
            </GroupContainer>
        </>

    )
}