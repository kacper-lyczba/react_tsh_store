/* eslint-disable react/prop-types */
import spinner from 'assets/images/spinner.svg';

interface SpinnerProps {
  size?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 50 }) => (
  <div className="spinner">
    <img src={spinner} alt="spinner" className="spinner_image" height={String(size)} />
  </div>
);
