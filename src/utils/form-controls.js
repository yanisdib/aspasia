export function checkEmail(email) {
    const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    const isMatching = regexEmail.test(email);
    return isMatching;
};

export function checkPassword(a) {
    const regexPassword = /^S*[a-zA-Z0-9!@#$%^&*)(+=._-]{8,}$/g;
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