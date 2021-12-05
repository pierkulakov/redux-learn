import React from 'react';

function LogBalance(props) {
    return (
        <div className={props.operationType}>{props.operationValue}</div>
    );
}

export default LogBalance;