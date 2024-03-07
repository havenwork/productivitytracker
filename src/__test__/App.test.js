import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '../pages/SignupForm';

// mock data --
const mockUser = {
  fullname: 'John Doe',
  email: 'johndoe@example.com',
  password: 'securePass123',
};

// Test case for successful sign-up
describe('SignUpForm component', () => {
  it('should allow users to sign up with valid information', () => {
    const onSubmitMock = jest.fn();
    render(<SignupForm onSubmit={onSubmitMock} />);

    //input fields using their labels
    const nameInput = screen.getByLabelText(/fullname/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    // simulating user input
    fireEvent.change(nameInput, { target: { value: mockUser.name } });
    fireEvent.change(emailInput, { target: { value: mockUser.email } });
    fireEvent.change(passwordInput, { target: { value: mockUser.password } });
    fireEvent.click(submitButton);

    // expecting mock_function to be called with user data
    expect(onSubmitMock).toHaveBeenCalledWith(mockUser);
  });
});
