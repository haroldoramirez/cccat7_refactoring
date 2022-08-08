import { validate } from "../../src/cpf/cpfModule";

test("Deve validar um CPF válido", function () {
    const isValid = validate("056.709.569-07");
    expect(isValid).toBe(true);
});

test("Deve validar um CPF válido que termine com zero", function () {
    const isValid = validate("47308766870");
    expect(isValid).toBe(true);
});

test("Deve validar um CPF inválido com todos os dígitos iguais", function () {
    const isValid = validate("111.111.111-11");
    expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com tamanho maior", function () {
    const isValid = validate("111.111.111-112235");
    expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com tamanho menor", function () {
    const isValid = validate("11.111.111");
    expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com valor nulo", function () {
    const isValid = validate(null);
    expect(isValid).toBe(false);
});

test("Deve validar um CPF inválido com valor nao definido", function () {
    const isValid = validate(undefined);
    expect(isValid).toBe(false);
});
