import {connect} from "react-redux";

function Balance(props) {
    return (
        <div className='container'>
            <div>Account Holder: {props.account_holder}</div>
            <div className='balance'>{props.cash}$</div>
            <div className="balance__control">
                <button>ADD</button>
                <button>GET</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('state > ', state);
    return {
        cash: state.cash,
        account_holder: state.account_holder,
    }
}

export default connect(mapStateToProps)(Balance);