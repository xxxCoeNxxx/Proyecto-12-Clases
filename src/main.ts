import "./style.css";
import { CalcularPrecio, CalcularPrecioTour } from "./motor";
import { reservas } from "./model";


document.addEventListener("DOMContentLoaded", () => {
  const calculadora = new CalcularPrecio(reservas);
  calculadora.calcularSubtotal();
  calculadora.calcularTotal();
  
  const calculadoraTour = new CalcularPrecioTour(reservas);
  calculadoraTour.calcularSubtotal();
  calculadoraTour.calcularTotal();
});