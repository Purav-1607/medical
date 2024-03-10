import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Unauthorized Access</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You do not have permission to access this page. Please{' '}
              <Link
                to="login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                sign in
              </Link>{' '}
              or{' '}
              <Link
                to="/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                create an account
              </Link>{' '}
              to get access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
