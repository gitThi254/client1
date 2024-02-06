import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ResetPasswordSchema } from "../../schemas/formSchema";
import { useResetPassword } from "../../hooks/auth.hook";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassword>({
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    resolver: yupResolver(ResetPasswordSchema),
  });
  const {
    mutate: resetPasswordMutation,
    isPending,
    error,
  } = useResetPassword();
  const onSubmit = (data: ResetPassword) => {
    resetPasswordMutation(data);
  };
  return (
    <div className="w-full h-full flex justify-center items-center rounded-md shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[350px] flex-col gap-4 border border-graydark/50 p-6"
      >
        <div className="text-danger text-center">{error?.message}</div>

        <div>
          <input
            type="password"
            placeholder="Nhập mật khẩu cũ"
            {...register("old_password")}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="text-danger">{errors?.old_password?.message}</div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Nhập mật mới mới"
            {...register("new_password")}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="text-danger">{errors?.new_password?.message}</div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            {...register("confirm_password")}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="text-danger">{errors?.confirm_password?.message}</div>
        </div>

        <button disabled={isPending}>
          {isPending ? "Loading..." : "Reset password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
