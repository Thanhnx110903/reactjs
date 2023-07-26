import { useAppDispatch, useAppSelector } from "@/app/hook";
import { decrement, increase, increment } from "@/slices/Couters";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const { count } = useAppSelector((state: any) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <div>
            Counter: {count}
            <button onClick={() => dispatch(increment())}>INCREMENT</button>
            <button onClick={() => dispatch(decrement())}>DECREMENT</button>
            <button onClick={() => dispatch(increase(10))}>DECREMENT</button>
        </div>
    );
};

export default Counter;
