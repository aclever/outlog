export const getTimeStamp = (date)=> {
    return ((now.getMonth() + 1) + '/' +
    (now.getDate()) + '/' +
    now.getFullYear() + " " +
    now.getHours() + ':' +
    ((now.getMinutes() < 10)
        ? ("0" + now.getMinutes())
        : (now.getMinutes())) + ':' +
    ((now.getSeconds() < 10)
        ? ("0" + now.getSeconds())
        : (now.getSeconds())));
};

const symbols = {
    success: '✔︎ ',
    error: '✘ ',
    warn: '⚑ ',
    arrow: '➤ '
};

export const rawRender = (log)=> {
    console.log(log);
};

export const render = (log)=> {

    if (log.type == "info") {
        console.log('%c [' + log.moduleName + "] " + '%c ' + log.message + ' ', 'background: #24292e; color: #FFF', ' color: #fff; background: #107cb7');

        console.log('%c Details: ', 'background: #e5e5e5; color: #666');
        let detailsString = '%c';
        Object.keys(log.details).forEach((key)=> {
            detailsString += symbols.arrow + key + ": " + log.details[key] + " \n";
        });

        console.log(detailsString + '\n\n', ' color: #555');
    }

    if (log.type == "error") {
        console.log('%c [' + log.moduleName + "] " + ' %c ' + symbols.error + log.message + ' ',
            'background: #24292e; color: #FFF', 'background: #b90000; color: #fff');
        let detailsString = '%c';
        Object.keys(log.details).forEach((key)=> {
            detailsString += symbols.arrow + key + ": " + log.details[key] + " \n";
        });

        console.log(detailsString + '\n\n', ' color: #b90000');
    }
};
export const renderWithTime = (log)=> {
};