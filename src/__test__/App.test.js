// OPTIMIZED CODE : //
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupForm from '../pages/SignupForm';
import LoginPage from '../pages/login';
import axios from 'axios'
import ForgotPassword from '../pages/ForgotPassword'

// mock data --
const mockUser = {
  fullname: 'John Doe',
  email: 'johndoe@gmail.com',
  password: 'securePass123',
};
/// Testing SIGN UP Component 
describe('SignUpForm component', () => {
  it('should allow users to sign up with valid information', () => {
    const onSubmitMock = jest.fn();
    render(<SignupForm onSubmit={onSubmitMock} />);

    // using getByRole for common input types
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByRole('textbox', { name: /password/i });
    const submitButton = screen.getByRole('button', { name: /submit/i });
    const checkBox = screen.getByRole(/checkbox/i);
    const signInInput = screen.getByText(/sign-in/i);

    // simulating uesr inputs
    fireEvent.change(nameInput, { target: { value: mockUser.fullname } });
    fireEvent.change(emailInput, { target: { value: mockUser.email } });
    fireEvent.change(passwordInput, { target: { value: mockUser.password } });
    fireEvent.click(submitButton);

    // mock function assertion
    expect(onSubmitMock).toHaveBeenCalledWith(mockUser);
    expect(checkBox).toBeInTheDocument()
    expect(signInInput).toBeInTheDocument()
  });


  // Test case for rendering error messages during sign-up
  test('should render error message for invalid inputs', () => {
    render(<SignupForm />);
    const userNameInput = screen.getAllByLabelText('User name')
    const fullNameInput = screen.getAllByLabelText('Full name')
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Sign up');

    userEvent.type(userNameInput, 'invalid');
    userEvent.type(fullNameInput, 'valid@123');
    userEvent.type(emailInput, 'invalidEmail');
    userEvent.type(passwordInput, '1234')
    fireEvent.click(submitButton);

    const userNameError = screen.getByText('Username should be at least 6 characters long.')
    expect(userNameError).toBeInTheDocument()

    const fullNameError = screen.getByText('Invalid full name')
    expect(fullNameError).toBeInTheDocument()

    const emailError = screen.getByText('Invalid email address');
    expect(emailError).toBeInTheDocument();

    const passwordError = screen.getByText('Password Required');
    expect(passwordError).toBeInTheDocument()
  });
});


/// Testing LOGIN Component
describe('LOGIN Component', () => {
  //=> Testing login component with proper validation
  test('rendering initial form', () => {
    render(<LoginPage />);

    const heading = screen.getByText(/Hi, Welcome back!/i);
    expect(heading).toBeInTheDocument();

    const usernameInput = screen.getByRole('textbox', { name: /Email or Username/i });
    expect(usernameInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput).toBeInTheDocument();

    const signInButton = screen.getByRole('button', { name: /Sign in/i });
    expect(signInButton).toBeInTheDocument();

    const rememberMeCheckbox = screen.getByRole('checkbox', { name: /remember/i });
    expect(rememberMeCheckbox).toBeInTheDocument();

    const forgotPasswordLink = screen.getByText(/Forgot password/i);
    expect(forgotPasswordLink).toBeInTheDocument();

    const createAccountLink = screen.getByText(/Create an Account/i);
    expect(createAccountLink).toBeInTheDocument();
  });


  //=> Handli9ng input changes
  test('handling username input change', () => {
    render(<LoginPage />);
    // username input change
    const usernameInput = screen.getByRole('textbox', { name: /Email or Username/i });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(usernameInput).toHaveValue('testuser');

    //password input chnage
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput).toHaveValue('testpassword');
  });


  // //=> Handling form submission
  test('handling form submission with successful login', async () => {
    const mockResponse = { msg: 'Logged in successfully' };
    jest.spyOn(axios, 'post').mockResolvedValue(mockResponse);
  
    render(<LoginPage />);
  
    const usernameInput = screen.getByRole('textbox', { name: /Email or Username/i });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
    const signInButton = screen.getByRole('button', { name: /Sign in/i });
    await fireEvent.click(signInButton);
  
    // verifying API call and expecting response data
    expect(axios.post).toHaveBeenCalledWith('https://productivitytrackerbe.onrender.com/login', {
      username: 'testuser',
      password: 'testpassword'
    });
    expect(axios.post).toHaveReturnedValue(mockResponse);
  });
})


/// Testing FORGOT PASSWORD Component
describe('Forgot Passowrd', () => {
  //=> initial rendering
  test('rendering Forgot Password form with expected elements', () => {
    render(<ForgotPassword />);

    const heading = screen.getByText(/Hi, Welcome back!/i);
    const emailLabel = screen.getByLabelText(/Email address/i);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: /Reset Password/i });
    const signupLink = screen.getByText(/Create an Account/i);

    expect(heading).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
  });

  //=> handling form submission
  test('prevents default form submission', () => {
    const handleResetPasswordMock = jest.fn();
    render(<ForgotPassword handleResetPasswordClick={handleResetPasswordMock} />);

    const submitButton = screen.getByRole('button', { name: /Reset Password/i });
    fireEvent.click(submitButton);

    expect(handleResetPasswordMock).toHaveBeenCalledTimes(1);
    expect(handleResetPasswordMock).toHaveBeenCalledWith(expect.any(MouseEvent));
  });


  //rendering error msg for wrong email input
  test('shows error message for invalid email address', () => {
    render(<ForgotPassword />);

    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const submitButton = screen.getByRole('button', { name: /Reset Password/i });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    const errorMessage = screen.getByText(/Please enter a valid email address/i);
    expect(errorMessage).toBeInTheDocument();
  });
})