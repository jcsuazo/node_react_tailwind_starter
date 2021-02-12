import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
  //Get State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const [errorName, setErrorName] = useState('');
  // const [errorEmail, setErrorEmail] = useState('');
  // const [errorPassword, setErrorPassword] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const {
    loading,
    error,
    userInfo,
    errorName,
    errorEmail,
    errorPassword,
    errorConfirmPassword,
  } = userRegister;
  console.log(errorName, errorEmail, errorPassword);

  // Redirect
  let redirect = location.search ? location.search.split('=')[1] : '/';
  // console.log(error);
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  //Handlers
  const submitHandler = (e) => {
    e.preventDefault();
    //DISPATCH REGISTER
    dispatch(register(name, email, password, confirmPassword));
  };

  const inputData = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      value: name,
      valueSetter: (e) => setName(e.target.value),
      error: errorName,
    },
    {
      label: 'Email Address',
      name: 'email',
      type: 'email',
      value: email,
      valueSetter: (e) => setEmail(e.target.value),
      error: errorEmail,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: password,
      valueSetter: (e) => setPassword(e.target.value),
      error: errorPassword,
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
      value: confirmPassword,
      valueSetter: (e) => setConfirmPassword(e.target.value),
      error: errorConfirmPassword,
    },
  ];
  //OLD HTML
  const oldHTML = (
    <FormContainer>
      <h1>Sign UP</h1>
      {/* {message && <Message variant='danger'>{message}</Message>} */}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );

  const signInForm = (
    <form className='space-y-6' onSubmit={submitHandler}>
      {inputData.map((data, index) => {
        return (
          <div key={index}>
            <label
              htmlFor='name'
              className={`${
                data.error ? 'text-red-500' : 'text-gray-700'
              } block text-sm font-medium`}
            >
              {data.label}
            </label>
            <div className='mt-1'>
              <input
                id={data.name}
                name={data.name}
                type={data.type}
                autoComplete={data.name}
                required=''
                value={data.value ? data.value : ''}
                onChange={data.valueSetter}
                className={`${
                  data.error
                    ? 'border-2 border-red-500'
                    : 'border border-gray-300'
                } appearance-none block w-full px-3 py-2   rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
          </div>
        );
      })}

      <div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Register
        </button>
      </div>
    </form>
  );

  const socialMediaSingIn = (
    <div className='mt-6'>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-300'></div>
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-white text-gray-500'>Or register with</span>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-3 gap-3'>
        <div>
          <a
            href='/'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className='sr-only'>Sign in with Facebook</span>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </div>

        <div>
          <a
            href='/'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className='sr-only'>Sign in with Twitter</span>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              aria-hidden='true'
            >
              <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'></path>
            </svg>
          </a>
        </div>

        <div>
          <a
            href='/'
            className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className='sr-only'>Sign in with GitHub</span>
            <svg
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
  return (
    <div className='flex flex-col justify-center h-full flex-1'>
      <div
        className={`${
          error ? 'block' : 'hidden'
        } sm:mx-auto sm:w-full sm:max-w-md`}
      >
        {error && (
          <div className='bg-white rounded-lg shadow'>
            <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
              <div className='max-w-4xl mx-auto'>
                <div className='rounded-md bg-red-50 p-4'>
                  <div className='flex'>
                    <div className='flex-shrink-0'>
                      <svg
                        className='h-5 w-5 text-red-400'
                        data-todo-x-description='Heroicon name: data-todo-x-circle'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <div className='ml-3'>
                      <p className='text-sm font-medium text-red-800'>
                        There were {error.length}{' '}
                        {error.length > 1 ? 'errors' : 'error'} with your
                        submission
                      </p>
                      <div className='mt-2 text-sm text-red-700'>
                        <ul className='list-disc pl-5 space-y-1'>
                          {error.map((currentError) => {
                            return <li>{currentError.message}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`${
          error ? 'hidden' : 'block'
        } sm:mx-auto sm:w-full sm:max-w-md`}
      >
        <img
          className='mx-auto h-12 w-auto'
          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Register an account
        </h2>

        {/* {error} */}
        {loading && <Loader />}
        <p className='mt-2 text-center text-sm text-gray-600 max-w'>
          Have an Account?{' '}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : '/login'}
            className='font-medium text-indigo-600 hover:text-indigo-500'
          >
            Login
          </Link>
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          {signInForm}
          {socialMediaSingIn}
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
