// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "../LoginForm";

// const handleClick = jest.fn();
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
// Checar cobertura

describe("Input should be rendered", () => {
  render(<LoginForm />); // porque falla si esta dentro del test?
  test('calls onClick prop when clicked', () => {
    render(<button onClick={saveData}>Acceder</button>)
    fireEvent.click(screen.getByText(/Acceder/i))
    expect(saveData).toHaveBeenCalledTimes(1)
  })


  test("renders Input component", () => {
    render(<LoginForm />);
    const inputEmail = screen.getByPlaceholderText('Escribe tu correo');
    const password = screen.getByPlaceholderText('Escribe tu contraseña');
    const submitButton = screen.getByRole('button', { name: /Acceder/i });
    const button
    
    fireEvent.change(inputEmail, {
      target: { value: 'waiter@bq.com' }
    })

    fireEvent.change(password, {
      
      target: { value: '123456' }
    })

    expect(saveData).not.toHaveBeenCalled();

    const e = { stopPropagation: jest.fn() };
    //fireEvent.onClick(submitButton);
    /* submitButton.simulate('click', {
      preventDefault: () => {
      }
     }); */
     const clickEvent = new MouseEvent('click');
     Object.assign(clickEvent, {preventDefault: jest.fn()});
   
     fireEvent(submitButton, clickEvent);
     console.log('que aki que')
   
     expect(clickEvent.preventDefault).toBeInTheDocument()

    //expect(saveData).toBeInTheDocument();

    expect(saveData).toHaveBeenCalledWith('waiter@bq.com', '123456');
  })
})
