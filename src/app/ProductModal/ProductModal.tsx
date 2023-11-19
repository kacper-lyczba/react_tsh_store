/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import close from 'assets/images/close.svg';

interface ProductModalProps {
  name: string;
  description: string;
  image: string;
  onModalClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ name, description, image, onModalClose }) => (
  <div className="modal_wrapper">
    <div className="modal_backdrop"></div>
    <div className="modal">
      <div className="modal_image" style={{ backgroundImage: `url(${image})` }}>
        <img src={close} alt="close" className="modal_close" height="24" onClick={() => onModalClose()} />
      </div>
      <div className="modal_text-wrapper">
        <div className="modal_title">{name}</div>
        <div className="modal_description">{description}</div>
      </div>
    </div>
  </div>
);
