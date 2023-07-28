import { IProduct } from './Reducer'

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY',
    REMOVE_ITEM = 'REMOVE_ITEM',
    REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS',
}

export function addNewItemAction(newItem: IProduct) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem,
        },
    }
}

export function changeItemQuantityAction(
    itemId: string,
    newQuantity: number,
) {
    return {
        type: ActionTypes.CHANGE_ITEM_QUANTITY,
        payload: {
            itemId,
            newQuantity,
        },
    }
}

export function removeItemAction(itemId: string) {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: {
            itemId,
        },
    }
}

export function removeAllItemsAction() {
    return {
        type: ActionTypes.REMOVE_ALL_ITEMS,
    }
}
