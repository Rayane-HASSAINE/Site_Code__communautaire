import clsx from "clsx";
import error from "next/error";
import { Typography } from "../typography/typography";

interface Props {
    isLoading: boolean,
    placeholder: string,
    type?: "text" | "email" | "password";
    register:  any;
    errors : any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutocompleted?: boolean;

}

export const Input = ({
    isLoading,
    placeholder,
    type = "text",
    register,
    errors,
    errorMsg = "Tu dois renseigner ce champ",
    id,
    required = true,
    isAutocompleted = false,
}: Props) => {
    return (
        <div className="space-y-2"> 
        <input
        type={type}
        placeholder={placeholder}
        className={clsx(
            isLoading && "cursor-not-allowed",
            errors[id] ? "placeholder-gray-600" : "placeholder-alert-danger text-alert-danger",
            "w-full p-4 font-light border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary placeholder-gray-600"
        )}
        disabled={isLoading}
        {...register(id, {
          required: { value: required, message: errorMsg, },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
        />
        {errors[id] && (
            <Typography variant="caption4" component= "div" theme="danger">
                {errors[id]?.message}
            </Typography>
        )}
      </div>

    )
}