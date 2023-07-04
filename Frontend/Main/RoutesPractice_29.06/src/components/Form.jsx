import { useForm } from "react-hook-form";

export const Form = ({ setLogged }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(
  {
    defaultValues: {
        name: '',
        surname: '',
        phone: ''
    }
  })

  const onSubmit = (data) => {
    setLogged(true);
    console.log(data);
  };

  console.log(watch("surname"));

  /*return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        //defaultValue="test"
        {...register("name", { required: true ,  maxLength: 10})}
      />
      {errors.name && <span>Name???</span>}
      <input
        {...register("surname", {
          required: "Surname is required",
          minLength: { value: 4, message: "too Short" },
        })}
      />
      {errors.surname?.message}
      <input type="submit" />
    </form>
  );*/

  //третий инпут

  /*
  <input
        {...register('phone', {
          required: 'requerid',
          pattern: {
            value: /(\(?([\d \-\)\–\+\/\(]+)\)?([ .\-–\/]?)([\d]+))/,
            message: 'Invalid phone number format',
          },
        })}
        placeholder="phone number"
      />
  */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        //defaultValue="test"
        {...register("name", { 
            required: 'Name is too long' ,  
            maxLength: {value: 10,
            message: "too LONG name"}
        })}
      />
      {errors.name?.message}
      <input
        {...register("surname", {
          required: "Surname is required",
          minLength: { value: 4, message: "too Short" },
        })}
      />
      {errors.surname?.message}

      <input
        {...register('phone', {
          required: 'requerid',
          pattern: {
            value: /(\(?([\d \-\)\–\+\/\(]+)\)?([ .\-–\/]?)([\d]+))/,
            message: 'Invalid phone number format',
          },
        })}
        placeholder="phone number"
      />

      <input type="submit" />
    </form>
  );
};
