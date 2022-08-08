import Cpf from "../../src/cpf/Cpf";

const validCPFs = [
    "056.709.569-07",
    "47308766870",
    "654.022.290-40",
    "630750170-78",
    "838-526-570-83"
];

test.each(validCPFs)("Deve validar um CPF válido", function (value) {
    const cpf = new Cpf(value);
    expect(cpf).toBeDefined();
    expect(cpf.getValue()).toBe(value);
});

const CPFsWithSameDigits = [
    "111.111.111.11",
    "222.222.222.22",
    "333.333.333.33",
    "444.444.444.44",
    "555.555.555.55",
    "666.666.666.66",
    "777.777.777.77",
    "888.888.888.88",
    "999.999.999.99",
];

test.each(CPFsWithSameDigits)("Deve validar um CPF inválido com todos os dígitos iguais", function (cpf) {
    expect(() => new Cpf(cpf)).toThrow(new Error("Cpf Inválido"));
});

test("Deve validar um CPF inválido com tamanho maior", function () {
    expect(() => new Cpf("111.111.111-2222")).toThrow(new Error("Cpf Inválido"));
});

test("Deve validar um CPF inválido com tamanho menor", function () {
    expect(() => new Cpf("111.111.111")).toThrow(new Error("Cpf Inválido"));
});

test("Deve validar um CPF vazio", function () {
    expect(() => new Cpf("")).toThrow(new Error("Cpf Inválido"));
});
