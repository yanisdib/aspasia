export function checkEmail(email) {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isMatching = regexEmail.test(email);
    return isMatching;
};

export function checkPassword(a) {
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    const isMatching = regexPassword.test(a);
    return isMatching;
};

export function checkAlphaString(string) {
    const regexAlpha = /^[a-zA-Z]$/g;
    const isMatching = regexAlpha.test(string);
    return isMatching;
};

export function comparePassword(a, b) {
    return a===b ? true:false;
};

export function checkAge(date){
    
}