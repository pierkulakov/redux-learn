import {connect} from "react-redux";
import {decrementBalance, incrementBalance} from "./redux/actions";
import Title from "./Title";
import Operations from "./Operations";

function Balance(props) {
    return (
        <div className='container'>
            <div>Account Holder: {props.account_holder}</div>
            <div className='balance'>{props.cash}$</div>
            <div className="balance__control">
                <button onClick={props.onIncrementBalance}>ADD</button>
                <button onClick={props.onDecrementBalance}>GET</button>
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