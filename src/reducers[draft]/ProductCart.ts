import { produce } from "immer";

const initialState = {
    items: [] as any,
} as { items: any[] };

export const productCartReducer = (state = initialState, action: any) => {
    return produce(state, (draftState) => {
        switch (action.type) {
            case "product/add":
                // eslint-disable-next-line no-case-declarations
                const existProductIndex = draftState.items.findIndex((item) => item.id === action.payload.id);
                // Nếu không có sản phẩm nào trong giỏ hàng thì thêm sản phẩm vừa click add
                if (existProductIndex === -1) {
                    draftState.items.push(action.payload);
                } else {
                    // Ngược lại thì cập nhật số lượng, dựa theo index mới tìm được
                    draftState.items[existProductIndex].quantity++;
                }
                break;
            case "product/increase":
                break;
            case "product/decrease":
                break;

            default:
                return state;
        }
    });
};
