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
        "import \"./../styles/TodoItem.css\";\n",
        "import CustomCheckbox from \"./CustomCheckbox\";\n",
        "\n",
        "const TodoItem = (props) => {\n",
        "\n",
        "    console.log(\"From TodoItem.js: props.tasks: \",props.task);\n",
        "    return (\n",
        "        <div className=\"todo-item__container\" >\n",
        "            <div className=\"todo-item__wrapper\">\n",
        "                <CustomCheckbox id={`checkbox_${props.index}`} task={props.task}/>\n",
        "            </div>\n",
        "\n",
        "        </div>\n",
        ");\n",
        "};\n",
        "\n",
        "export default TodoItem;"
      ],
      "metadata": {
        "id": "mftnnlon78wH"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}