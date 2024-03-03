const ContactForm = (props) => {
  const { dispatch, handleSubmit, state } = props;

  return (
    <>
      <form onSubmit={handleSubmit} className="col-span-1">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Correo electrónico
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="subject"
            id="subject"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            placeholder=" "
            value={state.subject}
            onChange={(e) =>
              dispatch({ type: "SET_SUBJECT", payload: e.target.value })
            }
          />
          <label
            htmlFor="subject"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Asunto
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <textarea
            value={state.body}
            name="body"
            id="body"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={(e) =>
              dispatch({ type: "SET_BODY", payload: e.target.value })
            }
          />
          <label
            htmlFor="body"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Cuerpo
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enivar
        </button>
      </form>

      <p>IES H. Lanz</p>
      <p>IES </p>
      <p>IES</p>
    </>
  );
};

export default ContactForm;
