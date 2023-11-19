/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import { Rating } from 'app/Rating/Rating';

interface PropsToSendBack {
  name: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
  modalOpened: boolean;
  onModalOpened: (modalData: PropsToSendBack) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  rating,
  image,
  promo,
  active,
  modalOpened,
  onModalOpened,
}) => {
  const onButtonPress = () => {
    onModalOpened({ name, description, image });
  };

  return (
    <div className="product">
      <div className="product_image" style={{ backgroundImage: `url(${image})` }}>
        {promo && <div className="product_promo">Promo</div>}
      </div>

      <div className="product_details">
        <div className="product_details--text">
          <div className="product_title">{name}</div>
          <div className="product_description">{description}</div>
        </div>

        <div className="product_details--footer">
          <Rating rating={rating} />
          {active ? (
            <div className="product_button product_button--active" onClick={() => !modalOpened && onButtonPress()}>
              <p className="product_button-label">Show details</p>
            </div>
          ) : (
            <div className="product_button product_button--inactive">
              <p className="product_button-label">Unavailable</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
