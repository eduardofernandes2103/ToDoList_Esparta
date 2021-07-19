import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    
    .cardPlace{
        button{
            margin: 0.5rem;
            width: 5rem;
            height: 1.5rem;
            border: none;
            border-radius: 5px;
            background: lime;
            cursor: pointer;
            box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
            transition: 0.2s;
            :hover{
                opacity: 50%;
                background-color: gray;
                color: black;
            }

        }
        
        .removeButton{
            button{
                background: red;
                cursor: pointer;
            }
        }
    }

    .confirmRemove{
        background: gray;
        color: red;
        font-style: bolder;
        border-radius: 10px;
        padding: 0.5rem;
        
        button{
            margin: 0.5rem;
            width: 5rem;
            height: 1.5rem;
            border: none;
            border-radius: 5px;
            background: salmon;
            cursor: pointer;
            box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
            transition: 0.2s;
            :hover{
                opacity: 50%;
                background-color: #262626;
                color: #ffffff;
            }
    }

    `
