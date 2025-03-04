import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const sujetos: string[] = ["The dog", "The turtle", "My friend", "Sebastian"];
  const predicados: string[] = ["runs fast", "is very wise", "loves coding", "sings poorly"];

  const generarFraseAleatoria = (): string => {
    const sujetoAleatorio = sujetos[Math.floor(Math.random() * sujetos.length)];
    const predicadoAleatorio = predicados[Math.floor(Math.random() * predicados.length)];

    let sujetoModificado = sujetoAleatorio;
    if (sujetoAleatorio.length > 8) {
      sujetoModificado += " intelligent";
    }

    let predicadoModificado = predicadoAleatorio;
    if (predicadoAleatorio.includes("coding")) {
      predicadoModificado += "!";
    }

    return `${sujetoModificado} ${predicadoModificado}.`;
  };
  
  const fraseAleatoria = generarFraseAleatoria();

  return NextResponse.json({
    frase: fraseAleatoria
  });
}
