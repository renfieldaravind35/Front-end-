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
        "import './App.css';\n",
        "\n",
        "import TodoList from \"./components/TodoList\";\n",
        "\n",
        "function App() {\n",
        "    return (\n",
        "        <div className=\"App container bg-warning bg-opacity-10\">\n",
        "            <div className=\"headings_container\">\n",
        "                <div className=\"headings_wrapper pt-4\">\n",
        "                    <h1 className=\"fw-semibold fs-4\">Ny startar vi dagen.</h1>\n",
        "                    <h2 className=\"fw-bold fs-2\">Let's GO!</h2>\n",
        "                </div>\n",
        "            </div>\n",
        "            <TodoList/>\n",
        "            <div className=\"source_div pt-4\">\n",
        "                <p className=\"m-0\">Bildkällor: </p>\n",
        "                <p className=\"m-0\">Papunets bildbank, <a href=\"https://papunet.net/\">www.papunet.net</a>, </p>\n",
        "                <p className=\"m-0\"> Sergio Palao / ARASAAC, Källa:\n",
        "                    <a href=\"http://www.catedu.es/arasaac/\">ARASAAC</a>, </p>\n",
        "                <p className=\"m-0\"> Sclera, Källa: <a\n",
        "                        href=\"http://sclera.be/\">Sclera</a>\n",
        "                    , hämtade ca 2016</p>\n",
        "            </div>\n",
        "        </div>\n",
        "    );\n",
        "}\n",
        "\n",
        "export default App;"
      ],
      "metadata": {
        "id": "Wu8cEWvt_VOe"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}