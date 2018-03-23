export function testAction() {
    return {
        type: 'TEST'
    };
}

export function test() {
    return (dispatch) => {
        dispatch(testAction());
    }
}