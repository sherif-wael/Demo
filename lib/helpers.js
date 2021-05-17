export function clipText(text, l){
    return text.length <= l ? text : text.slice(0, l) + "...";
}