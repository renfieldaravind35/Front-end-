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
        "import React, {useState} from 'react';\n",
        "\n",
        "const CustomCheckbox = ({id, task}) => { // id=`checkbox_${index}`\n",
        "    // let starColor = \"warning\";\n",
        "    // let starColor = \"danger\";\n",
        "    const [starColor, setStarColor] = useState(\"secondary\");\n",
        "    const [backgroundColor, setBackgroundColor] = useState(\"warning\");\n",
        "    const [percentage, setPercentage] = useState(\"10\");\n",
        "    const [borderColor, setBorderColor] = useState(\"warning\");\n",
        "    const [isChecked, setIsChecked] = useState(false);\n",
        "\n",
        "    const handleChange = () =>{\n",
        "\n",
        "        if(isChecked) {\n",
        "            setStarColor(\"secondary\");\n",
        "            setBackgroundColor(\"warning\");\n",
        "            setBorderColor(\"warning\");\n",
        "            setPercentage(\"10\");\n",
        "            setIsChecked(false);\n",
        "            console.log(\"Un-clicked star.\");\n",
        "        }else{\n",
        "            setStarColor(\"warning\");\n",
        "            setBackgroundColor(\"success\");\n",
        "            setBorderColor(\"success\");\n",
        "            setPercentage(\"50\");\n",
        "            setIsChecked(true);\n",
        "            console.log(\"Star has been clicked!\");\n",
        "        }\n",
        "    }\n",
        "\n",
        "    return (\n",
        "        <div className={`custom-checkbox bg-${backgroundColor} bg-opacity-${percentage} border border-4 rounded border-${borderColor} p-2`} >\n",
        "            <input type=\"checkbox\" checked={isChecked} id={id} name={id} onChange={handleChange} value={task.usageType}/>\n",
        "            <label className=\"d-flex justify-content-around\" htmlFor={id}>\n",
        "                <div className=\"star__container d-flex align-content-center flex-wrap\">\n",
        "                    <div className=\"star__wrapper\">\n",
        "                        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"\n",
        "                             className= {`star bi bi-star-fill text-${starColor}`} viewBox=\"0 0 16 16\" aria-label=\"star\">\n",
        "                            <path\n",
        "                                d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/>\n",
        "                        </svg>\n",
        "                    </div>\n",
        "                </div>\n",
        "                <div className=\"todo__container d-flex align-content-center flex-wrap\">\n",
        "                    <div className=\"todo__wrapper\">\n",
        "                        <p className=\"todo__paragraph m-0 d-flex flex-wrap\">{task.name}</p>\n",
        "                    </div>\n",
        "                </div>\n",
        "                <div className=\"image__container\">\n",
        "                    <div className=\"image__wrapper\">\n",
        "                        <img src={task.imageUrl} className=\"task__image img-thumbnail\" alt={task.imageAltText}/>\n",
        "                    </div>\n",
        "                </div>\n",
        "            </label>\n",
        "        </div>\n",
        "    );\n",
        "};\n",
        "\n",
        "export default CustomCheckbox;"
      ],
      "metadata": {
        "id": "Y3BaHuFv7nje"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}