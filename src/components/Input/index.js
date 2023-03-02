import React from "react";

import { InputContainer } from './styles';

function Input({value, onChange}) {
    return (<>
        <InputContainer>
        
        <input value={value} onChange={onChange} placeholder="username/repo-name" />
        
        </InputContainer>
        </>
    )
}

export default Input;