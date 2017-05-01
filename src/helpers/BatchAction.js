export default class BatchAction {
    constructor(name, action) {
        if (!name) {
            throw new Error('Name param is required');
        }
        if (!action) {
            throw new Error('Action param is required');
        }
        this.name = name;
        this.action = action;
    }
}