import {connect} from "react-redux";
import {decrementBalance, incrementBalance} from "./redux/actions";
import Title from "./Title";

function Balance(props) {
    return (
        <div className='container'>
            <div className='balance__header-holder'>Account Holder: {props.account_holder}</div>
            <div className='balance__header-balance'>Balance: {props.cash}$</div>
            <div className="balance__control">
                <button className='balance__control-btn add' onClick={props.onIncrementBalance}>ADD</button>
                <button className='balance__control-btn get' onClick={props.onDecrementBalance}>GET</button>
            </div>
            <Title></Title>
        </div>
    )
}

function mapStateToProps(state) {
    const {balanceReducer} = state;
    return {
        cash: balanceReducer.cash,
        account_holder: balanceReducer.account_holder,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementBalance: () => dispatch(incrementBalance()),
        onDecrementBalance: () => dispatch(decrementBalance()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Balance);