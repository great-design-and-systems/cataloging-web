import BatchAction from './BatchAction';

export default class Batchlet {
    constructor(actions) {
        this.actions = actions || [];
    }

    push(action) {
        if (action instanceof BatchAction) {
            this.actions.push(action);
        } else {
            throw new Error('Adding a non BatchAction to a BatchProcessor');
        }
    }

    isRunning() {
        return this.running;
    }

    execute(callback) {
        this.running = true;
        processAsyncArray(this.actions, (result) => {
            this.running = false;
            if (callback) {
                callback(result);
            }
        });
    }
}

function processAsyncArray(asyncArray, callback, value) {
    if (asyncArray && asyncArray.length > 0) {
        const batchAction = asyncArray.shift();
        batchAction.action((value) => {
            processAsyncArray(asyncArray, callback, value);
        })
    } else {
        callback(value);
    }
}