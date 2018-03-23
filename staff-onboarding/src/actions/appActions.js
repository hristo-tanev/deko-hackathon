import axios from 'axios';

export function addAllCandidates(list) {
    return {
        type: 'ADD_ALL',
        action: list
    }
}

export function getCandidates() {
    return (dispatch) => {
        axios({
            method: 'get',
            url: 'http://ec2-34-241-209-15.eu-west-1.compute.amazonaws.com:4000/candidate/',
        }).then((res) => {
            dispatch(addAllCandidates())
        }).catch(() => {
            console.log('shit');
        });
    }
}