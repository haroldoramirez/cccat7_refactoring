import Ride from "../src/Ride";

test("Deve calcular o valor de uma corrida normal", function() {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-01T10:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(21);
});

test("Deve calcular o valor de uma corrida noturna", function() {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-01T23:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(39);
});

test("Deve calcular o valor de uma corrida no domingo", function() {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(29);
});

test("Deve calcular o valor de uma corrida no domingo de noite", function() {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T23:00:00"));
    const fare = ride.finish();
    expect(fare).toBe(50);
});

test("Deve calcular o valor de uma corrida com a distância inválida", function() {
    const ride = new Ride();
    expect( () => ride.addSegment(-3, new Date("2021-03-01T23:00:00"))).toThrow(new Error("Invalid Distance"))
});

test("Deve calcular o valor de uma corrida com a data inválida", function() {
    const ride = new Ride();
    expect( () => ride.addSegment(10, new Date("asdfgg"))).toThrow(new Error("Invalid Date"))
});

// test("Deve calcular o valor de uma corrida com tarifa mínima", function() {
//     const segments = [{distance: 3, date: new Date("2021-03-01T10:00:00")}];
//     const fare = calculateRide(segments);
//     expect(fare).toBe(10);
// });

