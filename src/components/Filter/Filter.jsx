import PropTypes from 'prop-types';

const Filter = ({value, onCangeFiler}) => (
  <label  >
    Find contacts by name 
    <input 
      type="text"
      value={value}
      onChange={onCangeFiler}
      required
    />
  </label>
)

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onCangeFiler: PropTypes.func,
};

export default Filter;