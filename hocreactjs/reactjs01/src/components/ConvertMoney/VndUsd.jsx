/* eslint-disable react/prop-types */
export default function VndUsd({ vnd, onChange }) {
  return (
    <div>
      <input type="number" placeholder="VND" value={vnd} onChange={onChange} />
    </div>
  );
}
