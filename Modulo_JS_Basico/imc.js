/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'John Joseph';
const sobrenome = 'Johanno';
const idade = 22;
const peso = 90;
const alturaEmM = 1.87; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);


newFunction();

function newFunction() {
    {
        const victorCalvo = 'sem cabelo';
        if (victorCalvo = 'com cabelo')
            console.log('mentiroso, careca ambulante');
    }
}
