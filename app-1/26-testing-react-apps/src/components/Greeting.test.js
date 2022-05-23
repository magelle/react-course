import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";

describe('Greeting', () => {
  test('Renders holl world as a text', () => {
    // Arrange
    render(<Greeting/>)

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World!')
    expect(helloWorldElement).toBeInTheDocument()
  });

  test('render default text', () => {
    // Arrange
    render(<Greeting/>)

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('It\'s goot to see you!')
    expect(helloWorldElement).toBeInTheDocument()
  });

  test('should display new text', () => {
    // Arrange
    render(<Greeting/>)

    // Act
    const changeTextButton = screen.getByRole( 'button')
    changeTextButton.click()

    // Assert
    const helloWorldElement = screen.getByText('Changed!')
    expect(helloWorldElement).toBeInTheDocument()
  });

  test('should remove old text', () => {
    // Arrange
    render(<Greeting/>)

    // Act
    const changeTextButton = screen.getByRole( 'button')
    changeTextButton.click()

    // Assert
    const helloWorldElement = screen.queryByText('It\'s goot to see you!')
    expect(helloWorldElement).toBeNull()
  });
});
