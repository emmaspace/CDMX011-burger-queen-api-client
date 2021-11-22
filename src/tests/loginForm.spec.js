// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "../LoginForm";

const handleClick = jest.fn()

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
// Checar cobertura

describe("Input should be rendered", () => {
  render(<LoginForm />); // porque falla si esta dentro del test?
  test('calls onClick prop when clicked', () => {
    render(<button onClick={handleClick}>Acceder</button>)
    fireEvent.click(screen.getByText(/Acceder/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })


  test("renders Input component", () => {
    render(<LoginForm />);
    const inputEmail = screen.getByPlaceholderText('Escribe tu correo');
    fireEvent.change(inputEmail, {
      target: { value: 'waiter@bq.com' }
    })
  })
})

