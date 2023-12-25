
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
  

export default Filter;