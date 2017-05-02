export default class ApiData {
    getActionData(api, domain, action, evaluate) {
        let data;
        try {
            let actionDomain = api[domain] ? api[domain][action] : undefined;
            if (actionDomain) {
                if (evaluate) {
                    data = eval('actionDomain.' + evaluate);
                } else {
                    data = actionDomain;
                }
            }
        } catch (err) {
            console.warn(err);
        }
        return data;
    }
}