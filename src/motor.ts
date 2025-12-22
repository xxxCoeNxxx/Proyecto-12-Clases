import { obtenerYPintarParticular, obtenerYPintarTour } from "./ui";
import { Reserva } from "./model";

export class CalcularPrecio {
  reservas: Reserva[];
  iva: number;
  subtotales: number[];

  constructor(reservas: Reserva[]) {
    this.reservas = reservas;
    this.iva = 0.21;
    this.subtotales = [];
  }

  calcularSubtotal(): void {
    this.reservas.forEach((el) => {
      let subtotalReserva = 0;

      if (el.tipoHabitacion === "standard") {
        subtotalReserva = 100;
      } else {
        subtotalReserva = 150;
      }

      if (el.pax > 1) {
        subtotalReserva += 40*(el.pax -1);
      }

      if (el.desayuno) {
        subtotalReserva += (el.pax * 15)
      }

      subtotalReserva *= el.noches;

      this.subtotales.push(subtotalReserva)
    });
  }

  calcularTotal(): void {
    this.subtotales.forEach((subtotal, index) => {
      const totalConIVA = subtotal * (1 + this.iva)

      const ivaAplicado = totalConIVA - subtotal;

      obtenerYPintarParticular(index, subtotal, ivaAplicado, totalConIVA);
    });
  }
};

export class CalcularPrecioTour extends CalcularPrecio {
  descuento: number;

  constructor(reservas: Reserva[]) {
    super(reservas);
    this.descuento = 0.15;
  }

  calcularSubtotal(): void {
    this.subtotales = [];

    this.reservas.forEach((el) => {
      let precioBase = 100 * el.noches
      let extras = 0;

      if (el.pax > 1) {
        extras += 40 * (el.pax -1) * el.noches;
      }

      if (el.desayuno) {
        extras += 15 * el.pax * el.noches;
      }

      const subtotal = (precioBase + extras) * (1 - this.descuento);

      this.subtotales.push(subtotal);
    });
  }

  calcularTotal(): void {
    this.subtotales.forEach((subtotal, index) => {
      const totalTourConIVA = subtotal * (1 + this.iva)

      const ivaAplicadoTour = totalTourConIVA - subtotal;

      obtenerYPintarTour(index, subtotal, ivaAplicadoTour, totalTourConIVA)
    });
  }
}
