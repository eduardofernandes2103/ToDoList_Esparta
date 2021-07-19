import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #262626;
    color: #ffffff;

        
    input{
        border: none;
        border-radius: 5px;
        height: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    button{
        width: 5rem;
        height: 2rem;
        border: none;
        border-radius: 5px;
        background: aquamarine;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        transition: 0.2s;
        :hover{
            opacity: 50%;
            background-color: #ffffff;
            color: black;
        }
    }
    

    .lists{
        display: flex;
        flex-direction: row;
        margin-top: 1.5rem;
        width: 100%;
        height: 300vh;

        .taskToDo{
            display: flex;
            flex-direction: column;
            margin-right: 5rem;
            width: 40%
        }

        .completedTask{
            display: flex;
            flex-direction: column;
            margin-left: 5rem;
            width: 40%
        }
    }
    `
