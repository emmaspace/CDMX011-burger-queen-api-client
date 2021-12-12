// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "../components/Login/LoginForm";

const saveData = jest.fn();

describe("Login should render", () => {
  test("renders Login component", () => {
    expect(render(<LoginForm />)).toMatchSnapshot();
  });
});

describe("Labels should render", () => {
  test("renders Labels component", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  })
  test("should render password", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
  })
})

describe("Input should be rendered", () => {
  render(<LoginForm />); 
  test('calls onClick prop when clicked', () => {
    render(<button onClick={saveData}>Acceder</button>)
    fireEvent.click(screen.getByText(/Acceder/i))
    expect(saveData).toHaveBeenCalledTimes(1)
  })


  test("renders Input component", () => {
    render(<LoginForm saveData={saveData} />);
    const inputEmail = screen.getByPlaceholderText('Escribe tu correo');
    const password = screen.getByPlaceholderText('Escribe tu contraseña');
    const submitButton = screen.getByRole('button', { name: /Acceder/i });
    
    fireEvent.change(inputEmail, {
      target: { value: 'waiter@bq.com' }
    })

    fireEvent.change(password, {
      
      target: { value: '123456' }
    })

    expect(saveData).not.toHaveBeenCalled();

    fireEvent.click(submitButton);

    expect(saveData).toHaveBeenCalledWith('waiter@bq.com', '123456');
  })
})
