function Balance(props) {

    return (
        <div className='container'>
            <div className='balance'>{props.cash}$</div>
            <div className="balance__control">
                <button>ADD</button>
                <button>GET</button>
            </div>
        </div>
    )
}

export default Balance;