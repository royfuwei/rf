/**
 * 將物件打平為字串，讓 object 可以 console.log 。
 * @param obj 
 * @returns 
 */
export const ConsoleObj = <T>(obj: T) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getConsoleList = (consoleObj: any, ...upperKey: string[]): string[] => {
        const result = [];
        for (const key in consoleObj) {
            if (typeof consoleObj[key] == "object") {
                upperKey.push(key);
                const objResult = getConsoleList(consoleObj[key], ...upperKey);
                upperKey.pop();
                result.push(...objResult)
            } else {
                const consoleStr = `${upperKey.length > 0 ? `${upperKey.join('.')}.` : ''}${key}: ${consoleObj[key]}`;
                result.push(consoleStr);
            }
        }
        return result;
    } 
    const consoleList = getConsoleList(obj);
    const consoleStr = consoleList.join(', ');
    return consoleStr;
}