export default function PrimaryButton({
    className = "",
    disabled,
    variant,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `btn btn-${variant} ${disabled && "opacity-25"} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
