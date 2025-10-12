import { useForm } from "react-hook-form";

const SaleHistory = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const watchedEmail = watch('email'); // Watching a specific field

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', {required: "Email is required"})} placeholder="Email" className="border-1" />
      {errors.email && <span>{errors.email.message}</span>}
      <p>Current email: {watchedEmail}</p> {/* Displaying the watched value */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SaleHistory;
