function Form({ labelText, inputProps }) {
  return (
    <div className="form-group">
      <label>{labelText}</label>
      <input {...inputProps} />
    </div>
  );
}
