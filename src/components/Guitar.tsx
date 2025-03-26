import type { Guitar } from '../types/types';

type GuitarProps = {
  guitar: Guitar;
  addToCart: (guitar: Guitar) => void;
};

export default function Guitar({ guitar, addToCart }: GuitarProps) {
  const { id, name, image, description, price } = guitar;

  return (
    <div
      className="col-md-6 col-lg-4 my-4 row align-items-center"
      id={`guitar_${id}`}
    >
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">
          {price}
          <span className="sim-price">€</span>
        </p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addToCart(guitar)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
