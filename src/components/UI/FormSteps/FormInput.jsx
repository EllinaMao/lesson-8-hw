function FormInput({ labelText, error, ...inputProps }) {
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input {...inputProps} className={error ? "input-error" : ""} />
      
      {error && <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>}
    </div>
  );
}

export default FormInput;