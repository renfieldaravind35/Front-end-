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
        "import { useEffect, useState } from \"react\";\n",
        "import axios from \"axios\";\n",
        "\n",
        "function useFetch(url) {\n",
        "    const [data, setData] = useState(\"\");\n",
        "    const [loading, setLoading] = useState(false);\n",
        "    const [error, setError] = useState(\"\");\n",
        "\n",
        "    useEffect(() => {\n",
        "        setLoading(true);\n",
        "        axios\n",
        "            .get(url)\n",
        "            .then((response) => {\n",
        "                setData(response.data);\n",
        "            })\n",
        "            .catch((err) => {\n",
        "                setError(err);\n",
        "                console.log(\"Error from useFetch first fetch: \", err)//My own error handling\n",
        "            })\n",
        "            .finally(() => {\n",
        "                setLoading(false);\n",
        "            });\n",
        "    }, [url]);\n",
        "\n",
        "    const refetch = () => {\n",
        "        setLoading(true);\n",
        "        axios\n",
        "            .get(url)\n",
        "            .then((response) => {\n",
        "                setData(response.data);\n",
        "            })\n",
        "            .catch((err) => {\n",
        "                setError(err);\n",
        "                console.log(\"Error from useFetch refetch: \", err)//My own error handling\n",
        "            })\n",
        "            .finally(() => {\n",
        "                setLoading(false);\n",
        "            });\n",
        "    };\n",
        "\n",
        "    return { data, loading, error, refetch };\n",
        "}\n",
        "\n",
        "export default useFetch;"
      ],
      "metadata": {
        "id": "z5plcCB78y0e"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}