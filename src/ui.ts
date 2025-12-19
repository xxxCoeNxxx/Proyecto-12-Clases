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
