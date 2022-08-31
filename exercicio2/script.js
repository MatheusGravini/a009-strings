const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Remova o excesso de espaços no final da string;

console.log(minhaString.trim())

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

const StringAntes = (minhaString.length)
const StringApos = (minhaString.trim().length)

console.log(StringAntes)
console.log(StringApos)

//c) Substitua os traços `________` por “sticioso”.

console.log(minhaString.replace("________", "sticioso"))
