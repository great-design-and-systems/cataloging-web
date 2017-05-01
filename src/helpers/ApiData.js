export function getActionData(api, domain, action, evaluate) {
    let actionDomain = api[domain] ? api[domain][action] : undefined;
    let data;
    if (actionDomain) {
        if (evaluate) {
            data = eval('actionDomain.' + evaluate);
        } else {
            data = actionDomain;
        }
    }
    return data;
}