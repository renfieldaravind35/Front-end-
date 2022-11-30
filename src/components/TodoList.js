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
        "import TodoItem from \"./TodoItem\";\n",
        "import {useEffect, useState} from \"react\";\n",
        "import axios from \"axios\";\n",
        "\n",
        "import \"./../styles/TodoList.css\";\n",
        "\n",
        "\n",
        "const TodoList = () => {\n",
        "\n",
        "    const [tasks, setTasks] = useState([]);\n",
        "    const [loading, setLoading] = useState(false);\n",
        "\n",
        "    // Fetching data from backend\n",
        "    useEffect(() => {\n",
        "        setLoading(true);\n",
        "        (async () => {\n",
        "            try {\n",
        "                const result = await axios.get(\n",
        "                    \"http://localhost:8080/api/v1/images\"\n",
        "                )\n",
        "                console.log(\"result.data from useEffect for fetch: \", result.data);\n",
        "                setTasks(result.data);\n",
        "                setLoading(false);\n",
        "            } catch (error) {\n",
        "                console.error(error);\n",
        "            }\n",
        "        })()\n",
        "\n",
        "    }, [])\n",
        "\n",
        "    console.log(\"current state of 'tasks'-array: \", tasks);\n",
        "\n",
        "\n",
        "    return (\n",
        "        <div className=\"todo-list__container d-flex align-items-center list-group\">\n",
        "            <div className=\"todo-list__wrapper rounded border border-warning border-3\">\n",
        "                <div className=\"todo-list list-group\">\n",
        "                    {loading ? <p>Loading....</p> : (\n",
        "                        <ul className=\"todo-ul p-0\">\n",
        "                            {tasks.map((task, index) => <TodoItem key={index} index={index} task={task}/>)}\n",
        "                        </ul>\n",
        "                    )\n",
        "                    }\n",
        "                </div>\n",
        "            </div>\n",
        "        </div>\n",
        "    );\n",
        "};\n",
        "\n",
        "export default TodoList;"
      ],
      "metadata": {
        "id": "KzwTzH5Y8Y0f"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}