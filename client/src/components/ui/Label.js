
export function Label(props) {
  return (
    <label 
        className="block text-sm font-medium leading-6 text-gray-900"
        {...props}
    >
    {props.children}
  </label>
  )
}

export default Label


// htmlFor="email" 
