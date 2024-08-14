/* eslint-disable react/prop-types */
export default function UsdVnd({ onChange, usd }) {
  return (
    <div>
      <input type="number" placeholder="USD" onChange={onChange} value={usd} />
    </div>
  );
}
