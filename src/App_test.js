{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": []
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "code",
      "source": [
        "import { render, screen } from '@testing-library/react';\n",
        "import App from './App';\n",
        "\n",
        "test('renders learn react link', () => {\n",
        "  render(<App />);\n",
        "  const linkElement = screen.getByText(/learn react/i);\n",
        "  expect(linkElement).toBeInTheDocument();\n",
        "});"
      ],
      "metadata": {
        "id": "9yNV6-hc_pZG"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}