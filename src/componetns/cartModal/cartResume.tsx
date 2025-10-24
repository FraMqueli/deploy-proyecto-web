export interface CartResume {
  total: number;
}

export default function CartSummary({ total }: CartResume) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price);

return (
    <div className="space-y-4 w-full">
      <h3 className="text-xl font-bold">Resumen</h3>
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
      <button className="w-full bg-purple-600 text-white py-2 rounded-full font-bold">
        Continuar
      </button>
      <a
        className="text-purple-700 font-semibold block text-center mt-2"
        href="/"
      >
        Seguir comprando
      </a>
    </div>
  );
}
