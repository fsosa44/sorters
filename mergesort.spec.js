describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    let arreglo = [1, 2, 3, 4, 5];
    expect(split(arreglo)).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    // testeá el algoritmo
  });
});
