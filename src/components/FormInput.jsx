function FormInput({ svg, placeholder, type }) {
    return (
        <label className="input input-bordered flex items-center gap-2">
            {svg}
            <input type={type} className="grow" placeholder={placeholder} />
        </label>
    )
}

export default FormInput;