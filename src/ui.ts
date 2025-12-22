export const pintarLineaReserva = (
  contenedor: HTMLElement,
  index: number,
  subtotal: number,
  ivaAplicado: number,
  totalConIVA: number,
  tipoTour?: string 
): void => {
  const titulo = tipoTour 
    ? `${tipoTour} ${index + 1}`
    : `Reserva ${index + 1}`;

  const p = document.createElement("p");
  p.textContent =
    `${titulo} | ` +
    `Subtotal: ${subtotal} € | ` +
    `IVA: ${ivaAplicado.toFixed(2)} € | ` +
    `Total: ${totalConIVA.toFixed(2)} €`;

  contenedor.appendChild(p);
};

export const obtenerYPintarParticular = (
  index:number, 
  subtotal:number, 
  ivaAplicado:number, 
  totalConIVA:number
): void => {
  const contPart = document.getElementById("reservasParticular");
    if (contPart !== null && contPart !== undefined && contPart instanceof HTMLElement) {
      pintarLineaReserva( contPart, index, subtotal, ivaAplicado, totalConIVA );
    } else {
      throw new Error("Contenedor Particular no encontrado o tipo incorrecto");
    }
}

export const obtenerYPintarTour = (
  index:number,
  subtotal: number,
  ivaAplicadoTour: number,
  totalTourConIVA: number
): void => {
  const contTour = document.getElementById("reservasTour")
    if ( contTour !== null && contTour !== undefined && contTour instanceof HTMLElement) {
      pintarLineaReserva( contTour, index, subtotal, ivaAplicadoTour, totalTourConIVA, "Reserva Tour Operador" );
    } else {
      throw new Error("Contenedor Tour no encontrado o tipo incorrecto");
    }
}