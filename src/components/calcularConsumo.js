export function calcularConsumo(quilometragem, litros) {
  const media = quilometragem / litros;
  let classificacao = '';

  if (media > 12) {
    classificacao = 'A';
  } else if (media > 10) {
    classificacao = 'B';
  } else if (media > 8) {
    classificacao = 'C';
  } else if (media > 4) {
    classificacao = 'D';
  } else {
    classificacao = 'E';
  }

  return {
    media: media.toFixed(2), // duas casas decimais
    classificacao: classificacao,
  };
}
