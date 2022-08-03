import { calc } from "../src/calc";

test("Deve calcular o valor de uma corrida normal", function() {
    //Preparação do cenário
    const segments = [{dist: 10, ds: new Date("2021-03-01T10:00:00")}];
    //Ação ou Execução do comportamento
    const fare = calc(segments);
    //Validação, verificação das espectativas
    expect(fare).toBe(21);
});

test("Deve calcular o valor de uma corrida em horário noturno", function() {
    const segments = [{dist: 10, ds: new Date("2021-03-01T23:00:00")}];
    const fare = calc(segments);
    expect(fare).toBe(39);
});

test("Deve calcular o valor de uma corrida no domingo", function() {
    const segments = [{dist: 10, ds: new Date("2021-03-07T09:00:00")}];
    const fare = calc(segments);
    expect(fare).toBe(29);
});

test("Deve calcular o valor de uma corrida no domingo em horário noturno", function() {
    const segments = [{dist: 10, ds: new Date("2021-03-07T23:00:00")}];
    const fare = calc(segments);
    expect(fare).toBe(50);
});

test("Deve calcular o valor de uma corrida com a distancia inválida", function() {
    const segments = [{dist: -3, ds: new Date("2021-03-01T23:00:00")}];
    const fare = calc(segments);
    expect(fare).toBe(-1);
});

test("Deve calcular o valor de uma corrida com a data inválida", function() {
    const segments = [{dist: 10, ds: new Date("aqweerwe")}];
    const fare = calc(segments);
    expect(fare).toBe(-2);
});

test("Deve calcular o valor de uma corrida com tarifa mínima", function() {
    const segments = [{dist: 3, ds: new Date("2021-03-01T10:00:00")}];
    const fare = calc(segments);
    expect(fare).toBe(10);
});