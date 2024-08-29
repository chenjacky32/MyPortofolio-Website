/* eslint-disable react/prop-types */
export default function InputMessage(props) {
  const { name, id, placeholder, type } = props;
  return (
    <div>
      <label htmlFor="" className="text-base font-medium text-gray-900">
        {name}
      </label>
      <div className="mt-2.5 relative">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
        />
      </div>
    </div>
  );
}
