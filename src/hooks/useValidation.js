import {useState} from 'react';
export function useValidation() {
    const [error, setError] = useState(null);
    const validate = (event) => {
      if (event.target.value.length === 0) {
        setError('Field cannot be empty');
      } else {
        setError(null);
      }
    };
    const ErrorDisplay = () => {
      if (error) {
        return <div className="Error">{error}</div>;
      }
      return null;
    }
    return [ErrorDisplay, validate];
  }